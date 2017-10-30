import React from 'react';
import './styles/homeDesktop.css';
import { Link } from 'react-router-dom';

const PostBig = (props) => {

  function formatBody(body){
    if(body.length > 12){
      return body.substring(0, 72).trim() + "...";
    }
    return body;
  }

  return(
    <div className="postContainerLg">
      <img src={props.post.ImgSrc} className="postImage" alt="image" />
      <h1 className="postHead"
        onClick={() => window.location.pathname = '/post/'+props.post.postId}>{props.post.Title}</h1>
      <div className="postDate">
        <p>Post Date: {props.post.Date}</p>
      </div>
      <p>{formatBody(props.post.Body)}</p>
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
          <img src={props.p1.ImgSrc} className="postImage" alt="image" />
        <h1 className="postHead"
            onClick={() => window.location.pathname = '/post/'+props.p1.postId}>{props.p1.Title}</h1>
          <div className="postDate">
            <p>Post Date: {props.p1.Date}</p>
          </div>
          <p>{formatBody(props.p1.Body)}</p>
        </div>
      </li>
      <li>
        <div className="doubleBoxItem">
          <img src={props.p2.ImgSrc} className="postImage" alt="image" />
        <h1 className="postHead"
            onClick={() => window.location.pathname = '/post/'+props.p2.postId}>{props.p2.Title}</h1>
          <div className="postDate">
            <p>Post Date: {props.p2.Date}</p>
          </div>
          <p>{formatBody(props.p2.Body)}</p>
        </div>
      </li>
    </ul>
  );
}

export default class Feed extends React.Component{
  render(){
    return(
      <div>
        {this.props.loggedIn ?
        <div style={{width: '100vw', textAlign: 'center', margin: '2em 0'}}>
          <Link className="newPost" to="/newPost">Create New Post</Link>
        </div> : null}
        <section className="allPosts">
          {this.props.posts.map((posts, index) =>
            <div key={index}>
              <h1>{this.props.titles[index]}</h1>
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
