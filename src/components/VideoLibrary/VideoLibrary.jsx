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

                    {props.renamingVideo === video._id ? 
                        <div>
                        <input className="card-body" onChange={props.handleNameChange}/><button className="btn btn-secondary" onClick={props.handleRenameSubmit}id={video._id}>Submit</button>
                        </div>
                        :
                        <div className="card-body">{video.title}</div>  
                    }
                    <button onClick={props.handleDeleteVideo} className="btn btn-secondary" id={video._id}>Delete Video</button>
                    <button onClick={props.handleRenameClick} className="btn btn-secondary" id={video._id} value="true">Rename Video</button>
                    </div>

                
                    ) : null}
                </div>
             </div>
        </>
    )
}

export default VideoLibrary;