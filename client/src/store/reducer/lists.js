import produce from 'immer';
import { createAction, createReducer } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid';

export const CREATE_LISTS = "CREATE_LISTS";
export const UPDATE_LISTS_TITLE = "UPDATE_LISTS_TITLE";

export const createLists = createAction(CREATE_LISTS, function prepare(title, boardId) {
    return {
        payload: {
            id: uuid(),
            title: title,
            boardId: boardId,
            createdAt: new Date().toISOString(),
        }
    }
});

export const updateListsTitle = createAction(UPDATE_LISTS_TITLE, function prepare(title) {
    return {
        payload: {
            id: id,
            title: title,
            createdAt: new Date().toISOString(),
        }
    }
});


const initialState = {
    lists: []
}

export default createReducer(initialState, {
    [CREATE_LISTS]: (state, action) => {
        console.log("action :", action);
        return produce(state, draft => {
            draft.lists = [...state.lists, {
                id: action.payload.id,
                boardId: action.payload.boardId,
                title: action.payload.title
            }]
        })
    },
    [UPDATE_LISTS_TITLE]: (state, action) => {
        return produce(state, draft => {
            draft.lists = state.lists.map((list) => {
                if (list.id === action.payload.id)
                    list = { ...list, title: action.payload.title }
                return list;
            })
        })
    }
})