"use client"

import { useState } from "react"
import Input from "./Input"
import Label from "./Label"
import Button from "../Button"
import { signIn } from "next-auth/react"
import FormDivider from "../FormDivider"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation"

const initialState = {
    email: "",
    password: ""
}

function SignInForm() {
    const [formData, setFormData] = useState(initialState)
    const [error, setError] = useState("")
    const router = useRouter()

    const handleChange = e => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault()

        const res = await signIn("credentials", {
            callbackUrl: "http://localhost:3000/",
            redirect: true,
            email: formData.email,
            password: formData.password
        })

        if(!res.ok) {
            setError("Something went wrong.")
        } else {
            router.replace("/")
            router.refresh()
        }

        setFormData(initialState)
    }

    return (
        <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col gap-4">
                {error && <p className="text-sm text-red-400">{error}</p>}
                <Label label="Email" labelStyle="font-semibold">
                    <Input
                        className="py-2 px-4 bg-slate-950 rounded-md focus:outline-none focus:outline-blue-500"
                        type="email"
                        name="email"
                        placeholder="i.e: email@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Label>
                <Label label="Password" labelStyle="font-semibold">
                    <Input
                        className="py-2 px-4 bg-slate-950 rounded-md focus:outline-none focus:outline-blue-500"
                        type="password"
                        name="password"
                        placeholder="********"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </Label>
            </div>
            <Button 
                type="submit"
                className="py-2 px-6 bg-blue-500 hover:bg-blue-600 rounded-md font-medium"
            >
                Signin
            </Button>
            <FormDivider />
            <div className="flex flex-col gap-4">
                <Button 
                    type="button"
                    className="py-2 px-6 bg-slate-100 hover:bg-slate-200 text-slate-950 rounded-md flex items-center justify-center gap-4"
                    onClick={() => signIn("google", { callbackUrl: 'http://localhost:3000/' })}
                >
                    <span className="text-xl">
                        <FcGoogle />
                    </span>
                    <span className="font-medium">Signin with Google</span>
                </Button>
                <Button 
                    type="button"
                    className="py-2 px-6 bg-slate-950 hover:bg-slate-800 text-slate-100 rounded-md flex items-center justify-center gap-4"
                    onClick={() => signIn("github", { callbackUrl: 'http://localhost:3000/' })}
                >
                    <span className="text-xl">
                        <FaGithub />
                    </span>
                    <span className="font-medium">Signin with Github</span>
                </Button>
            </div>
        </form>
    )
}

export default SignInForm