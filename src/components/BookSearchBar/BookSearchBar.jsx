import React from 'react';

function BookSearchBar(props){
    return(
        <>
            <div>
                <form className="search-books-form" onSubmit={props.handleSubmit}>
                <input onChange={props.handleChange} value={props.searchTerm}></input>
                <button type="submit" className="btn btn-secondary" >Submit</button>
                </form>
            </div>
        </>
    )
}

export default BookSearchBar