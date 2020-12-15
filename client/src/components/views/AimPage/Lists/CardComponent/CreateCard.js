import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './CreateCardStyle.scss';
import { createCard } from '../../../../../store/reducer/card';
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CreateCard = ({ listId }) => {

    const dispatch = useDispatch();
    const [cardName, setCardName] = useState('');

    const create = () => {
        console.log("createEncter");
        const action = createCard(listId, cardName);
        dispatch(action);

        setCardName('');
    }

    return (
        <div className="CreateCard">
            <div className="CreateCardWrapper">
                <input placeholder="Add Create Card"
                    onChange={(e) => { setCardName(e.target.value) }}
                    value={cardName}
                    onKeyDown={(e) => {
                        if (e.key == "Enter" && cardName !== "") {create()}
                    }} />
            </div>
            <FontAwesomeIcon icon={faPlus} onClick={() =>{ 
                if(cardName !== "") create()}} />
        </div>
    )
}

export default CreateCard;