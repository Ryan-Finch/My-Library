import React from 'react';

function LibraryBookInfo(props){

    const showBook = props.libraryBookInfo ? 
    props.libraryBookInfo.map((bk,idx)=>
    
        <div key={idx}>
            <p>{bk.title}</p>
            <p>{bk.authors}</p>
            <img src={bk.cover} alt={bk.title}/>
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