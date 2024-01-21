import Container from "@/components/Container"
import SignUpForm from "@/components/form/SignUpForm"
import Link from "next/link"

function SignUp() {
    return (
        <main className="">
            <Container className="flex flex-col gap-10">
                <h1 className="text-3xl text-balance mt-4">Sign<span className="text-blue-500">up</span> to start <span className="relative font-semibold italic text-2xl">tracking<span className="absolute bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[108%] left-0 h-12 -top-2 skew-y-12 -z-10"></span></span> your shifts.</h1>
                <SignUpForm />
                <div className="flex flex-col gap-2">
                    <p className="font-medium">Already have account?</p>
                    <Link className="py-2 rounded-md outline outline-1 outline-slate-700 hover:outline-none hover:bg-slate-950 transition-all text-center" href="/signin">Signin</Link>
                </div>
            </Container>
        </main>
    )
}

export default SignUp