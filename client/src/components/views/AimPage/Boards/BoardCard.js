import React from 'react';
//import styled from 'styled-components';
import { Link } from 'react-router-dom';
import boards from 'store/reducer/boards';
import './BoardCardStyle.scss';
import '../pages/BoardStyle.scss';


function BoardCard({ board }) {
    return(
    <div className="allBoard">
        <div className="LinkStyle">
            <Link to={`/board/${board.id}`}>{board.title}</Link>
        </div>
    </div>)
}

export default BoardCard;