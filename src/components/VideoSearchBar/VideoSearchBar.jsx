import React from 'react';

function VideoSearch(props){
    return(
        <>
            <div>
                <form className="search-books-form" onSubmit={props.handleVideoSubmit}>
                    <input onChange={props.handleChange} value={props.VideoSearchTerm}></input>
                    <button type="submit" className="btn btn-secondary" >Submit</button>
                </form>
            </div>
        </>

    )
}

export default VideoSearch