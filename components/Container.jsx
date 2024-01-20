function Container({ className="", children }) {
    return (
        <div
            className={`w-[90%] max-w-lg mx-auto ${className}`}
        >
            {children}
        </div>
    )
}
export default Container