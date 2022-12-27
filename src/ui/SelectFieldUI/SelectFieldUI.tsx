import React, {ChangeEvent} from "react";

type Option = {
    value: string;
    label: string;
}

interface SelectFieldProps extends React.InputHTMLAttributes<HTMLSelectElement> {
    name: string;
    error?: string;
    handleChange: (name: string, value: string) => void;
    options: Option[];
}

const SelectFieldUI: React.FC<SelectFieldProps> = ({
    options,
    error,
    className,
    handleChange,
    name,
    ...props
}) => {

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        handleChange(name, e.target.value);
    }

    return (
        <>
            <select
                className={`select ${className}`}
                name={name}
                onChange={onChange}
                {...props}
            >
                {options.map(({ value, label }) => (
                    <option key={value} value={value}>{label}</option>
                ))}
            </select>
            { error }
        </>
    )
}

export default SelectFieldUI;