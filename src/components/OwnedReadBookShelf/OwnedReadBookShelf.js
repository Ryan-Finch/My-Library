import React from 'react';
import './OwnedReadBooks.css'
import {Link} from 'react-router-dom'

function OwnedReadBookShelf(props){

    const shelf = props.ownedReadBooks ?   props.ownedReadBooks.map((book, idx) =>
        <Link key={idx} className="owned-read-book" to={{
               pathname:`/book-page/${book.bookId}`,
           }}>{book.title}</Link>
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