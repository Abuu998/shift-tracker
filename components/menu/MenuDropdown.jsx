"use client"

import { useContext } from "react"
import { MenuContext } from "./Menu"

function MenuDropdown({ className="", children }) {
    const { open } = useContext(MenuContext)

    return open && (
        <div className={`absolute ${className}`}>
            {children}
        </div>
    )
}

export default MenuDropdown