import { formatHours, hoursDifference } from "@/utilities/utils";
import Toggle from "../toggle"
import ShiftTitle from "./ShiftTitle";
import HandleShift from "./HandleShift";
import DeleteShift from "./DeleteShift";
import DisplayDateTime from "../DisplayDateTime";


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
                            <DisplayDateTime>
                                <span>{shift.start ? formatHours(shift.start) : "Not started" }</span>
                            </DisplayDateTime>
                        </span>
                        {!shift?.start && <HandleShift shift={shift} label="Start Shift" />}
                    </span>
                    <span className="flex items-center justify-between">
                        <span className="flex items-center gap-6">
                            <span className="font-medium text-blue-400">End:</span>
                            <DisplayDateTime>
                                <span>{shift?.end ? formatHours(shift.end) : "Not started" }</span>
                            </DisplayDateTime>
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
