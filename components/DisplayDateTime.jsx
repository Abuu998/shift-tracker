"use client"

import { Suspense, useEffect, useState } from "react"
import Loader from "./Loader"
// import { HiArrowPath } from "react-icons/hi2";

function DisplayDateTime({ children }) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])
    
    return (
        <Suspense key={mounted ? "locale" : "utc"}>
            { children }
        </Suspense>
    )
}

export default DisplayDateTime