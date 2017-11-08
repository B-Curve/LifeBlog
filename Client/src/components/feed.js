import React from 'react';
import './styles/homeDesktop.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const host = "http://localhost:8080/lifeblogServer/api/";

export default class Feed extends React.Component{

  constructor(){
    super();

    this.state = {
      posts1: [],
      categories: [],
      titles: [],
      userAccess: null
    }
    axios.get(host+"post/category/1")
      .then((response) => {
        this.setState({posts1: response.data});
      })
  }

  setEditPost(user){
    console.log(user.roles);
  }

  getPreview = (text) => {
    let trimmedText = text.substring(0, 200).trim();
    return trimmedText + "...";
  }

  verifyUser = (user) => {
    for(var key in user.roles){
      if(user.roles[key].id === 2) return <Link className="post-edit" to={"editPost/"+item.id}>Edit Post</Link>;
    }
  };

  render(){
    const P1 = this.state.posts1.map((item, index) =>
      <li className="section-post" key={index}>
        <h1 className="post-header">{item.title}</h1>
      <div className="post-body">
        <p className="post-category">{item.category.name}</p>
      <p className="post-likes"><span className="upvote">👍</span> {item.likes}</p>
    <p className="post-text">{this.getPreview(item.body)}</p>
    <Link className="read-more" to={"post/"+item.id}>Read More</Link>
    <p className="post-date">Post Date: {item.postdate.monthValue}-{item.postdate.dayOfMonth}-{item.postdate.year}</p>
      </div>
      </li>
  );
  // if(typeof this.props.user['username'] === 'string'){
  //   setEditPost(this.props.user);
  // }
    return(
      <div>
        <ul className="post-section">
          {P1}
        </ul>
      </div>
    );
  }
}
