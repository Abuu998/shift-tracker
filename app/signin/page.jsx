import Container from "@/components/Container"
import SignInForm from "@/components/form/SignInForm"


function SignIn() {
    return (
        <main className="">
            <Container className="flex flex-col gap-16">
                <h1 className="text-3xl text-balance mt-4">Sign<span className="text-blue-500">in</span> to <span className="relative font-semibold italic text-2xl">track<span className="absolute bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[108%] left-0 h-12 -top-2 skew-y-12 -z-10"></span></span> your shifts.</h1>
                <SignInForm />
            </Container>
        </main>
    )
}

export default SignIn