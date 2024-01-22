"use client"

import { useRouter } from "next/navigation"
import Button from "../Button"

const baseUrl = `${process.env.NEXTAUTH_URL}/api`

const deleteShift = async shiftId => {
    const res = await fetch(`${baseUrl}/shifts/${shiftId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    
    return res.json()
}


function DeleteShift({ shiftId }) {
    const router = useRouter()

    return (
        <Button 
            className="py-2 px-3 bg-red-200 hover:bg-red-300 font-semibold rounded-md text-red-900 self-end"
            onClick={async () => {
                await deleteShift(shiftId)
                router.refresh()
            }}
            >
            Delete Shift
        </Button>
    )
}

export default DeleteShift