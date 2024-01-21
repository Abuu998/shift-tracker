"use client"

import { useContext } from "react"
import { MenuContext } from "./Menu"

function MenuItem({ className="", children }) {
    const { toggleOpen } = useContext(MenuContext)

    return (
        <span className={`${className}`} onClick={() => toggleOpen(false)}>
            {children}
        </span>
    )
}

export default MenuItem