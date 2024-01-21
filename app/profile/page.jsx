import Container from "@/components/Container"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import ProfilePicture from "@/components/ProfilePicture"
import GoBackLink from "@/components/GoBackLink"

async function ProfilePage() {
    const session = await getServerSession(authOptions)

    return (
        <main>
            <Container className="flex flex-col gap-16">
                <GoBackLink />
                <div className="flex flex-col gap-4 items-center">
                    <ProfilePicture session={session} />
                    <p className="font-medium text-2xl">{session?.user?.name}</p>
                    <p className="text-sm">{session?.user?.email}</p>
                </div>
            </Container>
        </main>
    )
}

export default ProfilePage