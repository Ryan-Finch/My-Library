import React from 'react';
import {Link} from 'react-router-dom'
import './WishList.css'


function WishList(props){

    const shelf = props.wishList ?  props.wishList.map((book, idx) =>
        <Link key={idx} className="wish-list-book" to={{
                pathname:`/book-page/${book.bookId}`,
            }}>{book.title}</Link>
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