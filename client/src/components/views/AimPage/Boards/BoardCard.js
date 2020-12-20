import React,{useRef} from 'react';
//import styled from 'styled-components';
import { Link } from 'react-router-dom';
import boards from 'store/reducer/boards';
import './BoardCardStyle.scss';
import '../pages/BoardStyle.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { deleteBoard } from '../../../../store/reducer/boards';
import { useDispatch } from 'react-redux';

function BoardCard({ board }) {

    const dispatch = useDispatch();

    const delete_button = () => {
        const action = deleteBoard(board.id);
        dispatch(action);    
    }

    return (
        <div className="allBoard">
            <div className="LinkStyle">
                <FontAwesomeIcon icon={faMinus} onClick={() => delete_button()} />
                <Link to={`/board/${board.id}`}>{board.title}</Link>
            </div>
        </div>
    );
}

export default BoardCard;