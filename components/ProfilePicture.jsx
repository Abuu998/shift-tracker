import Image from "next/image";
import { HiUserCircle } from "react-icons/hi2";


function ProfilePicture({ className="", session }) {

    if(!session?.user?.image) {
        return (
            <div className={`w-[100px] h-[100px] rounded-full`}>
                <HiUserCircle className="block w-full h-full text-slate-500" />
            </div>
        )
    }

    return (
        <span>
            <Image 
                src={session?.user?.image}
                alt={`${session?.user?.name} image.`}
                width={100}
                height={100}
                className="rounded-full"
            />
        </span>
    )
}

export default ProfilePicture