"use client"

import { signOut } from "next-auth/react"
import Button from "./Button"

function Profile() {
    return (
        <div>
            <Button onClick={() => signOut()}>Signout</Button>
        </div>
    )
}

export default Profile