import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { css } from './styles/home';
import axios from 'axios';

/*
<div style={index%5 === 0 ? css.postContainerLg : css.postContainerSm} key={index}>
  <img src={i.ImgSrc} alt="image" />
  <h1 style={css.postHead}>{i.Title}</h1>
  <div style={css.postBody}>
    <p>Post Date: {i.Date}</p>
  </div>
</div>
*/

const Post = (props) => {
  return(
    <div>
      <h1>{this.props.post.title}</h1>
      <p>{this.props.post.body}</p>
      <br />
      <p>Post Date: {this.props.post.date}</p>
    </div>
  );
}

export default class Home extends React.Component{

  constructor(){
    super();
    this.state = {
      posts: []
    }
    axios.get("rest/posts/")
      .then((response) => {
        this.setState({posts: [...this.state.posts, response.data]});
      });
  }

  render(){
    return(
      <div>
        <header style={css.header}>
          <h1 style={Object.assign({}, css.header_h1, css.hl)}
            onClick={() => window.location.pathname = '/'}
            onMouseEnter={(e) => e.target.style.color = 'white'}
            onMouseLeave={(e) => e.target.style.color = 'black'}>Lifestyle Blog
          </h1>
          <h3 style={Object.assign({}, css.header_h1, css.hr)}>Not Signed In</h3>
        </header>
        <section style={css.body}>
          <div style={css.accountPrompt}>
            <h1 style={css.headline}>Hello, Guest!</h1>
            <div style={css.button}
              onMouseEnter={(e) => e.target.style.color = 'blue'}
              onMouseLeave={(e) => e.target.style.color = 'white'}>Log in</div>
            <div style={css.button}
              onMouseEnter={(e) => e.target.style.color = 'blue'}
              onMouseLeave={(e) => e.target.style.color = 'white'}>Sign up</div>
          </div>
        </section>
        <section style={css.allPosts}>
          {this.state.posts.map((posts, index) =>
            <div key={index} style={{display: 'inline-flex'}}>
              <div style={css.postContainerLg}>
                <img src={posts[0].ImgSrc} alt="image" />
                <h1 style={css.postHead}>{posts[0].Title}</h1>
                <div style={css.postBody}>
                  <p>Post Date: {posts[0].Date}</p>
                </div>
              </div>
              <ul style={css.doublePostBox}>
                <li>
                  <div style={css.doubleBoxItem}>
                    <img src={posts[1].ImgSrc} alt="image" />
                    <h1 style={css.postHead}>{posts[1].Title}</h1>
                    <div style={css.postBody}>
                      <p>Post Date: {posts[1].Date}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div style={css.doubleBoxItem}>
                    <img src={posts[2].ImgSrc} alt="image" />
                    <h1 style={css.postHead}>{posts[2].Title}</h1>
                    <div style={css.postBody}>
                      <p>Post Date: {posts[2].Date}</p>
                    </div>
                  </div>
                </li>
              </ul>
              <ul style={css.doublePostBox}>
                <li>
                  <div style={css.doubleBoxItem}>
                    <img src={posts[3].ImgSrc} alt="image" />
                    <h1 style={css.postHead}>{posts[3].Title}</h1>
                    <div style={css.postBody}>
                      <p>Post Date: {posts[3].Date}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div style={css.doubleBoxItem}>
                    <img src={posts[4].ImgSrc} alt="image" />
                    <h1 style={css.postHead}>{posts[4].Title}</h1>
                    <div style={css.postBody}>
                      <p>Post Date: {posts[4].Date}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </section>
      </div>
    );
  }
}
