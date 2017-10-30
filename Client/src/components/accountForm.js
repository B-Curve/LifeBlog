import React from 'react';

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
        <div className="accountPrompt">
          <h1 className="headline">Hello, Guest!</h1>
        <div className="button"
            onMouseEnter={(e) => e.target.style.color = 'blue'}
            onMouseLeave={(e) => e.target.style.color = 'white'}
            onMouseDown={() => this.animate('login')}>Log in</div>
          <div className="button"
            onMouseEnter={(e) => e.target.style.color = 'blue'}
            onMouseLeave={(e) => e.target.style.color = 'white'}
            onMouseDown={() => this.animate('signup')}>Sign up</div>
        </div>
      );
    }
  }

  render(){
    return(
      <section className="body" style={{backgroundImage: "url('interior.jpg')"}}>
        {this._getPageStatus()}
      </section>
    );
  }
}
