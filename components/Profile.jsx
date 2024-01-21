"use client"

import { signOut, signIn } from "next-auth/react"
import Button from "./Button"
import Menu from "./menu"
import Image from "next/image"
import Link from "next/link"
import { HiUser, HiOutlineUserCircle } from "react-icons/hi2";
import { IoLogOutOutline } from "react-icons/io5";

function Profile({ session, width=32, height=32 }) {

    if(!session?.user) {
        return (
            <Button onClick={() => signIn()}>
                Signin
            </Button>
        )
    }

    const profilePic = session?.user?.image ? (
        <Image
            src={session?.user?.image}
            alt={`${session?.user?.name}'s image.`}
            width={width}
            height={height}
            className="rounded-full"
        />
    ) : (
        <HiOutlineUserCircle className={`block w-8 h-8 rounded-full`} />
    )

    return (
            <Menu>
                <Menu.Button>
                    {profilePic}
                </Menu.Button>
                <Menu.Dropdown className="border border-slate-800 border-solid shadow-md shadow-slate-800 right-0 top-full mt-2 bg-slate-900 flex flex-col divide-y divide-slate-800 overflow-hidden rounded-md">
                    <Menu.Item className="py-2 px-4 hover:bg-slate-700 cursor-pointer">
                        <Link className="flex items-center gap-3" href="/profile">
                            <HiUser className="text-lg" />
                            <span>Profile</span> 
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="py-2 px-4 hover:bg-slate-700 cursor-pointer">
                        <Button 
                            className="flex items-center gap-3" 
                            onClick={() => signOut()}
                        >
                            <IoLogOutOutline className="text-lg" />
                            <span>Logout</span>
                        </Button>
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        )
}
    // <div>
        // <Button>Signout</Button>
    // </div>
    
export default Profile