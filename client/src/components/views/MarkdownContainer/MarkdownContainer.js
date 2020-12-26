import React from 'react'
import MEDitor from "@uiw/react-md-editor";
import './MarkdownContainer.scss'


const mkdStr = ``;


function MarkdownContainer() {
    const [value, setValue] = React.useState(mkdStr);
    return (
        <div className="container">
            <input className="title-input" placeholder="제목" />
            <MEDitor height={600} value={value} onChange={setValue} />
            <div style={{ padding: "50px 0 0 0" }} />
            {/* <MEDitor.Markdown source={value} /> */}
        </div>
    );
}

export default MarkdownContainer;