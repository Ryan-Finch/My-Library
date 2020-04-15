import React, { Component } from 'react';
import * as libraryService from '../../services/libraryService'
import "./AddLibrary.css"

class AddLibraryBook extends Component{

    state={
        formData:{
            owned: false,
            read: false,
        }
    }

    formRef = React.createRef();

    handleAddLibrary = async(book, data)=>{
        await libraryService.create(book, data);
        await this.props.refreshLibrary();
        await this.props.updateOwnedBook(book[0].id)
        // this.props.history.push('/library');
    }

    handleChange = e => {
        const formData ={...this.state.formData, [e.target.name]: e.target.value}
        this.setState({
            formData,
        })
    }
    handleSubmit = e =>{
        e.preventDefault()
        this.handleAddLibrary(this.props.book, this.state.formData)
    }



    render(){
        return(
            <div className="add-library-form-container">
                <form ref={this.formRef} onSubmit={this.handleSubmit}>
                <div>
                    <label>Do you own?
                    <select className="btn btn-secondary" name="owned" value={this.state.formData.owned} onChange={this.handleChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    </label>
                    <label>Have you read?
                    <select className="btn btn-secondary" name="read" value={this.state.formData.read} onChange={this.handleChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    </label>
                </div>
                    <button className="btn btn-secondary" type="submit" >
                    {this.state.formData.owned ? 'Add to Library' : 'Add to Wish List'}
                    </button>
                
                </form> 
            </div>
        )   
    }
}

export default AddLibraryBook