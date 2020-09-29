import React, { Component } from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

class Editor extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = (e:any) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(this.state);
    
  }
  render() {
    
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Project</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Project Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Project Content</label>
          </div>
          <div className="input-field">
            <button className="btn green darken-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Editor;