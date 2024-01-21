import { useState } from "react"

function useToggle({ initialValue=false, onToggle=()=>{} }) {
    const [on, setOn] = useState(initialValue)

    const toggle = (v) => {
        if(!v) {
            setOn(prev => !prev)
        } else {
            setOn(v)
        }
    }

    return [on, toggle]
}

export default useToggle