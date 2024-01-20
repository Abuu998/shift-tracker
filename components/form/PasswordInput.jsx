"use client"

import { useState } from "react"
import { HiEyeSlash, HiEye } from "react-icons/hi2";

function PasswordInput({ className="", name="", iconStyle="text-xl", placeholder="********", value="", onChange=()=>{}, required=false, ...props }) {
    const [type, setType] = useState("password")

    const icon = type === "password" ? <HiEye /> : <HiEyeSlash />

    const handleClick = () => {
        setType(prev => prev === "password" ? "text" : "password")
    }

    return (
        <div className="flex items-center w-full relative">
            <input
                className={`block w-full ${className}`}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                {...props}
            />
            <span onClick={handleClick} className={`absolute text-slate-400 cursor-pointer top-1/2 -translate-y-1/2 right-4 ${iconStyle}`}>
                {icon}
            </span>
        </div>
    )
}

export default PasswordInput