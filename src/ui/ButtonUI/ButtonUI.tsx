import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}

const ButtonUI: React.FC<ButtonProps> = ({title, className, ...props}) => {
    return (
        <button
            className={`button ${className}`}
            {...props}
        >
            {title}
        </button>
    )
}

export default ButtonUI;