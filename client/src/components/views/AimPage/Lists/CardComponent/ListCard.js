import React, { useRef } from "react";
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CardType, updateCard } from '../../../../../store/reducer/card';
import { faPen } from "@fortawesome/free-solid-svg-icons";
import './ListCardStyle.scss';

function ListCard({ card }) {
  //카드 업데이트

  const inputEl = useRef(null);
  const dispatch = useDispatch();

  const makeCard = (e) => {
    const value = e.currentTarget.value;
    
    if (e.key === "enter" && value != "") {
      const action = updateCard(card.id, e.currentTarget.value);
      dispatch(action);
      e.currentTarget.blur();
    }
  }

    console.log("ListCard :", card);
    return (
      <li>
        <div className="ListCardStyle">
          <div className="ListCardContent">
            <div className="ListCard">
              <input type="text" ref={inputEl} defaultValue={card.cardName} onKeyDown={makeCard} />
            </div>
            <div className="Icon">
              <button onClick={() => {
                if (inputEl && inputEl.current) {
                  inputEl.current.focus();
                }
              }} />
              <FontAwesomeIcon icon={faPen} size="sm" color="rgba(0,0,0,0,5)" />
            </div>

          </div>
        </div>
      </li>
    );
  };

  export default ListCard;