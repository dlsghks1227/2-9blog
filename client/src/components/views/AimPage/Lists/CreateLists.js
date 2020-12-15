import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createLists } from '../../../../store/reducer/Lists'
import './CreateList.scss'
const CreateLists = () => {

    const { id } = useParams();
    //param을 받기 위해
    const dispatch = useDispatch();

    console.log("param ,", id);

    //리스트 생성...
    return <div className="ListsWrapper">
        <div className="ListsContent">
            <input type="text" placeholder="Todos"
                onKeyDown={(e) => {
                    const value = e.currentTarget.value;
                    if (e.key === "Enter" && value != "") {
                        if (id) {
                            const action = createLists(e.currentTarget.value, id);
                            console.log("리스트 액션 :", action);
                            dispatch(action);
                            e.currentTarget.value = "";
                        }
                    }
                }}
            />
        </div>
    </div>
}

export default CreateLists;