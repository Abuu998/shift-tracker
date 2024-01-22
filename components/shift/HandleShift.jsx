"use client"

import Button from "../Button"
import { useRouter } from "next/navigation"

const baseUrl = "http://localhost:3000/api"

const startShift = async (shiftId) => {
    const res = await fetch(`${baseUrl}/shifts/${shiftId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            start: new Date().toUTCString(),
            status: "IN_PROGRESS"
        })
    })

    return res.json()
}

const endShift = async (shiftId) => {
    const res = await fetch(`${baseUrl}/shifts/${shiftId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            end: new Date().toUTCString(),
            status: "ENDED"
        })
    })

    return res.json()
}



function HandleShift({ label="", shift={} }) {
    const router = useRouter()

    if(label === "Start Shift") {
        return (
            <Button 
                className="py-2 px-3 bg-blue-300 hover:bg-blue-400 font-semibold rounded-md text-slate-950"
                onClick={async () => {
                    await startShift(shift.id)
                    router.refresh()
                }}
                >
                {label}
            </Button>
        )
    } else {
        return (
            <Button 
                className="py-2 px-3 bg-blue-300 hover:bg-blue-400 font-semibold rounded-md text-slate-950"
                onClick={async () => {
                    await endShift(shift.id)
                    router.refresh()
                }}
            >
                {label}
            </Button>
        )
    }

}

export default HandleShift