import React from 'react';
import OwnedReadBookShelf from '../../components/OwnedReadBookShelf/OwnedReadBookShelf';
import OwnedUnreadBookShelf from '../../components/OwnedUnreadBooks/OwnedUnreadBooks';
import WishList from '../../components/WishList/WishList';
import LibraryBookInfo from '../../components/LibraryBookInfo/LirbaryBookInfo';
import CurrentlyReading from '../../components/CurrentlyReading/CurrentlyReading';



function BookLibrary(props){
    return(
        <>
            <div className="library-container">

                <div className="library-curr-read">
                    <div className="library-current">
                        <CurrentlyReading 
                            library={props.library}
                            handleClick={props.handleClick}
                        />
                    </div>

                </div>

                <div className="library-shelves">
                        <h1>Book Library</h1>
                        <h3>Books You Have Read</h3>
                        <OwnedReadBookShelf 
                            handleClick={props.handleClick}
                            ownedReadBooks={props.ownedReadBooks}
                        />
                        <h3>Books You Need To Read</h3>
                        <OwnedUnreadBookShelf
                            handleClick={props.handleClick} 
                            ownedUnreadBooks={props.ownedUnreadBooks}
                        />
                        <h3>Books You Want To Own and Read</h3>
                        <WishList 
                            handleClick={props.handleClick}
                            wishList={props.wishList}
                        />
                </div>    

                <div className="library-info">
                    <div className="library-book-info">
                        <LibraryBookInfo 
                            libraryBookInfo={props.libraryBookInfo}
                            handleCurrentlyReading={props.handleCurrentlyReading}
                            
                        /> 
                    </div>
                </div>

            </div>
        </>
    )
}

export default BookLibrary;