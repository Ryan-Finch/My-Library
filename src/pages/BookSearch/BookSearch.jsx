import React, {useEffect} from 'react';
import {Link} from "react-router-dom"
import './BookSearch.css'

function BookSearch(props){

    useEffect(()=>{

        return() =>{
            props.clearBookSearch()
        }
    },[])

    
    return(
        <div className='styles.container'>
            <div>
                <form className="search-books-form" onSubmit={props.handleSubmit}>
                <input onChange={props.handleChange} value={props.searchTerm}></input>
                <button type="submit" className="btn btn-secondary" >Submit</button>
                </form>
            </div>

            <div className="book-search-container">
                {props.books.map((book,idx) =>
                <div className="book-search-card" style={{width: '18rem'}} key={idx}>
                <Link to={{
                        pathname:`/book-page/${book.id}`,
                    }}>
                    <img 
                        className="book-search-img rounded-right" 
                        src={book.volumeInfo.imageLinks.thumbnail}
                        alt={book.title}
                    />
                
                 </Link> 
                </div>
                )}
            </div>
        </div>
    )
}

export default BookSearch