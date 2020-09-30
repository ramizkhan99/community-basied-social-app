import React, { Component } from 'react'
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";


class Editor extends React.Component {
  state = { editorHtml: "",
            title:  "" };

  handleChange = (e:any) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleQuill = (html:any)=>{
    this.setState({ editorHtml: html });
  }
  handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(this.state);
    
  }

static modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: true,
  }
}
static formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]


  render() {
    return (
      <div className="text-editor">
        <form className="white" onSubmit={this.handleSubmit}>
          <h1>Create Post</h1>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Title</label>
          </div>
          <ReactQuill
          value={this.state.editorHtml}
          onChange={this.handleQuill}
          formats={Editor.formats}
          modules={Editor.modules}

        />
        <div className="input-field">
            <button className="btn green darken-1">Post</button>
        </div>
        </form>
        <h1>Test the rendering</h1>
        <div
          dangerouslySetInnerHTML={{
          __html: this.state.editorHtml
            }}>
        </div>

      </div>
      
    );
  }
}

export default Editor;

