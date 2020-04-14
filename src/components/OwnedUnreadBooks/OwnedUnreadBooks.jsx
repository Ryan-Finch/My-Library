import React from 'react';
import {Link} from 'react-router-dom'
import './OwnedUnreadBooks.css';

function OwnedUnreadBookShelf(props){

    const shelf = props.ownedUnreadBooks ?   props.ownedUnreadBooks.map((book, idx) =>
        <Link key={idx} className="owned-unread-book" to={{
               pathname:`/book-page/${book.bookId}`,
           }}>{book.title}</Link>
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