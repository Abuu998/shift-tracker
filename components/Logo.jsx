"use client"

import { FaTasks } from "react-icons/fa";

function Logo({ className="", labelStyles="", iconStyles="text-4xl", onClick=()=>{} }) {
    return (
        <div 
            className={`${className}`}
            onClick={onClick}
        >
            <span>
                <FaTasks className={`${iconStyles}`} />
            </span>
            <span className={`${labelStyles}`}>Shift Tracker</span>
        </div>
    )
}

export default Logo