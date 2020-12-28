import React, { useState, useEffect,useRef, useMemo } from 'react';
import ListCard from './CardComponent/ListCard';
import CreateCard from './CardComponent/CreateCard';
import { useParams } from 'react-router-dom';
import { updateListsTitle,deleteLists } from '../../../../store/reducer/lists';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import './CreateList.scss';

const Lists = ({ list }) => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const InputRef = useRef();

    const [cardState, setCardState] = useState(false);

    const cards = useSelector((state) => {
        return state.card.cards.filter((card) => card.listsId === list.id && card.cardName !== "");
    });

    console.log("card확인 : ",cards);

    const boardLists = useSelector((state) => {
        if (id !== undefined)
            return state.lists.lists.filter((list) => list.boardId === id); 
    });
    
    const listDelete=(e)=>{
        const deleteAction = deleteLists(list.id);
        console.log(deleteAction);
        dispatch(deleteAction);
    }

    return (
        <div className="ListsWrapper">
            <div className="ListsContent">
                <div className="ListHeaderWrapper" >
                    <input type="text" ref={InputRef} defaultValue={list.title} 
                        onKeyDown={(e) => {
                            const value = e.currentTarget.value;
                            if (e.key == "Enter") {
                                if(value!==""){
                                    dispatch(updateListsTitle(list.id, e.currentTarget.value));
                                    e.currentTarget.blur();
                                }
                                else{
                                    alert("리스트명을 입력해주세요.");
                                }
                            }
                        }}
                    />
                      <FontAwesomeIcon icon={faMinus} onClick={listDelete} />
                </div>
                <ul>
                    {boardLists.map((lists, i) => {
                        <div key={i}>{lists}</div>
                    })}
                    {cards.map((card) => <ListCard key={card.id} card={card} />)}
                </ul>
                <CreateCard listId={list.id} />
            </div>
        </div>)
}

export default Lists;