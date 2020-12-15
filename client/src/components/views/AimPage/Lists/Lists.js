import React, { useState, useEffect } from 'react';
import ListCard from './CardComponent/ListCard';
import CreateCard from './CardComponent/CreateCard';
import { useParams } from 'react-router-dom';
import { updateListsTitle } from 'store/reducer/Lists';
import { useSelector, useDispatch } from 'react-redux';
import './CreateList.scss';

const Lists = ({ list }) => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const cards = useSelector((state) => {
        return state.card.cards.filter((card) => card.listsId === list.id && card.cardName !== "");
    });

    const boardLists = useSelector((state) => {
        if (id !== undefined)
            return state.lists.lists.filter((list) => list.boardId === id); //return을 붙여야 하나요..?
    });

   

    return (
        <div className="ListsWrapper">
            <div className="ListsContent">
                <div className="ListHeaderWrapper">
                    <input type="text" defaultValue={list.title} //list 출력이긴 한데요
                        onKeyDown={(e) => {
                            const value = e.currentTarget.value;
                            if (e.key == 'enter' && value) {
                                dispatch(updateListsTitle(list.id, e.currentTarget.value));
                                e.currentTarget.blur();
                            }
                        }}
                    />
                </div>
                <ul>
                    {boardLists.map((lists, i) => {
                        <div key={i}>{lists}</div>
                    })}
                    {cards.map((card, i) => <ListCard key={i} card={card} />)}
                </ul>
                <CreateCard listId={list.id} />
            </div>
        </div>)
}

export default Lists;