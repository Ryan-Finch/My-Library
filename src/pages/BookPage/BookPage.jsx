import React, { Component} from 'react';
import {getOneBook} from "../../services/booksApi"
import * as libraryService from '../../services/libraryService'

class BookPage extends Component{

    state ={
        book:[],
        invalidForm: true,
        formData:{
            owned: false,
            read: false,
        }
    }
    
    formRef = React.createRef();

    componentDidMount(){
        this.getBook(this.props.match.params.id)
    }

    componentWillUnmount(){
        this.setState({...this.state,
            book: []
        })
    }

    getBook = async id=>{
        const book = await getOneBook(id)
        console.log(book.volumeInfo.title)
        this.setState({...this.state,
          book: [book]
        })
      }

    handleAddLibrary = async(book, data)=>{
        await libraryService.create(book, data);
    }

    handleChange = e => {
        const formData ={...this.state.formData, [e.target.name]: e.target.value}
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        })
    }
    handleSubmit = e =>{
        e.preventDefault()

        this.handleAddLibrary(this.state.book, this.state.formData)
    }

    render(){
        return(
            <>
            <div>
                {this.state.book.map(bk=> 
                <div key={bk.id}>
                    <div>{bk.volumeInfo.title}</div>
                    <div>{bk.volumeInfo.authors}</div>
                    <div dangerouslySetInnerHTML={{__html: 
                    `${bk.volumeInfo.description}`
                    }}></div>
                    
                    <form ref={this.formRef} onSubmit={this.handleSubmit}>
                    
                        {/* <input name="title" value={bk.volumeInfo.title} placeholder={bk.volumeInfo.title} onChange={this.handleChange} hidden></input>
                        <input name="authors" value={bk.volumeInfo.authors} 
                       placeholder={bk.volumeInfo.authors} 
                       onChange={this.handleChange} hidden></input>
                        <input name="descriptions" value={bk.volumeInfo.description} placeholder={bk.volumeInfo.description} onChange={this.handleChange} hidden></input>
                        <input name="cover" value={bk.volumeInfo.title} onChange={this.handleChange}
                       placeholder={bk.volumeInfo.title} hidden></input> */}

                        <label>Do you own?
                        <select name="owned" value={this.state.formData.owned} onChange={this.handleChange}>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                        </label>
                        <label>Have you read?
                        <select name="read" value={this.state.formData.read} onChange={this.handleChange}>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                        </label>
                        <button type="submit" disabled={this.state.invalidForm}>Add to Library</button>
                    </form>
                </div>
                )}
            </div>


            </>
        )
    }
}

export default BookPage;