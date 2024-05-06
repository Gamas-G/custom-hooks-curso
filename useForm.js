import { useState } from "react";


export const useForm = ( iniitialForm = {} ) =>{


    const [ formState, setFormState ] = useState( iniitialForm );


    const onInputChange = ({ target }) =>{
        const { value, name } = target;
        // console.log(formState.username);
        // console.log([name]);

        setFormState({
            ...formState,
            [name]: value //ESTO SES UN COMPUTED PROPERTY (FAVOR DE INDAGAR)
        });
    }

    const onResetForm = () =>{
        setFormState(iniitialForm);
    }


    return{
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}