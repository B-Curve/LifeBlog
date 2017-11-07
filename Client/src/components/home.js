import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import AccountForm from './accountForm';
import PostCreator from './postCreator';
import Account from './account';
import { connect } from 'react-redux';
import { applyToken } from '../storeFunctions';
import Feed from './feed';
import './styles/homeDesktop.css';

const host = "http://localhost:8080/lifeblogServer/api/";

class Home extends React.Component{

  constructor(){
    super();
    this.state = {
      loggedIn: true,
      username: '',
      loginToken: null
    }
  }

  componentDidMount = () => {
    if(this.props.token === null) console.log("NULL!");
    return;
    console.log(this.props.token);
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
          <h1 className="header_h1 hr" style={{fontSize: '1em'}}>
            Brandon Kervin
          </h1>
        </header>

        <Switch>
          <Route exact path="/">
            <div>
              {this.state.loggedIn ? null : <AccountForm />}
              <Feed loggedIn={this.state.loggedIn} />
            </div>
          </Route>
          <Route path="/newPost">
            <div>{this.state.loggedIn ? <PostCreator /> : <PostCreator />}</div>
          </Route>
          <Route path="/account">
            <div>{this.state.loggedIn ? <Account /> : null}</div>
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
    //applyLoginToken: () => dispatch(applyToken("HjhkD7BF8asdfn"))
  };
}

const DefaultApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default DefaultApp;
