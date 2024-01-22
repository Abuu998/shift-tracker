"use client"

import { useContext } from "react"
import { ToggleContext } from "./Toggle"

function ToggleDisplay({ children }) {
    const { on } = useContext(ToggleContext)

    return on ? children : null
}

export default ToggleDisplay