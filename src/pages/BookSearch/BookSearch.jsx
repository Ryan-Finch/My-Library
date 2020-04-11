import React, { Component } from 'react';
import {getBooksSearch} from '../../services/booksApi'

class BookSearch extends Component{

    state={
        books:[]
    }
    async componentDidMount(){
        const searchTerm = 'a feast for crows';
        const books = await getBooksSearch(searchTerm) 
        console.log(books.items)
        this.setState({
            books: books.items
        })
    }
    render(){
        return(
            <>
            {this.state.books.map(book =>
            <div>
                <p>{book.volumeInfo.title}</p>
                <p>{book.volumeInfo.authors}</p>
            </div>
            )}
            </>
        )
    }
}

export default BookSearch