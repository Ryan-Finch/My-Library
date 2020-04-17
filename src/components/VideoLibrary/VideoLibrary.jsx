import React from 'react';

function VideoLibrary(props){
    return(
        <>
            <div>
            <h1>Video Library</h1>
               <div className="book-search-container">
                {props.videoLibrary ? props.videoLibrary.map((video,idx) =>
                    <div className="card" style={{width: '26.5rem'}} key={idx}>

                            <iframe width="420" height="315"
                            src={`https://www.youtube.com/embed/${video.videoId}`}>
                            </iframe>

                    
                    <div className="card-body">{video.title}</div>
                    <p className="card-text">{video.description}</p>
                    {/* <button onClick={props.handleVideoLibrarySubmit} id={video.id.videoId} name={video.snippet.title} value={video.snippet.description} className="btn btn-secondary">Add to Video Library</button> */}
                    </div>

                
                    ) : null}
                </div>
             </div>
        </>
    )
}

export default VideoLibrary;