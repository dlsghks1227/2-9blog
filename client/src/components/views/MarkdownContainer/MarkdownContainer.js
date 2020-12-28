import React, {
    useState
} from 'react'
import {
    useHistory,
} from 'react-router-dom'
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
    const history = useHistory();

    // 제목
    const [title, setTitle] = useState('');
    // 본문
    const [body, setBody] = useState(``);
    const dispatch = useDispatch();
    const onSubmit = (postData) => dispatch(createPost(postData));

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

    const onTitleChange = (event) => {
        setTitle(event.target.value)
    }

    return (
        <div className="container">
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="title-input" placeholder="제목"/>

            <MEDitor height={600} value={body} onChange={setBody}/>
            
            <Button className="md-submit-button" size="lg" onClick={onSubmitClick}>Write</Button>
            {/* <MEDitor.Markdown source={value} /> */}
        </div>
    );
}

export default MarkdownContainer;  