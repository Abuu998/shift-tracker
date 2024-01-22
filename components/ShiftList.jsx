import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import RenderShift from "./shift/RenderShift"

export const baseUrl = "http://localhost:3000/api"

async function getAllUsersShifts(userId) {
    const res = await fetch(`${baseUrl}/users/${userId}/shifts`, {
        next: {
            revalidate: 0
        }
    })

    return res.json()
}

async function ShiftList() {
    const session = await getServerSession(authOptions)

    const userId = session?.user?.id
    const allMyShifts = await getAllUsersShifts(userId)

    const emptyShifts = allMyShifts.length < 1 && <p className="text-2xl font-semibold text-slate-700 text-center">You did not start a shift.</p>

    const allShifts = allMyShifts.map(shift => (
        <RenderShift key={shift.id} shift={shift} />
    ))

    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-2xl font-bold underline underline-offset-8 text-center">My Shifts</h1>
            {allShifts}
            {emptyShifts}
        </div>
    )
}

export default ShiftList