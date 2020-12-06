import { passActionAsync } from 'components/middleware/CreateBoardMiddle';
import React from 'react';
import {useDispatch} from 'react-redux';
import {createBoard} from '../../../../store/reducer/boards';

const CreateBoardCard = ()=>{
    const dispatch = useDispatch();

    return <div>
        <input type="text" placeholder="Create new board" onKeyDown = {(e)=>{
            if(e.key === "Enter"){
                console.log("enter CreateBoard");
                dispatch(passActionAsync(e.currentTarget.value));
                e.currentTarget.value="";
            }
        }}></input>
    </div>
}

export default CreateBoardCard;