import React from 'react';
import BoxUI from "../../ui/BoxUI/BoxUI";
import TodoForm from "../TodoForm/TodoForm";

const AddTodo = () => {
    const addTodo = (formValues: any) => {
        console.log({ formValues });
    }
    
    return (
        <BoxUI className={'addTodoBox'}>
            <h2 className={'addTodoTitle'}>Add TODO Item</h2>
            <TodoForm onSubmit={addTodo} />
        </BoxUI>
    )
}

export default AddTodo;