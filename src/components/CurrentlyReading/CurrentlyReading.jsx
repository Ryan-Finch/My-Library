import React from 'react';
import './CurrentlyReading.css'

function CurrentlyReading(props) {


    return(
        <>
        <div>
            <h1 className="curr-read-h1">Currently Reading</h1>
            <div className="curr-read-container">
            {props.library.map((book,idx)=>
                book.currentlyReading ? 
    
                <img 
                src={book.cover} 
                alt={book.title} 
                onClick={props.handleClick} 
                id={book.bookId} 
                key={idx} ></img>
                :
                null
            )} 
            </div> 
        </div>
        </>
    )
}

export default CurrentlyReading;