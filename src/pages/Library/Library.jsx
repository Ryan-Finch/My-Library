import React, { Component } from 'react';
import {getAll, getOne, update} from '../../services/libraryService'
import './Library.css'
import * as videoLibraryService from '../../services/videoLibraryService'
import BookLibrary from '../../components/BookLibrary/BookLibrary'
import VideoLibrary from '../../components/VideoLibrary/VideoLibrary'



class Library extends Component{

    state={
        switchLibrary: "true",
        libraryBookInfo: [],
        renamingVideo: '',
        newVideoName: ''
    }

    async componentDidMount(){

        const library = await getAll();
        const videoLibrary = await videoLibraryService.getAll();
        this.props.seperateBooks(library, videoLibrary)

    }

    handleClick = async (e) =>{
        console.log(e.target.id)
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
        const videoLibrary = await videoLibraryService.getAll();
        await this.props.seperateBooks(library, videoLibrary)
        await this.setState({
            ...this.state,
            libraryBookInfo: [updatedBook],
        })

    }
    handleLibrarySwitch=(e)=>{
        let value = e.target.value;

        value === "true" ? 
            value = "false" 
            : 
            value = "true"
  
        this.setState({
            ...this.state,
            switchLibrary: value
        })
    }
////////////////////////////////////////
/////////Video Library Methods

    handleDeleteVideo=  e =>{

        videoLibraryService.deleteOne(e.target.id);
        this.props.refreshLibrary();
    }

    handleRenameClick= e =>{
        console.log(e.target.id)
        this.setState({
            ...this.state,
            renamingVideo: e.target.id
        })
    }

    handleNameChange=e=>{

        this.setState({
            ...this.state,
            newVideoName: e.target.value
        })        
    }

    handleRenameSubmit= async e =>{
    
        const newName={
            title: this.state.newVideoName
        }
         await videoLibraryService.update(newName,e.target.id)
        this.props.refreshLibrary()
        this.setState({
            ...this.state,
            renamingVideo: false,
            newVideoName: ''
        })
    }
//////////////////////////////////////////
/////////////Render
    render(){

        return(
            <div >
                <button onClick={this.handleLibrarySwitch} className="btn btn-secondary" value={this.state.switchLibrary}>Switch Libraries</button>
                {this.state.switchLibrary === "true" ?
                    <BookLibrary
                        library={this.props.library} 
                        ownedReadBooks={this.props.ownedReadBooks}
                        ownedUnreadBooks={this.props.ownedUnreadBooks}
                        handleClick={this.handleClick}
                        wishList={this.props.wishList}
                        libraryBookInfo={this.state.libraryBookInfo}
                        handleCurrentlyReading={this.handleCurrentlyReading}
                    />
                    :
                    <VideoLibrary 
                        videoLibrary={this.props.videoLibrary}
                        handleDeleteVideo={this.handleDeleteVideo}
                        handleRenameClick={this.handleRenameClick}
                        renamingVideo={this.state.renamingVideo}
                        handleRenameSubmit={this.handleRenameSubmit}
                        handleNameChange={this.handleNameChange}
                    />
                }
            </div>
        )
    }
}

export default Library;