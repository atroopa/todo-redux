import { INSERT_TODO, TOGGLE_TODO } from "./Types";

const initialId = 0

export const insertTodo = row => {
    return {
        type: INSERT_TODO,
        payload: {
            id: ++initialId,
            content: row
        }
    }
}