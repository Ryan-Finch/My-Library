import React from 'react';
import './WishList.css'


function WishList(props){

    const shelf = props.wishList ?  props.wishList.map((book, idx) =>
        <div
            key={idx} 
            onClick={props.handleClick} className="wish-list-book"
            id={book.bookId}
            data-toggle="tooltip" 
            data-placement="right" 
            title={book.title}
        >
        <p className="book-text" id={book.bookId}>{book.title}</p>   
        </div>
        )
        :
        'Empty Shelf'

    return(
        <>
            <div className="wish-list-container" >
                {shelf}
            </div>
        </>
    )
}


export default WishList