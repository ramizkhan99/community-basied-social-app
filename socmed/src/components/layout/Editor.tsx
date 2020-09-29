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



  static formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color"
  ];

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

