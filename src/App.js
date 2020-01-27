import React, {Component} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Github from './GitHub';
import Header from './Components/Header';
import Auth0Lock from 'auth0-lock';


class  App extends Component {
  constructor(props){
    super(props);
    this.state ={
      idtoken :'',
      profile : {}
    }
  }
   
  static defaultProps = {
    clientID : "gtKyCotnE4Cb8IW8iunnefxQkIodkjTm",
    domain : "dev-h472r1vt.auth0.com"
  }

  componentWillMount(){
    this.lock = new Auth0Lock(this.props.clientID,this.props.domain,{
      auth: {
        redirectUrl: 'http://localhost:3000/',
        responseType: 'token id_token',
        params: {
          scope: 'openid profile email' 
        } 
      }});
    this.lock.on('authenticated',(authResult) => {
      // console.log(authResult.accessToken);
      this.lock.getUserInfo(authResult.accessToken,(error,profile) =>{
        if(error){
          // console.log(error);
          // return;
        }
        // console.log(profile);
        this.setProfile(authResult.accessToken,profile);
        
      })
    });
    this.getProfile();
  }

  setProfile= (accessToken,profile)=>{
    localStorage.setItem('accessToken',accessToken);
    localStorage.setItem('profile',JSON.stringify(profile));
    this.setState({
      idToken : localStorage.getItem('accessToken'),
      profile : JSON.parse( localStorage.getItem('profile'))
    }); 
  }

  getProfile(){
    if(localStorage.getItem('accessToken') != null){
      this.setState({
        idToken : localStorage.getItem('accessToken'),
        profile : JSON.parse( localStorage.getItem('profile'))
      },() => {
        // console.log(this.state);
        
      }); 
    }
  }

  showLock(){
    this.lock.show();
  }

  logout = ()=>{
    this.setState({
        idToken : '',
        profile : ''
    },()=>{
      localStorage.removeItem('accessToken');
      localStorage.removeItem('profile');
    });
  }

  render(){
    let gitty ;
    let page ;
    if(this.state.idToken){
      gitty = <Github/>
    }else{
      page = "Click on Login to view git View"
    }
    return (
      <div className="App">
        <Header onLogin={this.showLock.bind(this)} onLogout={this.logout} idToken={this.state.idToken} profile={this.state.profile} lock={this.lock} />
        {gitty}
        {page}
      </div>
    );
  }
}

export default App;
