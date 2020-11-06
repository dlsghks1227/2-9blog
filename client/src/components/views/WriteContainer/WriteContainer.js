import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor.js";

import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold.js";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials.js";
import Heading from "@ckeditor/ckeditor5-heading/src/heading.js";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph.js";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic.js";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment.js";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote.js";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat.js";
import Autosave from "@ckeditor/ckeditor5-autosave/src/autosave.js";
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder.js";
import CKFinderUploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter.js";
import ExportToPDF from "@ckeditor/ckeditor5-export-pdf/src/exportpdf.js";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor.js";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily.js";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize.js";
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js";
import ImageLoader from "@ckeditor/ckeditor5-image/src/image.js";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption.js";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize.js";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle.js";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar.js";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload.js";
import Indent from "@ckeditor/ckeditor5-indent/src/indent.js";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock.js";
import Link from "@ckeditor/ckeditor5-link/src/link.js";
import List from "@ckeditor/ckeditor5-list/src/list.js";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed.js";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import SpecialCharacters from "@ckeditor/ckeditor5-special-characters/src/specialcharacters.js";
import SpecialCharactersEssentials from "@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials.js";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough.js";
import Table from "@ckeditor/ckeditor5-table/src/table.js";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar.js";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation.js";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline.js";

import './WriteContainer.scss'
import { db } from '../../../fbase';

const installedPlugins = [
  Alignment,
  Autoformat,
  Autosave,
  BlockQuote,
  Bold,
  CKFinder,
  CKFinderUploadAdapter,
  Essentials,
  ExportToPDF,
  FontColor,
  FontFamily,
  FontSize,
  Heading,
  HorizontalLine,
  ImageLoader,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  SpecialCharacters,
  SpecialCharactersEssentials,
  Strikethrough,
  Table,
  TableToolbar,
  TextTransformation,
  Underline,
];

function WriteContainer() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState({});

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const bodyChangeHandler = (event, editor) => {
    const data = editor.getData();
    setBody(data);
  };

  const writeSubmitHandler = (e) => {
    db.collection("notice").doc("React").set({ title, body })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
    e.preventDefault();
  };

return (
  <div className="WriteContainer">
    <form onSubmit={writeSubmitHandler}>

      <input placeholder="제목" className="title-input" type="text" value={title} onChange={titleChangeHandler} />
      <ul>
        <li selected value="React">React</li>
        <li>Node.js</li>
        <input type="text"/>
        <button>전송</button>
      </ul >
      <ul>
        <li selected value="React">React</li>
        <li>Node.js</li>
        <input type="text" />
        <button>전송</button>
      </ul >
      <hr></hr>
      <CKEditor
        editor={ClassicEditor}
        config={{
          plugins: [...installedPlugins],
          toolbar: [
            "exportPdf",
            "|",
            "heading",
            "|",
            "fontFamily",
            "fontSize",
            "fontColor",
            "alignment",
            "|",
            "bold",
            "italic",
            "strikethrough",
            "underline",
            "specialCharacters",
            "horizontalLine",
            "|",
            "bulletedList",
            "numberedList",
            "|",
            "indent",
            "outdent",
            "|",
            "link",
            "blockQuote",
            "CKFinder",
            "imageUpload",
            "insertTable",
            "mediaEmbed",
            "|",
            "undo",
            "redo",
          ],
        }}
        data=""
        onChange={bodyChangeHandler}
      />
      <button className="submit-button" type="submit">글 작성하기
        <hr></hr>
      </button>
    </form>
  </div>
)
}

export default WriteContainer
