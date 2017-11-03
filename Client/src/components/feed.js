import React from 'react';
import './styles/homeDesktop.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const host = "http://10.1.10.6:8080/lifeblogServer/api/";

const PostBig = (props) => {

  function formatBody(body){
    if(body.length > 12){
      return body.substring(0, 72).trim() + "...";
    }
    return body;
  }

  return(
    <div className="postContainerLg">
      {/* <img src={props.post.ImgSrc} className="postImage" alt="image" /> */}
      <h1 className="postHead"
        onClick={() => window.location.pathname = '/post/'+props.post.postId}>{props.post.title}</h1>
      <div className="postDate">
        {/* <p>Post Date: {props.post.Date}</p> */}
      </div>
      <p>{formatBody(props.post.body)}</p>
    </div>
  );
}

const PostSmall = (props) => {

  function formatBody(body){
    if(body.length > 12){
      return body.substring(0, 24).trim() + "...";
    }
    return body;
  }

  return(
    <ul className="doublePostBox">
      <li>
        <div className="doubleBoxItem">
          {/* <img src={props.p1.ImgSrc} className="postImage" alt="image" /> */}
        <h1 className="postHead"
            onClick={() => window.location.pathname = '/post/'+props.p1.postId}>{props.p1.title}</h1>
          <div className="postDate">
            {/* <p>Post Date: {props.p1.Date}</p> */}
          </div>
          <p>{formatBody(props.p1.body)}</p>
        </div>
      </li>
      <li>
        <div className="doubleBoxItem">
          {/* <img src={props.p2.ImgSrc} className="postImage" alt="image" /> */}
        <h1 className="postHead"
            onClick={() => window.location.pathname = '/post/'+props.p2.postId}>{props.p2.title}</h1>
          <div className="postDate">
            {/* <p>Post Date: {props.p2.Date}</p> */}
          </div>
          <p>{formatBody(props.p2.body)}</p>
        </div>
      </li>
    </ul>
  );
}

export default class Feed extends React.Component{

  constructor(){
    super();

    this.state = {
      posts: [],
      categories: [],
      titles: []
    }
    this._categories();
    this._posts();
  }

  _categories(){
    axios.get(host+"categories",
    {username: 'admin', password: 'admin'})
      .then((response) => {
        this.setState({categories: response.data});
    });
  }

  _posts(){
    axios.get(host+"post/category/2", {headers: {offset: 1}})
      .then((response) => {
        console.log(response.data);
        // this.setState({posts: response.data});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render(){
    return(
      <div>
        {this.state.loggedIn ?
        <div style={{width: '100vw', textAlign: 'center', margin: '2em 0'}}>
          <Link className="newPost" to="/newPost">Create New Post</Link>
      </div> : <div></div>}
        <section className="allPosts">
          {this.state.posts.map((posts, index) =>
            <div key={index}>
              <h1>{this.state.titles[index]}</h1>
              <div style={{display: 'inline-flex', margin: '0 auto', paddingBottom: '12px'}}>
                <PostBig post={posts[0]} />
                <PostSmall p1={posts[1]} p2={posts[2]} />
                <PostSmall p1={posts[3]} p2={posts[4]} />
              </div>
              <br />
            </div>
          )}
        </section>
      </div>
    );
  }
}
