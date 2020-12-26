import React, { Fragment, useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import uuid from 'uuid/v4';
import CreateBoardCard from '../Boards/CreateBoardCard';
import BoardCard from '../Boards/BoardCard';
import { BoardType } from '../../../../store/reducer/boards';
import './BoardStyle.scss'
import { Card, Button, Accordion, Modal, ButtonGroup, Pagination, PageItem } from 'react-bootstrap'
import { createBoard } from '../../../../store/reducer/boards';

function BoardPage() {

    const check = useSelector((state) => {
        return state.board.boards.filter((board,index) => board.id !== undefined)
    });

    const [open, setOpen] = useState(false);
    const pageRef = useRef();

    const handleClose = () => {
        //pageRef.current.classList.remove("modal");
        setOpen(false);
    }
    const handleShow = () => {
        setOpen(true)
    };

    const isClosed = (result) => {
        handleClose();
    }


    let pageItem = [];
    let pageCard = [];

    const [activeValue, setActiveValue] = useState(1);

    const pageClick = (e) => {
        setActiveValue(e.currentTarget.innerText);
    }

    for (let num = 1; num <= Math.ceil(check.length / 5); num++) { //
        pageItem.push(
            <Pagination.Item key={num} active={num == activeValue} onClick={(e) => pageClick(e)}>
                {num}
            </Pagination.Item>
        )
    }

    pageCard = check.filter((board, index) =>{
        return 5 * activeValue - 4 <= index && index <= 5 * activeValue
    });

    return (
        <div className="BoardPage" ref={pageRef}>
            <Button onClick={handleShow} size="30px" size="sm">CreateBoard</Button>
            <div className="BoardStyle">
                {pageCard.map((board) =>
                        <BoardCard key={board.id} board={board} />
                )}
                {open ? <CreateBoardCard closed={isClosed} /> : ''}
            </div>
                <Pagination size="md">{pageItem}</Pagination>
        </div>
    );
    //BoardType == action
}


export default BoardPage;