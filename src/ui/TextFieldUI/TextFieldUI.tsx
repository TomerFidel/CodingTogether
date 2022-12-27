import React, {ChangeEvent} from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    error?: string;
    handleChange: (name: string, value: string) => void;
}

const TextFieldUI: React.FC<TextFieldProps> = ({
    error,
    className,
    handleChange,
    name,
    ...props
}) => {

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        handleChange(name, e.target.value);
    }

    return (
        <>
            <input
                type={"text"}
                className={`input ${className}`}
                name={name}
                onChange={onChange}
                {...props}
            />
            { error }
        </>
    )
}

export default TextFieldUI;