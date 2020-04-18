import React from 'react';
import './OwnedReadBooks.css'

function OwnedReadBookShelf(props){

    const shelf = props.ownedReadBooks ?   props.ownedReadBooks.map((book, idx) =>
        <div
            key={idx} 
            onClick={props.handleClick} className="owned-read-book"
            id={book.bookId}
            data-toggle="tooltip" 
            data-placement="right" 
            title={book.title}
        >{book.title}</div>
       )
       :
       null

    return(
        <>
            <div className="owned-read-container" >
              {shelf}
            </div>
        </>
    )
}


export default OwnedReadBookShelf