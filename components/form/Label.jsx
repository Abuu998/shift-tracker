function Label({ className="", label="", labelStyle="", children, ...props }) {
    return (
        <label
            className={`flex flex-col gap-2 ${className}`}
            {...props}
        >
            <span className={`${labelStyle}`}>{label}:</span>
            {children}
        </label>
    )
}

export default Label