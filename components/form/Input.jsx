import PasswordInput from "./PasswordInput"

function Input({ 
    className="", 
    type="text", 
    name="", 
    placeholder="", 
    value="", 
    onChange=()=>{}, 
    required=false, 
    autoFocus=false, 
    ...props 
}) {

    if(type === "password") {
        return (
            <PasswordInput
                className={` ${className}`}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                {...props}
            />
        )
    }

    return (
        <input
            className={` ${className}`}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            autoFocus={autoFocus}
            {...props}
        />
    )
}

export default Input