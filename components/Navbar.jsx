import { getServerSession } from "next-auth"
import Container from "./Container"
import Logo from "./Logo"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import Profile from "./Profile"
import Link from "next/link"

async function Navbar() {
    const session = await getServerSession(authOptions)

    return (
        <header className="py-4 sticky top-0 border-b border-b-slate-800 border-b-solid">
            <Container className="flex justify-between items-center">
                <Link href="/" className="cursor-pointer">
                    <Logo className="flex items-center gap-4" labelStyles="text-2xl" />
                </Link>
                <Profile session={session} />
            </Container>
        </header>
    )
}

export default Navbar