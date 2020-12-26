import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createLists } from '../../../../store/reducer/lists'
import './CreateList.scss'

const CreateLists = ({renderList}) => {
    console.log(1);
    const { id } = useParams();
    //param을 받기 위해
    const dispatch = useDispatch();
  
    return (
            <div className="ListsWrapper">
                <div className="ListsContent">
                    <input type="text" placeholder="Todos" size="10"
                        onKeyDown={(e) => {
                            const value = e.currentTarget.value;
                            if (e.key === "Enter" && value != "") {
                                console.log("d", e)
                                if (id) {
                                    const action = createLists(e.currentTarget.value, id);
                                    console.log("리스트 액션 :", action);
                                    dispatch(action);
                                    e.currentTarget.value = "";
                                    renderList();
                                }
                            }
                        }}
                    />
                </div>
            </div> 
    )
}

export default CreateLists;