

import React, {
    useState
} from 'react'
import {

} from 'react-dom'
import {
    useSelector,
    useDispatch,
} from 'react-redux';
import MEDitor from "@uiw/react-md-editor";
import './MarkdownContainer.scss'
import {
    createPost,
} from '../../../store/reducer/api';
import {
    Button
} from 'react-bootstrap'

function MarkdownContainer() {

    // 제목
    const [title, setTitle] = useState(`title`);
    // 본문
    const [body, setBody] = useState(``);
    const dispatch = useDispatch();
    const onSubmit = (postData) => dispatch(createPost(postData));

    const onSubmitClick = async (event) => {
        event.preventDefault();
        await onSubmit({
            title: title,
            body: body,
            category: 'study'
        });
    }

    return (
        <div className="container">
            <input className="title-input" placeholder="제목" />
            <MEDitor height={600} value={body} onChange={setBody} />
            <div style={{ padding: "50px 0 0 0" }} />
            <Button onClick={onSubmitClick}>Test</Button>
            {/* <MEDitor.Markdown source={value} /> */}
        </div>
    );
}

export default MarkdownContainer;  