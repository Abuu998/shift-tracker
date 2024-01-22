"use client"

import useToggle from "@/hooks/useToggle"
import { createContext } from "react"

export const ToggleContext = createContext()

function Toggle({ children }) {
    const [on, toggleOn] = useToggle({ initialValue: false })

    const params = {
        on, toggleOn
    }

    return (
        <ToggleContext.Provider value={params}>
            { children }
        </ToggleContext.Provider>
    )
}

export default Toggle