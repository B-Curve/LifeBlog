import React from 'react';
import axios from 'axios';
import './styles/accountDesktop.css';

const host = "http://localhost:8080/lifeblogServer/api/";

export default class Account extends React.Component{

  constructor(){
    super();

    this.state = {
      posts: [],
      set: false
    }
  }

  setPosts = () => {
    axios.get(host+"post/user/"+this.props.user.id)
      .then((response) => {
        this.setState({
          posts: response.data,
          set: true
        });
      })
  }

  render(){
    let a = this.props.user;
    let ROLES, POSTS;
    if(typeof a.roles !== 'undefined'){
      if(!this.state.set) this.setPosts();
      ROLES = a.roles.map((item, index) =>
      item.role.toString() === "ROLE_USER" ?
        <li key={index} className="role" style={{color: '#44f'}}>USER</li>
        :
        <li key={index} className="role" style={{color: '#2d4'}}>ADMIN</li>
      );
      POSTS = this.state.posts.map((item, index) =>
        <li key={index} className="post">{item.title}</li>
      );
    }
    return(
      <div className="user-container">
        <section className="left-side">
          <div className="username">
            <h3 className="roles-header">Details</h3>
            <h3>{a.username}</h3>
            <h4>Name: {a.firstname} {a.lastname}</h4>
            <ul className="roles">
            <h3 className="roles-header">Roles</h3>
            {ROLES}
            </ul>
          </div>
        </section>
        <section className="right-side">
          <h1 className="posts-header">Posts</h1>
          <ul className="posts">
            {POSTS}
          </ul>
        </section>
      </div>
    );
  }
}
