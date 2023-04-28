import { INSERT_TODO, TOGGLE_TODO } from "./Types";


const initialState = {
    data: []
};

const reducer = (state= initialState, action) => {

    switch (action.type) {
        case INSERT_TODO:
            return{
                ...state,
                date: [
                    ...state.data,
                    {
                        id:       action.payload.id,
                        content:  action.payload.content,
                        compelet: false
                    }
                ]
            }

        case TOGGLE_TODO:

    
        default:
            break;
    }

};