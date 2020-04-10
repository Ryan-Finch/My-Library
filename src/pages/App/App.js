import React,{ Component }  from 'react';
import Header from '../../components/Header/Header'
import {Route, Switch} from "react-router-dom"
import './App.css';
import userService from '../../services/userService';
import LoginPage from '../Login/LoginPage'
import SignupPage from '../Signup/SignupPage'

class App extends Component{
  constructor(){
    super()
    this.state = {
      user: userService.getUser()
    }
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// LOGIN/LOGOUT Methods

  handleLogout = () => {
    console.log('logout')
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }




  render(){
    return (
      <div className="App">
      <Switch>
        <Route>
          <Header 
          user={this.state.user}
          handleLogout={this.handleLogout}
          />






          {/* LOGIN and SIGNUP ROUTES */}
        <Route exact path='/signup' render={({ history }) => 
          <SignupPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        }/>
        <Route exact path='/login' render={({ history }) => 
          <LoginPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        }/>


          
        </Route>
      </Switch>
        
      </div>
    );
  }
}

export default App;
