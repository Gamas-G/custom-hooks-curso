

import { useEffect, useReducer, useState } from 'react';

import { todoReducer } from '../08-useReducer/todoReducer';



const initialState = []

const init = () =>{
    return JSON.parse( localStorage.getItem('todos') || [] );
}


export const useTodo = () =>{


    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );
    const [ todosCount, setTodosCount ] = useState();
    const [ pendingtodosCount, setPendingtodosCount ] = useState();

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos));

        setTodosCount( todos.length );
        setPendingtodosCount( todos.filter( todo => !todo.done ).length );

    }, [todos]);

    const handleNewTodo = (todo) =>{
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }

        dispatch( action );
    }


    const handleDeleteTodo = ( id ) =>{
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }


    const handleToggleTodo = ( id ) =>{
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    return{
        todos,
        todosCount,
        pendingtodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
}