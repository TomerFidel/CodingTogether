import React from "react";
import TextFieldUI from "../../ui/TextFieldUI/TextFieldUI";
import SelectFieldUI from "../../ui/SelectFieldUI/SelectFieldUI";
import ButtonUI from "../../ui/ButtonUI/ButtonUI";
import {useForm} from "./TodoForm.hooks";

interface TodoFormProps {
    onSubmit: (formValues: any) => void;
    defaultValues?: any;
}

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit, defaultValues }) => {
    const { values, errors, onChange, submitFunc } = useForm({
        name: {
            validate: (value) => Boolean(value),
            errorMessage: "Name is required field"
        }
    });

    console.log({ errors });

    const handleSubmit = (values: any) => {
        console.log(values);
    }

    console.log({ values });

    return (
        <div className={'form'}>
            <TextFieldUI
                placeholder={"Title"}
                error={errors["name"]}
                name={"name"}
                handleChange={onChange}
                value={values["name"]}
            />
            <TextFieldUI
                placeholder={"Date (dd/mm/yyyy)"}
                error={errors["date"]}
                name={"date"}
                handleChange={onChange}
                value={values["date"]}
            />
            <SelectFieldUI
                name={"priority"}
                handleChange={onChange}
                value={values["priority"]}
                options={[
                    { value: "1", label: "Low" },
                    { value: "2", label: "Medium" },
                    { value: "3", label: "High" }
                ]}
            />
            <div className={'buttonWrapper'}>
                <ButtonUI title={"Submit"} onClick={() => submitFunc(handleSubmit)} />
            </div>
        </div>
    )
}

export default TodoForm;