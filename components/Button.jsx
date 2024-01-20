function Button({className="", onClick=()=>{}, children, ...props }) {
    return (
        <button
            className={`cursor-pointer ${className}`}
            onClick={onClick}
            {...props}
        >
            { children }
        </button>
    )
}

export default Button