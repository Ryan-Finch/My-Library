import React, { Component } from 'react';
import {getAll, getOne} from '../../services/libraryService'
import './Library.css'
// import noBook from '../../images/no-book.png'
import OwnedReadBookShelf from '../../components/OwnedReadBookShelf/OwnedReadBookShelf';
import OwnedUnreadBookShelf from '../../components/OwnedUnreadBooks/OwnedUnreadBooks';
import WishList from '../../components/WishList/WishList';
import LibraryBookInfo from '../../components/LibraryBookInfo/LirbaryBookInfo';
import CurrentlyReading from '../../components/CurrentlyReading/CurrentlyReading';



class Library extends Component{

    state={
        currentlyReading: '',
        libraryBookInfo: [],
        // ownedReadBooks: [],
        // ownedUnreadBooks: [],
        // wishList: [],
         // library: [],
    }

    async componentDidMount(){

        const library = await getAll();
        this.props.seperateBooks(library)

        // this.setState({
        //     ...this.props.state,
        //     library
        // })
    }

    // seperateBooks = (library) =>{
    //     const ownedReadBooksCopy = []
    //     const ownedUnreadBooksCopy = []
    //     const wishListCopy = []
    
    //     library.map((book)=>
    //         book.owned && book.read ? ownedReadBooksCopy.push(book): book.owned && !book.read ? ownedUnreadBooksCopy.push(book) : wishListCopy.push(book)
    //     )
    //     console.log(library)
    //     this.setState({
    //         ...this.state,
    //         library,
    //         ownedReadBooks:  ownedReadBooksCopy,
    //         ownedUnreadBooks: ownedUnreadBooksCopy,
    //         wishList: wishListCopy
    //     })
    //   }


    handleClick = async (e) =>{

        const libraryBookInfo = await getOne(e.target.id)
        this.setState({
            ...this.state,
            libraryBookInfo,
        })
    }

    render(){

        return(
            <div >
                <div className="library-container">

                    <div className="library-shelves">
                            <h1>Library</h1>
                            <OwnedReadBookShelf 
                                handleClick={this.handleClick}
                                ownedReadBooks={this.props.ownedReadBooks}
                            />
                            <OwnedUnreadBookShelf
                                handleClick={this.handleClick} 
                                ownedUnreadBooks={this.props.ownedUnreadBooks}
                            />
                            <WishList 
                                handleClick={this.handleClick}
                                wishList={this.props.wishList}
                            />
                    </div>    

                    <div className="library-current-info">
                        <div className="library-book-info">
                            <LibraryBookInfo 
                                libraryBookInfo={this.state.libraryBookInfo}
                            /> 
                        </div>
                        <div className="library-current">
                            <CurrentlyReading 
                                
                            />
                        </div>

                       
                    </div>

                </div>

            </div>
        )
    }
}

export default Library;