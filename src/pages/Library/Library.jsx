import React, { Component } from 'react';
import {getAll} from '../../services/libraryService'
import './Library.css'
import noBook from '../../images/no-book.png'

class Library extends Component{

    state={
        library: []
    }

    async componentDidMount(){
        const library = await getAll();
        console.log(library)
        this.setState({
            ...this.state,
            library
        })
    }
    render(){
        return(
            <div >
                {this.state.library.map((book, idx)=>
                    <div key={idx}>
                        <div>{book.title}</div>
                        <img 
                            src={book.cover ? book.cover : noBook}
                            alt={book.title}
                            
                        />
                    </div>
                )}
            </div>

        )
    }
}

export default Library;