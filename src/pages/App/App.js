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
import {getVideosSearch} from "../../services/videosApi"
import Library from "../Library/Library"
import BookPage from '../BookPage/BookPage';
import {getAll} from '../../services/libraryService'
import * as videoLibraryService from '../../services/videoLibraryService'

class App extends Component{
  constructor(){
    super()
    this.state = {
      user: userService.getUser(),
      searchState: 'Book',
      books:[],
      searchTerm: '',
      library: [],
      videos: [],
      video: [],
      videoLibrary: [],
      ownedReadBooks: [],
      ownedUnreadBooks: [],
      wishList: [],
    }
  }

//////////////////////////////////////////////////////////////////////////
////////////////////////Library Books Update
  seperateBooks = (library, videoLibrary) =>{
    const ownedReadBooksCopy = []
    const ownedUnreadBooksCopy = []
    const wishListCopy = []

    library.map((book)=>
        book.owned && book.read ? ownedReadBooksCopy.push(book): book.owned && !book.read ? ownedUnreadBooksCopy.push(book) : wishListCopy.push(book)
    )

    this.setState({
        ...this.state,
        library,
        videoLibrary,
        ownedReadBooks:  ownedReadBooksCopy,
        ownedUnreadBooks: ownedUnreadBooksCopy,
        wishList: wishListCopy
    })
  }

  refreshLibrary = async () =>{
    const library = await getAll()
    this.setState({
      ...this.state,
      library
    })
  }
/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////// LOGIN/LOGOUT Methods

  handleLogout = () => {
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
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////// Book Search Methods

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
    this.setState({...this.state,
        books: books.items,
        searchTerm: ""
    })
  }
}

clearBookSearch = () =>{
  this.setState({
    ...this.state,
    books: []
  })
}


///////////////////////////////////////////////////////////
////////// Handle switch between books/videos

handleSwitch=(e)=>{
  
  this.setState({
    ...this.state,
    searchState: e.target.value
  })
}

////////////////////////////////////////////////////////////////
//////////////////////////// Video Search Functions
handleVideoSubmit = e => {
  e.preventDefault()
  this.getVideos(this.state.searchTerm)
} 

async getVideos(searchTerm){
  if(searchTerm){
    const videos = await getVideosSearch(searchTerm)
    this.setState({
      ...this.state,
        videos: videos.items,
        searchTerm: ""
    })
  }
}
//////Video Add Functions

handleAddVideo = async(video)=>{

  await videoLibraryService.create(video)
}
handleVideoLibrarySubmit = e =>{
  e.preventDefault()

  const video={
    title: e.target.name,
    description: e.target.value,
    videoId: e.target.id
  }
  this.handleAddVideo(video)
}
////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////Render for App

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
          <Route path="/library" render={props =>
            <Library 
              {...props}
              library={this.state.library}
              user={this.state.user}
              seperateBooks={this.seperateBooks}
              ownedReadBooks={this.state.ownedReadBooks}
              ownedUnreadBooks={this.state.ownedUnreadBooks}
              wishList={this.state.wishList}
              videoLibrary={this.state.videoLibrary}
            />
          }/>


{/* Route to Book Page */}
          <Route path="/book-page/:id" render={(props)=>
            <BookPage 
              {...props}
              library={this.state.library}
              refreshLibrary={this.refreshLibrary}
              
            />
          }/>


{/* Route to Books Search Page */}
          <Route path="/books" render={()=>
            <BookSearch 
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleVideoSubmit={this.handleVideoSubmit}
              handleSwitch={this.handleSwitch}
              getBooks={this.getBooks}
              getVideos={this.getVideos}
              searchTerm={this.state.searchTerm}
              // videoSearchTerm={this.state.videoSearchTerm}
              books={this.state.books}
              videos={this.state.videos}
              clearBookSearch={this.clearBookSearch}
              searchState={this.state.searchState}
              handleVideoLibrarySubmit={this.handleVideoLibrarySubmit}
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
