import produce from 'immer';
import { createAction, createReducer } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';


export const CREATE_CARD = "todo/CREATE_CARD";
export const UPDATE_CARD = "todo/UPDATE_CARD";
export const DELETE_CARD = "todo/DELETE_CARD";

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

export const deleteCard = createAction(DELETE_CARD, function prepare(cardId){
    return{
        payload: {
            cardId : cardId
        }
    }
})


const initialState = {
    cards :[]
}

export const actions={
    CREATE_CARD,
    UPDATE_CARD,
    DELETE_CARD
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
    },
    [DELETE_CARD] : (state,action)=>{
        console.log("action : ",action.payload.cardId)
        console.log(state.cards);
        return produce(state, draft => {
            draft.cards = state.cards.filter((card)=> card.id !== action.payload.cardId);
        })
    }
});