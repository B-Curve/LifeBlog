import React from 'react';
import './styles/main.css';

export default class PostCreator extends React.Component{

  constructor(){
    super();

    this.state = {
      postBody: ''
    }
  }

  updatePostBody(e){
    this.setState({postBody: e.target.value});
  }

  render(){
    return(
      <div>
        <div>
          <h2>Create New Post</h2>
        </div>
        <div>
          <textarea
            value={this.state.postBody}
            onChange={this.updatePostBody.bind(this)}
            cols="120" rows="12"></textarea>
        </div>
      </div>
    );
  }
}
