import React, { useRef } from "react";
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CardType, updateCard } from '../../../../../store/reducer/card';
import { faPen, faCheck } from "@fortawesome/free-solid-svg-icons";
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


  const completeCard = (e) => {
    const CompleteCardAim = inputEl.current.style.textDecoration;

    console.log(CompleteCardAim);

    if (CompleteCardAim == "")
      inputEl.current.style.textDecoration = "line-through";
    else
      inputEl.current.style.textDecoration = "";
  }

  console.log("ListCard :", card);
  return (
    <li>
      <div className="ListCardStyle">
        <div className="ListCardContent">
          <div className="ListCard">
            <input type="text" ref={inputEl} defaultValue={card.cardName} onKeyDown={makeCard} />
          </div>
          <div className="Icon sm">
            <FontAwesomeIcon icon={faCheck} onClick={completeCard} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default ListCard;