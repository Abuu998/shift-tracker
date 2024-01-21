"use client"

import { useRouter } from "next/navigation"
import { HiOutlineArrowLeft } from "react-icons/hi2";


function GoBackLink() {
    const router = useRouter()

    return (
        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => router.push("/")}>
            <HiOutlineArrowLeft className="text-xl" />
            <span className="group-hover:underline underline-offset-4 transition-all">Back to home</span>
        </div>
    )
}

export default GoBackLink