"use client"

import { Suspense } from "react"

function DisplayDateTime({ children }) {
    return (
        <Suspense fallback={<p>Loading time...</p>}>
            { children }
        </Suspense>
    )
}

export default DisplayDateTime