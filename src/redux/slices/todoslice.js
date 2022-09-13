const initialState ={
    todos:[],
}

const todoslice =(state= initialState, action) =>{
    switch (action.type){
        case 'ADD_TODO':
            return{
                ...state,
                todos:(...state.todos, action.payload),
            };
        case 'DELETE_TODO':
            return{
                ...state,
                todo: state.todos.filter(todo => todoid !== action.payload)
            }
        default: 
        return state;

    }
}

export default  todoslice;