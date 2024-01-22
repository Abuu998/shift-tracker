"use client"

import { useRouter } from "next/navigation"
import Button from "../Button"


const baseUrl = "http://localhost:3000/api"

const startNewShift = async (userId) => {
    const res = await fetch(`${baseUrl}/shifts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ workerId: userId })
    })

    return res.json()
}

function StartNewShift({ userId }) {
    const router = useRouter()

    return (
        <Button
            className="bg-blue-500 hover:bg-blue-600 transition-all py-3 w-full text-center font-semibold rounded-md"
            onClick={async () => {
                await startNewShift(userId)
                router.refresh()
            }}
        >
            New Shift
        </Button>
    )
}

export default StartNewShift