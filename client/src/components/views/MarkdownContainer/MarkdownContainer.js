import React, {
    useState
} from 'react'
import {
    useHistory,
} from 'react-router-dom'
import {
    useDispatch,
} from 'react-redux';
import MEDitor from "@uiw/react-md-editor";
import './MarkdownContainer.scss'
import {
    createPost,
    updatePost,
    deletePost
} from '../../../store/reducer/api';
import {
    Button,
    Modal,
    FormControl
} from 'react-bootstrap'

function MarkdownContainer({ defaultTitle, defaultbody, postId }) {
    const history = useHistory();

    // 제목
    const [title, setTitle] = useState(defaultTitle ? defaultTitle : '');
    // 본문
    const [body, setBody] = useState(defaultbody ? defaultbody : '');

    const [isShowDelete, setIsShowDeleteMdal] = useState(false);

    const dispatch = useDispatch();
    const onSubmit = (postData) => dispatch(createPost(postData));
    const onUpdate = (postData) => dispatch(updatePost(postData));
    const onDelete = (postData) => dispatch(deletePost(postData));

    const onSubmitClick = async (event) => {
        event.preventDefault();
        const data = await onSubmit({
            title: title,
            body: body,
            category: 'study'
        });
        if (data.message !== "fail") {
            history.push(`/post/read/${data.id}`)
        }
    }

    const onModifiedClick = async (event) => {
        event.preventDefault();
        const data = await onUpdate({
            title: title,
            body: body,
            id: postId
        });
        if (data.message !== "fail") {
            history.push(`/post/read/${data.id}`)
        }
    }

    const onDeleteClick = async (event) => {
        event.preventDefault();
        const data = await onDelete({
            id: postId
        });
        if (data.message !== "fail") {
            history.push(`/post`)
        }
    }

    return (
        <div className="container">
            <Modal
                show={isShowDelete}
                onHide={() => setIsShowDeleteMdal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>삭제하시겠습니까?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={onDeleteClick}>삭제</Button>
                    <Button variant="outline-primary" onClick={() => setIsShowDeleteMdal(false)}>취소</Button>
                </Modal.Footer>
            </Modal>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="title-input" placeholder="제목" />

            <MEDitor height={600} value={body} onChange={setBody} />

            {
                postId ?
                    (
                        <div>
                            <Button variant="outline-primary" className="md-submit-button" size="lg" onClick={onModifiedClick}>수정</Button>
                            <Button variant="outline-danger" className="md-submit-button mr-3" size="lg" onClick={() => setIsShowDeleteMdal(true)}>삭제</Button>
                        </div>
                    ) :
                    (
                        <Button variant="outline-primary" className="md-submit-button" size="lg" onClick={onSubmitClick}>Write</Button>
                    )
            }
        </div>
    );
}

export default MarkdownContainer;