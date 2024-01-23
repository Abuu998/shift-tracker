

import { TbLoader } from "react-icons/tb";

function Loader({ className="text-xl" }) {
    return <TbLoader className={`animate-spin ${className}`} />
}

export default Loader