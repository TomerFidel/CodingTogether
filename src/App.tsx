import React from 'react';
import CraeteTodoForm from './components/Form/CreateTodoForm';
import { validationScheme } from './components/Form/TodoValidation';

function App() {
    return (
        <>
            <div className="App">
                <CraeteTodoForm validationScheme={validationScheme} onSubmit={console.log} />
            
            </div>
        </>
    );
}

export default App;
