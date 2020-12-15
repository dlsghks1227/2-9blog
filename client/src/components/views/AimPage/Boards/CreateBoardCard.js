import { passActionAsync } from 'components/middleware/CreateBoardMiddle';
import React from 'react';
import { useDispatch } from 'react-redux';
import { createBoard } from '../../../../store/reducer/boards';
import './BoardCardStyle.scss';


const CreateBoardCard = () => {
    const dispatch = useDispatch();

    return(    
    <div className="CreateBoardCardStyle">
        <div className="CreateBoardCard">
            <input type="text" size="30" placeholder="목표 주제를 적어주세요" onKeyDown={(e) => {
                if (e.key === "Enter") {
                    console.log("enter CreateBoard");
                    dispatch(passActionAsync(e.currentTarget.value));
                    e.currentTarget.value = "";
                }
            }} />
        </div>
    </div>)
}

export default CreateBoardCard;