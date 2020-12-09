import produce from 'immer';
import { createAction, createReducer } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';


export const CREATE_CARD = "CREATE_CARD";
export const UPDATE_CARD = "UPDATE_CARD";

export const createCard = createAction(CREATE_CARD, function prepare(listId, cardName) {
    return {
        payload: {
            id: uuid(), 
            listId, cardName,
            createdAt: new Date().toISOString(),
        }
    }
});

export const updateCard = createAction(UPDATE_CARD, function prepare(cardId, cardName) {
    return {
        payload: {
            id : uuid(),
            cardId, cardName,
            createdAt: new Date().toISOString(),
        }
    }
});


const initialState = {
    cards :[]
}

export const actions={
    CREATE_CARD,
    UPDATE_CARD
};

export default createReducer(initialState, {
    [CREATE_CARD] : (state,action)=>{
        return produce(state, draft =>{
            draft.cards =[...state.cards, {id : action.payload.id, listsId : action.payload.listId,
            cardName: action.payload.cardName}]
        })
    },
    [UPDATE_CARD] : (state,action)=>{
        return produce(state, draft=>{
            draft.cards =state.cards.map((card)=>{
                if(card.id === action.payload.cardId){
                    card = {...card, cardName : action.payload.cardName};
                }
                return card;
            })
        })
    }
});