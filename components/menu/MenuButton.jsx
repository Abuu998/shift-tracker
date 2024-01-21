"use client"

import { useContext } from "react"
import { MenuContext } from "./Menu"


function MenuButton({ className="", children }) {
    const { toggleOpen } = useContext(MenuContext)

    return (
        <div className={`cursor-pointer ${className}`} onClick={() => toggleOpen()}>
            {children}
        </div>
    )
}

export default MenuButton