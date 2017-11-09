import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import AccountForm from './accountForm';
import PostCreator from './postCreator';
import Account from './account';
import Post from './post';
import { connect } from 'react-redux';
import { applyToken } from '../storeFunctions';
import Feed from './feed';
import './styles/homeDesktop.css';

const host = "http://localhost:8080/lifeblogServer/api/";

class Home extends React.Component{

  constructor(){
    super();
    this.state = {
      loggedIn: false,
      username: 'Not Signed In',
      loginToken: null,
      user: [],
      signOut: false
    }
  }

  componentDidMount = () => {
    if(this.props.token !== null){
      this.setState({loggedIn: true})
    }else{return;}
    axios.get('http://localhost:8080/lifeblogServer/token/'+this.props.token)
      .then((response) => {
        this.setState({
          user: response.data,
          username: response.data.username
        });
      }).catch((error) => {
        this.props.applyLoginToken(null);
        window.location.reload();
      })
  }

  updateToken = (value) => {
    this.setState({loginToken: value});
    this.props.applyLoginToken(value);
    if(value.length == 128) this.setState({loggedIn: true});
    window.location.reload();
  };

  signOut(){
    this.props.applyLoginToken(null);
    window.location.pathname = "/";
  }

  determineUser = () => {
    if(this.state.username !== 'Not Signed In'){
      return(
        <span>
          <Link className="account-name" to="/account">{this.state.username}</Link>
          <span className="options" onClick={this.toggle.bind(this)}>{this.state.signOut ? "↑" : "↓"}
            {this.state.signOut ? <div className="dropdown" onClick={this.signOut.bind(this)}>Sign Out</div> : null}
          </span>
        </span>
      );
    }
    return "Not Signed In";
  }

  toggle = (e) => {
    this.state.signOut ? this.setState({signOut: false}) : this.setState({signOut: true});
  };

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
          <h1 className="header_h1 hr" style={{fontSize: '1em'}}>
            {this.determineUser()}
          </h1>
        </header>

        <Switch>
          <Route exact path="/">
            <div style={{textAlign: 'center'}}>
              {this.state.loggedIn ?
                <div className="man">
                  <Link to="/newPost"><button type="button" className="new-post">New Post</button></Link>
                </div>
                 : null}
              {this.state.loggedIn ? null : <AccountForm updateToken={this.updateToken.bind(this)} token={this.updateToken.bind(this)} />}
              <Feed user={this.state.user} loggedIn={this.state.loggedIn} />
            </div>
          </Route>
          <Route path="/post">
            <Post token={this.props.token} />
          </Route>
          <Route path="/newPost">
            <div>{this.state.loggedIn ? <PostCreator token={this.props.token} /> : window.location.pathname + '/'}</div>
          </Route>
          <Route path="/account">
            <div>{this.state.loggedIn ? <Account user={this.state.user} /> : null}</div>
          </Route>
        </Switch>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token
  };
}

const mapDispatchToProps = (dispatch) => {
  return{
    applyLoginToken: (value) => dispatch(applyToken(value))
  };
}

const DefaultApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default DefaultApp;
