import React from "react";

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {}

const BoxUI: React.FC<BoxProps> = ({children, className, ...props}) => {
    return (
        <div className={`box ${className}`} {...props}>
            {children}
        </div>
    )
}

export default BoxUI;