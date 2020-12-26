import React,{useRef, useDispatch} from 'react';
//import styled from 'styled-components';
import { Link } from 'react-router-dom';
import boards from 'store/reducer/boards';
import './BoardCardStyle.scss';
import '../pages/BoardStyle.scss';
import { Card, Button } from 'react-bootstrap'
import note2 from './img/note2.jpg';

const cardStyle={
    width : "100%",
    height : "100%"
}

function BoardCard({ board }) {
    console.log("tenter")
 
    const dispatch = useDispatch();

    // const delete_button = () => {
    //     const action = deleteBoard(board.id);
    //     dispatch(action);    
    // }

    return (
        // <div className="allBoard">
        //     <div className="LinkStyle">
        <Card size="lg" style={{cardStyle}}>
            <Card.Img variant="top" src={note2} />
            <Card.Body>
                <Card.Title>
                    <Link to={`/board/${board.id}`}>{board.title}</Link>
                </Card.Title>
            </Card.Body>
        </Card>)
    /* <Link to={`/board/${board.id}`}></Link> */
    //     </div>
    // </div>)
}

export default BoardCard;