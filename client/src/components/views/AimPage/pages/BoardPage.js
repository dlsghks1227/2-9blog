import React from 'react';
import { useSelector } from 'react-redux';
//import uuid from 'uuid/v4';
import CreateBoardCard from '../Boards/CreateBoardCard';
import BoardCard from '../Boards/BoardCard';
import { BoardType } from '../../../../store/reducer/boards';
import store from 'store';

function BoardPage() {
    const boardState = useSelector(state => state.board);
    console.log("v", boardState.boards);
    //useSelector은 redux-store 상태 조회 시 상태가 바뀌지 않았으면 리렌더링 x

    return (
        <div>
            {boardState.boards.map((board) =>
                <BoardCard key={board.id} board={board} />)}
            <CreateBoardCard />
        </div>);
    //BoardType == action
}

export default BoardPage;