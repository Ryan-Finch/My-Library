import React, { Component} from 'react';
import {getOneBook} from "../../services/booksApi"
import AddLibraryBook from '../../components/AddLibraryBook/AddLibraryBook'
import noBook from '../../images/no-book.png'
import './BookPage.css'
import UpdateBook from '../../components/UpdateBook/UpdateBook'

class BookPage extends Component{

    state ={
        book:[],
        bookOwned: []
    }

    async componentDidMount(){

        if(!this.props.library.length){ 
            await this.props.refreshLibrary()
        }
        this.getBook(this.props.match.params.id)
    }

    getBook = async id =>{
        const book = await getOneBook(id)

         await this.props.library.map(bk =>{
            if (bk.bookId === id){
                return this.setState({
                    ...this.state,
                    bookOwned: [bk]
                })
            }
        })

        this.setState({...this.state,
            book: [book]
        }) 

      }
    
    updateOwnedBook = (id) =>{
        this.props.library.map(bk =>{
            if (bk.bookId === id){
                return this.setState({
                    ...this.state,
                    bookOwned: [bk]
                })
            }
        })
    }

    deleteOwnedBook = () =>{
        this.setState({
            ...this.state,
            bookOwned:[]
        })
    }

    render(){
        return(
            <>
            <div className="book-page-container">
                <div >
                {this.state.book.map(bk=> 
                <div className="book-page-info" key={bk.id}>
                    <div className="book-page-book" >
                        <h1>{bk.volumeInfo.title}</h1>
                        <hr></hr>
                        <h4>{bk.volumeInfo.authors}</h4>
                        <br></br>
                        <div dangerouslySetInnerHTML={{__html: 
                        `${bk.volumeInfo.description}` ? `${bk.volumeInfo.description}` : 'No Details Known'
                            }}></div>
                    </div>
                    <div className="book-page-image">
                    {/* //////////////////////////////////////////////////////////////////////Picture image issues here//////Check back to see if you can update image picutre to better /////////quality later */}
                        <img src={!bk.volumeInfo.imageLinks ? noBook : bk.volumeInfo.imageLinks.small ? bk.volumeInfo.imageLinks.thumbnail : bk.volumeInfo.imageLinks.thumbnail} alt={bk.volumeInfo.title}/>


                    {!this.state.bookOwned.length ?
                        <AddLibraryBook 
                            {...this.props}
                            book={this.state.book}
                            refreshLibrary={this.props.refreshLibrary}
                            updateOwnedBook={this.updateOwnedBook}
                        />
                        :
                        <UpdateBook 
                            {...this.props}
                            book={this.state.book}
                            bookOwned={this.state.bookOwned}
                            refreshLibrary={this.props.refreshLibrary}
                            updateOwnedBook={this.updateOwnedBook}
                            deleteOwnedBook={this.deleteOwnedBook}
                        />
                    }
                    </div>
                </div>
                )}
                </div>
              
            </div>


            </>
        )
    }
}

export default BookPage;