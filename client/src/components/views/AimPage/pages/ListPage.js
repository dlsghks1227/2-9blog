import React from 'react';
import Lists from '../Lists/Lists';
import CreateLists from '../Lists/CreateLists';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './ListPage.scss'


function ListPage() {
    const {id} = useParams();
    // const listsState = useSelector((state) => state.lists) 
    // //console.log("listsState : ", listsState.lists);

    const boardList = useSelector((state)=>{
        return state.lists.lists.filter((list)=> list.boardId === id)
    });
    
    const boardtitle = useSelector((state) => {
        return state.board.boards.filter((board) => board.id === id)
    });
    
    return (
        <div className="ListStyle">
            <h2>{boardtitle[0].title}</h2>
            <div className="BoardListWrapper">
                {boardList.map((list) =>
                    <Lists key={list.id} list={list} />)}
                <CreateLists />
            </div>
        </div>
    )
}

export default ListPage;