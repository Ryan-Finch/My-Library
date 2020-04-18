import React from 'react';
import './OwnedUnreadBooks.css';

function OwnedUnreadBookShelf(props){

    const shelf = props.ownedUnreadBooks ?   props.ownedUnreadBooks.map((book, idx) =>
        <div 
        key={idx} 
        onClick={props.handleClick} className="owned-unread-book"
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
            <div className="owned-unread-container" >
                {shelf}
            </div>
        </>
    )
}


export default OwnedUnreadBookShelf