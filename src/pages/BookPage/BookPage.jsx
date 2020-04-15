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

    componentDidMount(){

        this.getBook(this.props.match.params.id)
        console.log('mounting')
        // this.props.library.map(book =>{
        //     if (book.bookId === this.props.match.params.id){
        //         this.setState({
        //             ...this.state,
        //             bookOwned: true
        //         })
        //     }else{
        //         return 
        //     }
        // })
    }

    // componentWillUnmount(){
    //     this.setState({...this.state,
    //         book: [],
    //         bookOwned: false
    //     })
    // }

    getBook = async id=>{
        console.log('working?')
        const book = await getOneBook(id)
        this.props.library.map(bk =>{
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
                        <img src={!bk.volumeInfo.imageLinks ? noBook : bk.volumeInfo.imageLinks.small ? bk.volumeInfo.imageLinks.small : bk.volumeInfo.imageLinks.thumbnail} alt={bk.volumeInfo.title}/>


                    {!this.state.bookOwned.length ?
                        <AddLibraryBook 
                            book={this.state.book}
                        />
                        :
                        <UpdateBook 
                            book={this.state.book}
                            bookOwned={this.state.bookOwned}
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