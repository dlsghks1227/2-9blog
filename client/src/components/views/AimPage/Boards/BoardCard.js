import React from 'react';
//import styled from 'styled-components';
import {Link} from 'react-router-dom';
import boards from 'store/reducer/boards';


const BoardCard = ({key, board})=>{
    //console.log("b",props); 

    console.log("b" ,board);
    console.log("key", key);
    return <div>
        <Link to={`/board/${board.id}`}>{board.title}</Link>
    </div>
}

export default BoardCard;