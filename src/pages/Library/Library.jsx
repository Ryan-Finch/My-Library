import React, { Component } from 'react';
import {getAll} from '../../services/libraryService'
import './Library.css'
import noBook from '../../images/no-book.png'
import OwnedReadBookShelf from '../../components/OwnedReadBookShelf/OwnedReadBookShelf';
import OwnedUnreadBookShelf from '../../components/OwnedUnreadBooks/OwnedUnreadBooks';
import WishList from '../../components/WishList/WishList';
import LibraryBookInfo from '../../components/LibraryBookInfo/LirbaryBookInfo';
import CurrentlyReading from '../../components/CurrentlyReading/CurrentlyReading';


class Library extends Component{

    state={
        // library: [],
        currentlyReading: '',
        libraryBookInfo: [],
        // ownedReadBooks: [],
        // ownedUnreadBooks: [],
        // wishList: [],
    }

    async componentDidMount(){
        const library = await getAll();
        console.log(library)

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

    

    render(){

        return(
            <div >
                <div className="library-container">

                    <div className="libray-profile">
                        <LibraryBookInfo />
                    </div>

                    <div className="library-current">
                    <CurrentlyReading />
                    </div>


                    <div className="library-shelves">
                        <h1>Library</h1>
                        <OwnedReadBookShelf 
                            ownedReadBooks={this.props.ownedReadBooks}
                        />
                        <OwnedUnreadBookShelf 
                            ownedUnreadBooks={this.props.ownedUnreadBooks}
                        />
                        <WishList 
                            wishList={this.props.wishList}
                        />
                    </div>

                    
                </div>
                
            </div>

        )
    }
}

export default Library;