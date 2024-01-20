import Container from "@/components/Container"
import SignUpForm from "@/components/form/SignUpForm"

function SignUp() {
    return (
        <main className="">
            <Container className="flex flex-col gap-16">
                <h1 className="text-3xl text-balance mt-4">Sign<span className="text-blue-500">up</span> to start <span className="relative font-semibold italic text-2xl">tracking<span className="absolute bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[108%] left-0 h-12 -top-2 skew-y-12 -z-10"></span></span> your shifts.</h1>
                <SignUpForm />
            </Container>
        </main>
    )
}

export default SignUp