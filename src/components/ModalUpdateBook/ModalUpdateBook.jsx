import React, { Component } from 'react';
import * as libraryService from '../../services/libraryService'
import './ModalUpdateBook.css'

class ModalUpdateBook extends Component{

    state={
        formData:{
            owned: false,
            read: false
        }
    }

    formRef = React.createRef();

    componentDidMount(){
  
            this.setState({
                ...this.state,
                formData:{
                    owned: this.props.book.owned,
                    read: this.props.book.read
                }
            })
    }
    
    componentWillUnmount= async()=>{
        await this.props.refreshLibrary()
    }

    handleUpdateBook = async(data)=>{
        await libraryService.update(data, this.props.book.bookId);
        await this.props.refreshLibrary()
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
        await libraryService.deleteOne(this.props.book);
        this.setState({
            ...this.state,
            formData:{
                owned:false,
                read:false,
            }
        })
        await this.props.refreshLibrary()
    }


    render(){
        return(
            <>
                <div className="add-library-form-container">
                <form ref={this.formRef} onSubmit={this.handleSubmit}>
                    <div>

                        <label>Do you now own?
                        <select className="btn btn-secondary" name="owned" value={this.state.formData.owned} onChange={this.handleChange}>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                        </label>
                    
                        <label>Add to read?
                        <select className="btn btn-secondary" name="read" value={this.state.formData.read} onChange={this.handleChange}>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                        </label>
                    
                    </div>

                    <button className="btn btn-secondary" type="submit" >
                    {this.state.formData.owned ? 'Update Library' : 'Add To Library'}
                    </button>
                </form>

                <button onClick={this.handleDeleteSubmit} className="btn btn-secondary update-button" type="submit" data-dismiss="modal">Delete from Library</button>
            </div>
            </>
        )
    }
}

export default ModalUpdateBook;