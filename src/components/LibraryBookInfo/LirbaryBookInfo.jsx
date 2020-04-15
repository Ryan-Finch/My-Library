import React from 'react';
import './LibraryBookInfo.css'
import {Link} from 'react-router-dom'
import CurrReadButton from '../CurrReadButton/CurrReadButton';

function LibraryBookInfo(props){

    const showBook = props.libraryBookInfo.length ? 
    props.libraryBookInfo.map((bk,idx)=>
    
        <div key={idx}>
            <h3>{bk.title}</h3>
            <Link to={{
                    pathname:`/book-page/${bk.bookId}`,
                    }}>
            <img src={bk.cover} alt={bk.title}/>
            </Link>
            <p>{bk.authors}</p>
            <CurrReadButton 
                handleCurrentlyReading={props.handleCurrentlyReading}
                bk={bk}
            />
        </div>
        
        )
        :
        <div>
            <h1>Book Info</h1>
        </div>

    return(
        <>
        <div>
            {showBook}
            
        </div>
        </>
    )
}

export default LibraryBookInfo;