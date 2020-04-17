import React, { useEffect } from 'react';
import './BookSearch.css'
import BookSearchBar from '../../components/BookSearchBar/BookSearchBar'
import VideoSearchBar from '../../components/VideoSearchBar/VideoSearchBar'
import BookSearchDisplay from '../../components/BookSearchDisplay/BookSearchDisplay';
import VideoSearchDisplay from '../../components/VideoSearchDisplay/VideoSearchDisplay';



function BookSearch(props){

    useEffect(()=>{
        props.refreshLibrary()
    },[])
    const searchType = props.searchState === "Book" 
        ?
        <BookSearchBar 
            handleChange={props.handleChange}
            searchTerm={props.searchTerm}
            handleSubmit={props.handleSubmit}
        />
        : 
        <VideoSearchBar 
            handleChange={props.handleChange}
            searchTerm={props.searchTerm}
            handleVideoSubmit={props.handleVideoSubmit}
        />

    const searchTypeDisplay= props.searchState === "Book"
        ?
        <BookSearchDisplay 
        {...props}
            books={props.books}
        />
        :
        <VideoSearchDisplay 
            {...props}
            // videoLibrary={props.videoLibrary}
            handleVideoLibrarySubmit={props.handleVideoLibrarySubmit}
        />



    return(
        <div className='styles.container'>

            <div>
                <div>
                    <label>Book
                        <input onChange={props.handleSwitch} type='radio' name="video-book-switch" checked={props.searchState === "Book"} value="Book" />
                    </label>
                    <label>Video
                        <input onChange={props.handleSwitch} type='radio' name="video-book-switch" checked={props.searchState === "Video"} value="Video" />
                    </label>
                </div>
                
                <div>
                    {searchType}    
                </div>

            </div>


            <div>
                {searchTypeDisplay}
            </div>

        </div>
    )
}

export default BookSearch