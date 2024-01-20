import NextAuth from "next-auth/next";
import db from "@/prisma";
import { compare } from "bcrypt";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "@/utilities/db";


export const authOptions = {
    adapter: PrismaAdapter(db),
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            async authorize(creds) {
                const { email, password } = creds

                try {
                    await connectToDb()

                    const user = await db.user.findUnique({
                        where: { email },
                    })

                    if(!user) return null

                    const isPass = await compare(password, user.password)

                    if(!isPass) return null

                    const returnedUser = {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        image: user.image
                    }

                    return returnedUser
                } catch (err) {
                    return null
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
    ],
    callbacks: {
        async signIn({ profile }) {
            console.log("STARTING LOG IN")
            if(!profile) return true
            
            console.log("LOG IN WITH auth0 PROVIDERS")

            try {
                
                const findUser = await db.user.findUnique({ where: { email: profile.email } })

                if(findUser) return true
                
                const saved = await db.user.create({
                    data: {
                        name: profile.name,
                        email: profile.email,
                        image: profile.image || profile.picture
                    },
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        image: true
                    }
                })

            } catch (err) {
                return false
            }
        },

        async jwt({ token, user }) {
            if(user) {
                return {
                    ...token,
                    id: user.id,
                }
            }

            return token
        },

        async session({ session, token }) {
            session.user.id = token.id
            console.log({ SESSION_TOKEN: token })

            return session
        }
    },
    pages: {
        signIn: "/signin"
    },
    secret: process.env.NEXTAUTH_SECRET
}

// const handler = NextAuth()
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
