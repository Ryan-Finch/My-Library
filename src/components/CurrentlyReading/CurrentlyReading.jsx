import React from 'react';
import {Link} from 'react-router-dom'
import './CurrentlyReading.css'

function CurrentlyReading(props) {


    return(
        <>
        <div>
        <h1>Currently Reading</h1>
            <div className="curr-read-container">
            {props.library.map((book,idx)=>
                book.currentlyReading ? 
                <Link key={idx} to={{
                    pathname:`/book-page/${book.bookId}`,
                    }}>
                <img src={book.cover} alt={book.title}></img>
                </Link>
                :
                null
            )} 
            </div> 
        </div>
        </>
    )
}

export default CurrentlyReading;