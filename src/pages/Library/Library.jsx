import React, { Component } from 'react';
import {getAll, getOne, update} from '../../services/libraryService'
import './Library.css'
// import noBook from '../../images/no-book.png'
import OwnedReadBookShelf from '../../components/OwnedReadBookShelf/OwnedReadBookShelf';
import OwnedUnreadBookShelf from '../../components/OwnedUnreadBooks/OwnedUnreadBooks';
import WishList from '../../components/WishList/WishList';
import LibraryBookInfo from '../../components/LibraryBookInfo/LirbaryBookInfo';
import CurrentlyReading from '../../components/CurrentlyReading/CurrentlyReading';



class Library extends Component{

    state={
        libraryBookInfo: [],
    }

    async componentDidMount(){

        const library = await getAll();
        this.props.seperateBooks(library)

    }

    handleClick = async (e) =>{

        const libraryBookInfo = await getOne(e.target.id)
        this.setState({
            ...this.state,
            libraryBookInfo,
        })
    }

    handleCurrentlyReading =async (e) =>{
        const currentlyReading={
            currentlyReading: e.target.value
        }

        const updatedBook = await update(currentlyReading,e.target.id)
        const library = await getAll();
        await this.props.seperateBooks(library)
        await this.setState({
            ...this.state,
            libraryBookInfo: updatedBook,
        })

    }

    render(){

        return(
            <div >
                <div className="library-container">

                    <div className="library-curr-read">
                        <div className="library-current">
                            <CurrentlyReading 
                                library={this.props.library}
                            />
                        </div>

                    </div>

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

                    <div className="library-info">
                        <div className="library-book-info">
                            <LibraryBookInfo 
                                libraryBookInfo={this.state.libraryBookInfo}
                                handleCurrentlyReading={this.handleCurrentlyReading}
                            /> 
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Library;