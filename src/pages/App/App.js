import React,{ Component }  from 'react';
import Header from '../../components/Header/Header'
import {Route, Switch} from "react-router-dom"
import './App.css';
import userService from '../../services/userService';
import LoginPage from '../Login/LoginPage'
import SignupPage from '../Signup/SignupPage'
import About from '../About/About'
import BookSearch from '../BookSearch/BookSearch'
import {getBooksSearch} from "../../services/booksApi"
import Library from "../Library/Library"
import BookPage from '../BookPage/BookPage';
import {getAll} from '../../services/libraryService'

class App extends Component{
  constructor(){
    super()
    this.state = {
      user: userService.getUser(),
      books:[],
      searchTerm: '',
      library: [],
      ownedReadBooks: [],
      ownedUnreadBooks: [],
      wishList: [],
    }
  }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Library Books Update
  seperateBooks = (library) =>{
    const ownedReadBooksCopy = []
    const ownedUnreadBooksCopy = []
    const wishListCopy = []

    library.map((book)=>
        book.owned && book.read ? ownedReadBooksCopy.push(book): book.owned && !book.read ? ownedUnreadBooksCopy.push(book) : wishListCopy.push(book)
    )

    this.setState({
        ...this.state,
        library,
        ownedReadBooks:  ownedReadBooksCopy,
        ownedUnreadBooks: ownedUnreadBooksCopy,
        wishList: wishListCopy
    })
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// LOGIN/LOGOUT Methods

  handleLogout = () => {
    console.log('logout')
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = async () => {
    const library = await getAll();
 
    this.setState({
      ...this.state,
      library,
      user: userService.getUser()
    });
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Book Search Methods

handleChange = e =>{  
  this.setState({...this.state,
      searchTerm: e.target.value
  })
}

handleSubmit = e => {
  e.preventDefault()
  this.getBooks(this.state.searchTerm)    
}

async getBooks(searchTerm){
  if(searchTerm){
    const books = await getBooksSearch(searchTerm)
    console.log(books)
    this.setState({...this.state,
        books: books.items,
        searchTerm: ""
    })
  }
}

clearBookSearch = ()=>{
  this.setState({
    ...this.state,
    books: []
  })
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Render for App

  render(){
    return (
      <div className="App">
      
        <Header 
          user={this.state.user}
          handleLogout={this.handleLogout}
        />

        <Switch>
{/*About Page Route */}
          <Route exact path='/' render={()=>
            <About />
          }/>
      
{/*Route To Library Page  */}
          <Route path="/user/library" render={props =>
            <Library 
              {...props}
              library={this.state.library}
              user={this.state.user}
              seperateBooks={this.seperateBooks}
              ownedReadBooks={this.state.ownedReadBooks}
              ownedUnreadBooks={this.state.ownedUnreadBooks}
              wishList={this.state.wishList}
            />
          }/>


{/* Route to Book Page */}
          <Route path="/book-page/:id" render={(props)=>
            <BookPage 
              {...props}
            />
          }/>


{/* Route to Books Search Page */}
          <Route path="/books" render={()=>
            <BookSearch 
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              getBooks={this.getBooks}
              searchTerm={this.state.searchTerm}
              books={this.state.books}
              clearBookSearch={this.clearBookSearch}
            />
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
