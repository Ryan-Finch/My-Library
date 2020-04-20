import React from 'react';

import "./VideoSearchDisplay.css"

function VideoSearchDisplay(props){

    let arr1 = props.videoLibrary.map(video => {return video.videoId})

    return(
        <div>
               <div className="video-search-container">
                {props.videos ? props.videos.map((video,idx) =>
                    <div className="card video-search-card" style={{width: '26.5rem'}} key={idx}>
                        <iframe 
                        className="video-search-iframe"
                        title={video.id.videoId}
                        src={`https://www.youtube.com/embed/${video.id.videoId}`}>
                        </iframe>
                    <div className="card-body video-search-card-body">{video.snippet.title}</div>

                    {arr1.includes(video.id.videoId) ? 
                    null
                    :  
                    <button onClick={props.handleVideoLibrarySubmit} id={video.id.videoId} name={video.snippet.title} value={video.snippet.description} className="btn btn-secondary">Add to Video Library</button>
                    }
                    
                    </div>
                ) 
                : 
                null}

            </div>
        </div>
    )
}

export default VideoSearchDisplay;