import React,{useState,useEffect} from 'react';
import Lists from '../Lists/Lists';
import CreateLists from '../Lists/CreateLists';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './ListPage.scss'
import { Button } from 'react-bootstrap'


function ListPage() {

    const {id} = useParams();
    const [mkList, setMkList] = useState(false);

    const listsState = useSelector((state) => state.lists) 

    const boardList = useSelector((state)=>{
        return state.lists.lists.filter((list)=> list.boardId === id)
    });
    
    const boardtitle = useSelector((state) => {
        return state.board.boards.filter((board) => board.id === id)
    });

    const makeList = ()=>{
        setMkList(true);
    }
    
    const renderMakeList = ()=>{
        setMkList(false);
    }

    //클릭할 때만 리스트에 저장
    
    return (
        <div className="ListStyle">
            <h2>{boardtitle[0].title}</h2>
            <Button onClick={makeList} >createList</Button>
            <div className="BoardListWrapper">
                {boardList.map((list) =>
                    <Lists key={list.id} list={list} />)}
                {mkList && <CreateLists renderList={renderMakeList} />}
            </div>
        </div>
    )
}

export default ListPage;