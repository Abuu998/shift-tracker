"use client"

import { useState } from "react"
import Input from "./Input"
import Label from "./Label"
import Button from "../Button"

const initialState = {
    name: "",
    email: "",
    password: ""
}

function SignUpForm() {
    const [formData, setFormData] = useState(initialState)

    const handleChange = e => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col gap-4">
                <Label label="Name" labelStyle="font-semibold">
                    <Input
                        className="py-2 px-4 bg-slate-950 rounded-md focus:outline-none focus:outline-blue-500"
                        type="text"
                        name="name"
                        placeholder="i.e: John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoFocus
                    />
                </Label>
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
                className="py-2 px-6 bg-blue-500 hover:bg-blue-600 rounded-md"
            >
                Signup
            </Button>
        </form>
    )
}

export default SignUpForm