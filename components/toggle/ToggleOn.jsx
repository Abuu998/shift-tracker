"use client"

import { useContext } from "react"
import { ToggleContext } from "./Toggle"

function ToggleOn({ children }) {
    const { toggleOn } = useContext(ToggleContext)

    return (
        <div onClick={() => toggleOn()}>
            {children}
        </div>
    )
}

export default ToggleOn