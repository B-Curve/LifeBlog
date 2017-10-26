import React from 'react';
import { css } from './styles/home';

export default class AccountForm extends React.Component{

  constructor(){
    super();
    this.state = {
      prompt: 'guest'
    }
  }

  animate(method){
    alert(method);
  }

  _getPageStatus(){
    if(this.state.prompt === 'guest'){
      return(
        <div style={css.accountPrompt}>
          <h1 style={css.headline}>Hello, Guest!</h1>
          <div style={css.button}
            onMouseEnter={(e) => e.target.style.color = 'blue'}
            onMouseLeave={(e) => e.target.style.color = 'white'}
            onMouseDown={() => this.animate('login')}>Log in</div>
          <div style={css.button}
            onMouseEnter={(e) => e.target.style.color = 'blue'}
            onMouseLeave={(e) => e.target.style.color = 'white'}
            onMouseDown={() => this.animate('signup')}>Sign up</div>
        </div>
      );
    }
  }

  render(){
    return(
      <section style={css.body}>
        {this._getPageStatus()}
      </section>
    );
  }
}
