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
      loggedIn: false,
      username: ''
    }
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
        </Switch>

        <h1 style={{textAlign:'center'}}>asdfasfjhdals;fhjkasdlfhjaslfkjahds;faklsjfsd;ljfalsfjasl;fjlks
        asdfasfjhdals;fhjkasdlfhjaslfkjahds;faklsjfsd;ljfalsfjasl;fjlks
      asdfasfjhdals;fhjkasdlfhjaslfkjahds;faklsjfsd;ljfalsfjasl;fjlks
    asdfasfjhdals;fhjkasdlfhjaslfkjahds;faklsjfsd;ljfalsfjasl;fjlks
  asdfasfjhdals;fhjkasdlfhjaslfkjahds;faklsjfsd;ljfalsfjasl;fjlks
asdfasfjhdals;fhjkasdlfhjaslfkjahds;faklsjfsd;ljfalsfjasl;fjlks
asdfasfjhdals;fhjkasdlfhjaslfkjahds;faklsjfsd;ljfalsfjasl;fjlks
asdfasfjhdals;fhjkasdlfhjaslfkjahds;faklsjfsd;ljfalsfjasl;fjlks
asdfasfjhdals;fhjkasdlfhjaslfkjahds;faklsjfsd;ljfalsfjasl;fjlks</h1>

      </div>
    );
  }
}
