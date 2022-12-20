import { useState } from "react";
import { FormErrors, FormValues, ValidationScheme } from "../CreateTodoForm";

interface UseErrorsOutput {
    errors: FormErrors,
    validate: (values: FormValues) => FormErrors
}

export function useErrors(validationScheme: ValidationScheme): UseErrorsOutput {

    const [errors, setErrors] = useState<FormErrors>({});

    function validateInputs(values: FormValues) {
        return Object.entries(values).reduce((errors: FormErrors, [name, value]) => {
            const error = validateField(name, value);
            if (error) {
                errors[name] = error;
            }

            return errors;
        }, {})
    }

    function validateField(name: string, value: string): string | undefined {
        if (typeof validationScheme[name] === 'function') {
            return validationScheme[name](value);
        }
    }

    function validate(values: FormValues) {
        const errors = validateInputs(values);

        setErrors(errors);

        return errors;
    }

    return {
        errors,
        validate
    }
}