import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
//import uuid from 'uuid/v4';
import CreateBoardCard from '../Boards/CreateBoardCard';
import BoardCard from '../Boards/BoardCard';
import { BoardType } from '../../../../store/reducer/boards';
import './BoardStyle.scss'
import AimHeader from '../Header';

function BoardPage() {
    const boardState = useSelector(state => state.board.boards.id);
    const check = useSelector((state) => {
        return state.board.boards.filter((board) => board.id !== undefined)
    });

   // console.log("v", boardState.boards);
    console.log("c", check);

    //useSelector은 redux-store 상태 조회 시 상태가 바뀌지 않았으면 리렌더링 x
    return (
        <div className="BoardPage">
            <div className="Header">
                <AimHeader />
            </div>
            <div className="BoardStyle">
                {check.map((board) =>
                    <BoardCard key={board.id} board={board} />)}
                <CreateBoardCard />
            </div>

        </div>
    );
    //BoardType == action
}

export default BoardPage;