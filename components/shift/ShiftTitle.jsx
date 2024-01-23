"use client"

import useToggle from "@/hooks/useToggle";
import { formatDate } from "@/utilities/utils"
import { BsCaretDownFill, BsCaretRightFill } from "react-icons/bs";
import DisplayDateTime from "../DisplayDateTime";

function ShiftTitle({ shift={} }) {
    const [on, toggleOn] = useToggle({ initialValue: false })

    return (
        <div className="flex items-center justify-between font-semibold">
            <div className="flex items-center gap-4 cursor-pointer transition-all" onClick={() => toggleOn()}>
                { on ? <BsCaretDownFill className="text-2xl" /> : <BsCaretRightFill className="text-2xl" /> }
                <DisplayDateTime>
                    <span className="font-semibold">{formatDate(shift.createdAt)}</span>
                </DisplayDateTime>
            </div>
            {
                !on && <div className="flex items-center gap-4 text-sm">
                    <span>Status:</span>
                    <span className={`italic ${shift.status === "YET_TO_START" ? "text-red-300" : shift.status === "IN_PROGRESS" ? "text-yellow-400" : "text-green-400"}`}>
                        {shift.status && shift.status === "YET_TO_START" ? "Pending" : shift.status === "IN_PROGRESS" ? "In Progress" : shift.status === "ENDED" ? "Ended" : "-" }
                    </span>
                </div>
            }
        </div>
    )
}

export default ShiftTitle
