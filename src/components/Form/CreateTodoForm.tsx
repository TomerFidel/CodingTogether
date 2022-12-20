import { useState } from "react";
import { useErrors } from "./hooks/useErrors";

export interface ValidationScheme {
    [key: string]: (value: any) => string | undefined
}

interface CraeteTodoFormProps {
    onSubmit: (values: FormValues) => void,
    validationScheme: ValidationScheme
}

export interface FormValues {
    name?: string,
    date?: string,
    priority?: string
}

export interface FormErrors {
    [key: string]: string
}

export default function CraeteTodoForm(props: CraeteTodoFormProps) {

    const {validationScheme, onSubmit} = props;

    const [values, setValues] = useState<FormValues>({priority: "1"});

    const {errors, validate} = useErrors(validationScheme);

    function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const {name, value} = e.currentTarget;
        setValues({...values, [name]: value});
    }

    function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        const errors = validate(values);
        if (Object.keys(errors).length === 0) {
            onSubmit(values);
        }
    }

    return (
        <>
            <form className="form">
                <h2>Create Todo</h2>
                
                <input className="input" name="name" onChange={onChange} value={values["name"]} />
                {errors["name"] && <span className="error">{errors["name"]}</span>}
                
                <input className="input" name="date" onChange={onChange} />
                {errors["date"] && <span className="error">{errors["date"]}</span>}

                <select className="select" name="priority" onChange={onChange}>
                    <option label={"Low"} value={1} />
                    <option label={"Medium"} value={2} />
                    <option label={"High"} value={3} />
                </select>
                <div>
                    <button className="button" onClick={handleSubmit}>Submit</button>
                </div>
        </form>
        </>
    )
}