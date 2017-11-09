import React from 'react';
import './styles/postDesktop.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const host = "http://localhost:8080/lifeblogServer/api/";

export default class PostCreator extends React.Component{

  constructor(){
    super();

    this.state = {
      postBody: '',
      postTitle: '',
      postCategory: 0,
      categories: []
    }
  }

  componentWillMount(){
    axios.get(host+"categories")
      .then((response) => {
        this.setState({categories: response.data});
      })
  }

  updatePostBody(e){
    let body = e.target.value;
    if(body.length > 4800) return;
    this.setState({postBody: body});
  }

  updatePostTitle(e){
    let title = e.target.value;
    if(title.length > 255) return;
    this.setState({postTitle: title});
  }

  updateCategory(e){
    this.setState({postCategory: e.target.value});
  }

  submitPost(){
    if(this.state.postTitle.length < 1){
      alert("Post must have a title!");
      return;
    }
    if(this.state.postBody.length < 20){
      alert("Post body must be at least 20 characters long!");
      return;
    }
    if(this.state.postCategory < 1 || this.state.postCategory > this.state.categories.length){
      alert("Please select a post category!");
      return;
    }
    let date = new Date().toISOString().split("T")[0];
    let post = {
      title: this.state.postTitle,
      body: this.state.postBody,
      category: this.state.postCategory,
      postDate: date,
      likes: 0
    };
    axios.put(host+"post", post, {headers: {token: this.props.token}})
      .then((response) => {
        window.location.pathname = '/post/'+response.data.id;
      });
  }

  render(){
    return(
      <div className="bg">
        {/* <Link to="/" className="goBack">&lt;- Go Home</Link> */}
        <div className="createPostBody">
          <h1 className="postBodyHead">Post Title</h1>
          <input type="text" className="createPostTitle" value={this.state.postTitle}
            onChange={this.updatePostTitle.bind(this)} />
          <p>{this.state.postTitle.length}/255</p>
        <select onChange={this.updateCategory.bind(this)} defaultValue={0} className="postCategory">
          <option disabled value="0">Select Category...</option>
          {this.state.categories.map((item, index) => {
            return <option key={index} value={item.id}>{item.name}</option>
          })}
        </select>
          <h1 className="postBodyHead">Post Body</h1>
          <textarea
            className="postBody"
            value={this.state.postBody}
            onChange={this.updatePostBody.bind(this)}
            cols="120" rows="12"></textarea>
          <p>{this.state.postBody.length}/4800</p>
        <br />
      <button type="button" className="postSubmit" onClick={this.submitPost.bind(this)}>Submit Post</button>
        </div>
      </div>
    );
  }
}
