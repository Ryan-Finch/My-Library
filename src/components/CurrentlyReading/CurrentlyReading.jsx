import React from 'react';
import {Link} from 'react-router-dom'

function CurrentlyReading(props) {


    return(
        <>
        <div>
        <h1>Currently Reading</h1>
            {props.library.map((book,idx)=>
                book.currentlyReading ? 
                <Link to={{
                    pathname:`/book-page/${book.bookId}`,
                    }}>
                <img src={book.cover} alt={book.title}></img>
                </Link>
                :
                null
            )}  
        </div>
        </>
    )
}

export default CurrentlyReading;