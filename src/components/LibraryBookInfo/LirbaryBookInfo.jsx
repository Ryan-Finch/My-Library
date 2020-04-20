import React from 'react';
import './LibraryBookInfo.css'
import {Link} from 'react-router-dom'
import CurrReadButton from '../CurrReadButton/CurrReadButton';
import ModalUpdateBook from '../ModalUpdateBook/ModalUpdateBook';

function LibraryBookInfo(props){

    const showBook = props.libraryBookInfo.length ? 
    props.libraryBookInfo.map((bk,idx)=>
    
        <div key={idx} className="library-book-info-container">
            <h1>Book Info</h1>
            <hr></hr>
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
        

            <button type="button" className="btn btn-secondary modal-button" data-toggle="modal" data-target="#exampleModalLong">
            Book Info
            </button>

            <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog " role="document">
                    <div className="modal-content modal-book-info">
                    <div className="modal-header">
                        <h3 className="modal-title" id="exampleModalLongTitle">{bk.title}</h3>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body" dangerouslySetInnerHTML={{__html: `${bk.description}`}}>
                    
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <ModalUpdateBook 
                            {...props}
                            book={bk}
                        />
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
        )
        
        :
        <div className="library-book-info-container">
            <h1>Book Info</h1>
            <hr></hr>
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