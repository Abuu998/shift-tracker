"use client"

import useToggle from "@/hooks/useToggle"
import { createContext } from "react"

export const MenuContext = createContext() 

function Menu({ children }) {
    const [open, toggleOpen] = useToggle({ initialValue: false })

    const params = {
        open, toggleOpen
    }

    return (
        <MenuContext.Provider value={params}>
            <div className="relative">
                {children}
            </div>
        </MenuContext.Provider>
    )
}

export default Menu