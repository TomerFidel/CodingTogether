import {useState} from "react";

interface FormState {
    values: {[key: string]: string};
    errors: {[key: string]: string};
}

const initialState = {
    values: {
        name: "",
        date: "",
        priority: ""
    },
    errors: {}
}

type UseFormSettings = {
    [key: string]: {
        validate: (value: string) => boolean;
        errorMessage: string;
    }
}

export const useForm = (settings: UseFormSettings) => {
    const [formState, setFormState] = useState<FormState>(initialState);

    const onChange = (name: string, value: string) => {
        setFormState(previousState => ({
            ...previousState,
            values: {
                ...previousState.values,
                [name]: value
            }
        }))
    }

    const onSubmit = (submitCallback: any) => {
        const values = formState.values;
        let isError = false;
        let errors: {[key: string]: string} = {}
        Object.entries(values).forEach(([name, value]) => {
            const fieldSettings = settings[name];
            if (fieldSettings) {
                if (!fieldSettings.validate(value)) {
                    isError = true;
                    errors[name] = fieldSettings.errorMessage;
                }
            }
        })

        setFormState((prevState) => {
            return {
                ...prevState,
                errors: errors
            }
        })
    }

    return {
        values: formState.values,
        errors: formState.errors,
        onChange: onChange,
        submitFunc: onSubmit
    }
}