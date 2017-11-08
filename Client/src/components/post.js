import React from 'react';
import axios from 'axios';
import './styles/viewPostDesktop.css';

const host = "http://localhost:8080/lifeblogServer/api/";

export default class Post extends React.Component{

  constructor(){
    super();
    this.state = {
      post: null
    }
  }

  componentWillMount(){
    let id = window.location.pathname.split("post/")[1];
    axios.get(host+"post/"+id)
      .then((response) => {
        console.log(response.data);
        this.setState({post: response.data});
      })
  }

  buildDate = (date) => {
    let dayOfWeekSecondary = date.dayOfWeek.slice(1);
    let dayOfWeekPrimary = date.dayOfWeek.charAt(0);
    const dayOfWeek = dayOfWeekPrimary + dayOfWeekSecondary.toLowerCase();
    let monthPrimary = date.month.charAt(0);
    let monthSecondary = date.month.slice(1);
    const month = monthPrimary + monthSecondary.toLowerCase();
    let fullDate = dayOfWeek + ", " + month + " " + date.dayOfMonth + ", " + date.year;
    return fullDate;
  };

  getPost = () => {
    if(this.state.post === null) return;
    return(
      <div>
        <p className="view-id">#{this.state.post.id}</p>
        <p className="view-category">{this.state.post.category.name}</p>
        <p className="view-date">{this.buildDate(this.state.post.postdate)}</p>
        <h1 className="view-title">{this.state.post.title}</h1>
        <p className="view-body">{this.state.post.body}</p>
        <p className="view-likes">Likes: {this.state.post.likes}</p>
        <p className="view-poster">Posted By: {this.state.post.user.username}</p>
        <p className="view-make-reply">REPLY</p>
      </div>
    );
  };

  getReplies = () => {
    if(this.state.post === null) return;
    return(
      <div>
        <h1>This post has no replies...</h1>
      </div>
    );
  };

  render(){
    return(
      <div style={{textAlign:'center'}}>
        <div className="view-container">
          {this.getPost()}
        </div>
        {this.getReplies()}
      </div>
    );
  }
}
