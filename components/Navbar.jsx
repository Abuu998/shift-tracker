import Container from "./Container"
import Logo from "./Logo"

function Navbar() {
    return (
        <header className="py-4">
            <Container>
                <Logo className="flex items-center gap-4" labelStyles="text-2xl" />
            </Container>
        </header>
    )
}

export default Navbar