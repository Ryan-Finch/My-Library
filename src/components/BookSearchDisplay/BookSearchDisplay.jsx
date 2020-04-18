import React from 'react';
import {Link} from 'react-router-dom'
import noBook from '../../images/no-book.png'

function BookSearchDisplay(props){

    return(
        <>
            <div className="book-search-container">
                {props.books ? props.books.map((book,idx) =>
                    <div className="book-search-card" style={{width: '18rem'}} key={idx}>
                    <Link to={{
                        pathname:`/book-page/${book.id}`,
                    }}>
                    <img 
                        className="book-search-img rounded-right" 
                        src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : noBook}
                        alt={book.title}
                        data-toggle="tooltip" data-placement="right" title={book.volumeInfo.title}
                    />
                
                    </Link> 
                    </div>
                
                ) : null}
            </div>
        </>
    )
}

export default BookSearchDisplay;