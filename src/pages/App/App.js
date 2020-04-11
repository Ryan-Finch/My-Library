import React,{ Component }  from 'react';
import Header from '../../components/Header/Header'
import {Route, Switch} from "react-router-dom"
import './App.css';
import userService from '../../services/userService';
import LoginPage from '../Login/LoginPage'
import SignupPage from '../Signup/SignupPage'
import About from '../About/About'
import BookSearch from '../BookSearch/BookSearch'

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
      
          <Header 
          user={this.state.user}
          handleLogout={this.handleLogout}
          />
        <Switch>
        <Route exact path='/' render={()=>
          <About />
        }/>
      
        <Route path="/books" render={()=>
          <BookSearch />
        }/>


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


          
     
      </Switch>
        
      </div>
    );
  }
}

export default App;
