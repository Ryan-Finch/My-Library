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
                        <h3>Read Shelf</h3>
                        <OwnedReadBookShelf 
                            handleClick={props.handleClick}
                            ownedReadBooks={props.ownedReadBooks}
                        />
                        <h3>Unread Shelf</h3>
                        <OwnedUnreadBookShelf
                            handleClick={props.handleClick} 
                            ownedUnreadBooks={props.ownedUnreadBooks}
                        />
                        <h3>Wishlist Shelf</h3>
                        <WishList 
                            handleClick={props.handleClick}
                            wishList={props.wishList}
                        />
                </div>    
                    <div className="library-book-info">
                        <LibraryBookInfo 
                            libraryBookInfo={props.libraryBookInfo}
                            handleCurrentlyReading={props.handleCurrentlyReading}
                            refreshLibrary={props.refreshLibrary}
                            library={props.library}
                            handleLibraryBookInfoUpdate={props.handleLibraryBookInfoUpdate}
                        /> 
                    </div>
            </div>
        </>
    )
}

export default BookLibrary;