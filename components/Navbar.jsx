import { getServerSession } from "next-auth"
import Container from "./Container"
import Logo from "./Logo"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import Profile from "./Profile"

async function Navbar() {
    const session = await getServerSession(authOptions)
    console.log(session)

    return (
        <header className="py-4">
            <Container className="flex justify-between items-center">
                <Logo className="flex items-center gap-4" labelStyles="text-2xl" />
                <Profile />
            </Container>
        </header>
    )
}

export default Navbar