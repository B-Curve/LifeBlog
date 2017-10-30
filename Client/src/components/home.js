import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import AccountForm from './accountForm';
import PostCreator from './postCreator';
import Feed from './feed';
import './styles/homeDesktop.css';

export default class Home extends React.Component{

  constructor(){
    super();
    this.state = {
      posts: [],
      loggedIn: true,
      titles: [],
      username: ''
    }
    axios.get("rest/posts/category/1")
      .then((response) => {
        let title = response.data.shift();
        this.setState({
          posts: [...this.state.posts, response.data],
          titles: this.state.titles.concat(title)
        });
      });
    axios.get("rest/posts/category/2")
      .then((response) => {
        let title = response.data.shift();
        this.setState({
          posts: [...this.state.posts, response.data],
          titles: this.state.titles.concat(title)
        });
      });
  }

  render(){
    return(
      <div>

        <header className="header">
          <Link to="/" style={{color: 'black'}}>
            <h1 className="header_h1 hl"
              onMouseEnter={(e) => e.target.style.color = 'white'}
              onMouseLeave={(e) => e.target.style.color = 'black'}>Lifestyle Blog
            </h1>
          </Link>
          <h3 className="header_h1 hr">
            {this.state.loggedIn ? 'Signed In As: ' + this.state.username : 'Not Signed In'}
          </h3>
        </header>

        {this.state.loggedIn ? null : <AccountForm />}

        <Switch>
          <Route exact path="/">
            <Feed loggedIn={this.state.loggedIn} posts={this.state.posts} titles={this.state.titles} />
          </Route>
          <Route path="/newPost">
            <div>{this.state.loggedIn ? <PostCreator /> : null}</div>
          </Route>
        </Switch>

      </div>
    );
  }
}
