import React from 'react';
import * as videoLibraryService from '../../services/videoLibraryService'

function VideoSearchDisplay(props){

    return(
        <div>
               <div className="book-search-container">
                {props.videos ? props.videos.map((video,idx) =>
                    <div className="card" style={{width: '26.5rem'}} key={idx}>

                            <iframe width="420" height="315"
                            src={`https://www.youtube.com/embed/${video.id.videoId}`}>
                            </iframe>

                    
                    <div className="card-body">{video.snippet.title}</div>
                    <p className="card-text">{video.snippet.description}</p>
                    <button onClick={props.handleVideoLibrarySubmit} id={video.id.videoId} name={video.snippet.title} value={video.snippet.description} className="btn btn-secondary">Add to Video Library</button>
                    </div>

                
                ) : null}
            </div>
        </div>
    )
}

export default VideoSearchDisplay;