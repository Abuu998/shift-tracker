import { formatHours, hoursDifference } from "@/utilities/utils";
import Toggle from "../toggle"
import ShiftTitle from "./ShiftTitle";
import HandleShift from "./HandleShift";
import DeleteShift from "./DeleteShift";


function RenderShift({ shift={} }) {

    return (
        <Toggle>
            <Toggle.On>
                <ShiftTitle shift={shift} />
            </Toggle.On>
            <Toggle.Display>
                <div className="flex flex-col gap-4 ml-8 pb-8">
                    <span className="flex items-center justify-between">
                        <span className="flex items-center gap-6">
                            <span className="font-medium text-blue-400">Starting:</span>
                            <span>{shift.start ? formatHours(shift.start) : "Not started" }</span>
                        </span>
                        {!shift?.start && <HandleShift shift={shift} label="Start Shift" />}
                    </span>
                    <span className="flex items-center justify-between">
                        <span className="flex items-center gap-6">
                            <span className="font-medium text-blue-400">End:</span>
                            <span>{shift?.end ? formatHours(shift.end) : "Not started" }</span>
                        </span>
                        {(shift?.start && !shift?.end) && <HandleShift shift={shift} label="End Shift" />}
                    </span>
                    <span className="flex items-center gap-6">
                        <span className="font-medium text-blue-400">Hours Worked:</span>
                        <span>{shift.start && shift.end ? hoursDifference(shift.start, shift.end) : "Not started" }</span>
                    </span>
                    <div className="flex items-center gap-4">
                        <span className="font-medium text-blue-400">Status:</span>
                        <span className={`${shift.status === "YET_TO_START" ? "text-red-300" : shift.status === "IN_PROGRESS" ? "text-yellow-400" : "text-green-400"}`}>
                            {shift.status && shift.status === "YET_TO_START" ? "Pending" : shift.status === "IN_PROGRESS" ? "In Progress" : shift.status === "ENDED" ? "Ended" : "-" }
                        </span>
                    </div>
                    <hr className="border-slate-800" />
                    <DeleteShift shiftId={shift.id} />
                </div>
            </Toggle.Display>
        </Toggle>
    )
}

export default RenderShift



// {
//     id: '65ad64bf00725cf4d6238cee',
//     createdAt: '2024-01-21T18:38:55.138Z',
//     updatedAt: '2024-01-21T18:38:55.138Z',
//     start: null,
//     end: null,
//     status: 'YET_TO_START',
//     workerId: '65ad06ce365a0b78446e40c6'
// }