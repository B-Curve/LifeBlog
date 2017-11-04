import React from 'react';
import './styles/postDesktop.css';
import { Link } from 'react-router-dom';

const host = "http://10.1.10.6:8080/lifeblogServer/api/";

export default class PostCreator extends React.Component{

  constructor(){
    super();

    this.state = {
      postBody: '',
      postTitle: '',
      categories: []
    }
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
