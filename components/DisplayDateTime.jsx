"use client"

import { Suspense, useEffect, useState } from "react"
import Loader from "./Loader"
// import { HiArrowPath } from "react-icons/hi2";

function DisplayDateTime({ children }) {
    const [mounted, setMounted] = useState(false)

    if(!mounted) return <Loader />


    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <Suspense>
            { children }
        </Suspense>
    )
}

export default DisplayDateTime