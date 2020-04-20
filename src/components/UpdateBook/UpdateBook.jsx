import React, { Component } from 'react';
import * as libraryService from '../../services/libraryService'
import {Link} from 'react-router-dom'
import './UpdateBook.css'

class UpdateBook extends Component{

    state={
        formData:{
            owned: false,
            read: false
        }
    }

    formRef = React.createRef();

    componentDidMount(){
        if(this.props.bookOwned[0]){
            this.setState({
                ...this.state,
                formData:{
                    owned: this.props.bookOwned[0].owned,
                    read: this.props.bookOwned[0].read
                }
            })
        }
    }
    
    handleUpdateBook = async(data)=>{
        await libraryService.update(data, this.props.bookOwned[0].bookId);
        await this.props.refreshLibrary()
        await this.props.updateOwnedBook(this.props.bookOwned[0].bookId)
    }   

    handleChange = e => {
        const formData ={...this.state.formData, [e.target.name]: e.target.value}
        this.setState({
            formData,
        })
    }

    handleSubmit = e =>{
        e.preventDefault()
        this.handleUpdateBook(this.state.formData)
    }

    handleDeleteSubmit= async e =>{
        await libraryService.deleteOne(this.props.bookOwned[0]);
        this.setState({
            ...this.state,
            formData:{
                owned:false,
                read:false,
            }
        })
        await this.props.refreshLibrary()
        await this.props.deleteOwnedBook()
    }


    render(){
        return(
            <>
                <div className="add-library-form-container">
                <form ref={this.formRef} onSubmit={this.handleSubmit}>
                <div>

                {this.props.bookOwned[0] && this.props.bookOwned[0].owned ? 
                    null
                    :
                    <label>Do you now own?
                    <select className="btn btn-secondary" name="owned" value={this.state.formData.owned} onChange={this.handleChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    </label>
                }
                
                {this.props.bookOwned[0] && this.props.bookOwned[0].read ? 
                    null
                    :
                    <label>Add to read?
                    <select className="btn btn-secondary" name="read" value={this.state.formData.read} onChange={this.handleChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    </label>
                }
                </div>

                {this.props.bookOwned[0] && this.props.bookOwned[0].owned && this.props.bookOwned[0].read ? 
                    null
                    :
                    <button className="btn btn-secondary update-form-button" type="submit" >
                    {this.state.formData.owned ? 'Update Library' : 'Add To Library'}
                    </button>
                }
                </form>

                <button onClick={this.handleDeleteSubmit} className="btn btn-secondary update-button" type="submit">Delete from Library</button>
                <Link to='/library' className="btn btn-secondary update-button">Go To Your Library</Link>
            </div>
            </>
        )
    }
}

export default UpdateBook;
