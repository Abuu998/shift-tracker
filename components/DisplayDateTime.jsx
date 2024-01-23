"use client"

import { Suspense, useEffect, useState } from "react"
import Loader from "./Loader"
// import { HiArrowPath } from "react-icons/hi2";

function DisplayDateTime({ children }) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted) return <Loader />
    
    return (
        <Suspense fallback={<Loader />}>
            { mounted && children }
        </Suspense>
    )
}

export default DisplayDateTime