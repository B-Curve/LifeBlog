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
      categories: []
    }
    axios.get('http://localhost:8080/lifeblogServer/login?username=abc&password=DoB1WCzh')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    axios.put(host+'post', {
      user: '1',
      title: 'Default Title',
      body: 'Default Body',
      category: '1',
      postDate: '2012-12-12'
    })
      .then((response) => {
        console.log(response);
      });
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

  _populateCategories(){
    axios.get(host+"categories")
      .then((response) => {
        this.setState({categories: response.data});
      });
  }

  render(){
    return(
      <div>
        {/* <Link to="/" className="goBack">&lt;- Go Home</Link> */}
        <div className="createPostBody">
          <h1 className="postBodyHead">Post Title</h1>
          <input type="text" className="createPostTitle" value={this.state.postTitle}
            onChange={this.updatePostTitle.bind(this)} />
          <p>{this.state.postTitle.length}/255</p>
        <select defaultValue={1} className="postCategory">
          <option disabled value="1">Select Category...</option>
        {/* OPTION TAGS WILL BE FILLED WITH _populateCategories */}
          <option value="2">Home</option>
          <option value="2">Home</option>
          <option value="2">Home</option>
          <option value="2">Home</option>
          <option value="2">Home</option>
        </select>
          <h1 className="postBodyHead">Post Body</h1>
          <textarea
            className="postBody"
            value={this.state.postBody}
            onChange={this.updatePostBody.bind(this)}
            cols="120" rows="12"></textarea>
          <p>{this.state.postBody.length}/4800</p>
        <br />
      <button type="button" className="postSubmit">Submit Post</button>
        </div>
      </div>
    );
  }
}
