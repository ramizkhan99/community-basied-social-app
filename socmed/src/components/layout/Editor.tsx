import React, { Component } from 'react'
import ReactQuill, { Quill } from "react-quill";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "react-quill/dist/quill.snow.css";

import {INewPost,newPost} from "../../store/actions/postActions"

interface INewPostProps {
  authError:String;
  newPost: (state: any) => any;
  
}
class Editor extends Component<INewPostProps, {}> {
  state = { content: "",
            title:  "",
            genre:"",
          };

  handleChange = (e:any) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleQuill = (html:any)=>{
    this.setState({ content: html });
  }
  handleSubmit = (e:any) => {
    e.preventDefault();
    this.props.newPost(this.state)
    
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
    const { authError } = this.props;
     if(authError!=="success") return <Redirect to='/signin'/>
    
    return (
      <div className="text-editor">
        <form className="white" onSubmit={this.handleSubmit}>
          <h1>Create Post</h1>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Title</label>
          </div>
          <div className="input-field">
            <input type="text" id='genre' onChange={this.handleChange} />
            <label htmlFor="genre">Genre</label>
          </div>
          <ReactQuill
          value={this.state.content}
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
          __html: this.state.content
            }}>
        </div>

      </div>
      
    );
  }
}

const mapStateToProps = (state: any) => {
  
  return {
    authError: state.userReducer.authError
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
      newPost: (postDetails: INewPost) => dispatch(newPost(postDetails))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);



