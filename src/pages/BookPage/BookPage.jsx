import React, { Component} from 'react';
import {getOneBook} from "../../services/booksApi"
import AddLibraryBook from '../../components/AddLibraryBook/AddLibraryBook'
import noBook from '../../images/no-book.png'
import './BookPage.css'

class BookPage extends Component{

    state ={
        book:[],
    }

    componentDidMount(){
        this.getBook(this.props.match.params.id)
    }

    componentWillUnmount(){
        this.setState({...this.state,
            book: []
        })
    }

    getBook = async id=>{
        const book = await getOneBook(id)
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

                        <AddLibraryBook 
                            book={this.state.book}
                        />
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