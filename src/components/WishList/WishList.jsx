import React from 'react';
import './WishList.css'


function WishList(props){

    const shelf = props.wishList ?  props.wishList.map((book, idx) =>
        <div
            key={idx} 
            onClick={props.handleClick} className="owned-read-book"
            id={book.bookId}>{book.title}
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