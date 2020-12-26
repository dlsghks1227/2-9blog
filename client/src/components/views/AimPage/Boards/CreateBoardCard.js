import { passActionAsync } from 'components/middleware/CreateBoardMiddle';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBoard } from '../../../../store/reducer/boards';
import './BoardCardStyle.scss';
import './BoardModal.scss';
import { Card, Button, Modal } from 'react-bootstrap'

const CreateBoardCard = ({ closed }) => {

    const tareaRef = useRef();
    const AimRef = useRef();
    const dispatch = useDispatch();

    const [showing, setShowing] = useState(true);

    const handleClose = (e) => {
        setShowing(false);
        closed(true);
        console.log(e)
    };

    const BoardConstruct = (e) => {
        const title = AimRef.current.value;

        if (title === "") {
            alert("세울 목표의 주제를 적어주세요. ex) 동아리 프로젝트")
        }
        else {
            const action = createBoard(title);
            console.log(e.key)
            dispatch(action);
            e.currentTarget.value = "";
            handleClose();
        }
    }
    console.log(showing)
    return (
        <div className="BoardModal">
            {showing ? (
                <Modal
                    show={showing}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false} >

                    <div className=".modal-dialog-css">
                        <Modal.Dialog style={{ position: "fixed" }}>
                            <div className=".modal-header-css">
                                <Modal.Header closeButton onClick={(e) => handleClose(e)}>
                                    <Modal.Title>Write your Aim</Modal.Title>
                                </Modal.Header>
                            </div>
                            <Modal.Body>
                                <input type="text" ref={AimRef} size="40" placeholder="목표 주제를 적어주세요"
                                    onKeyPress={(e) => { if (e.key == "Enter") BoardConstruct(e) }} />
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="primary" onClick={(e) => BoardConstruct(e)}>저장</Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </div>
                </Modal >
            ) : ''}
        </div>
    )
}

export default CreateBoardCard;