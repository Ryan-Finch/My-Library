import React from 'react';

function CurrReadButton(props) {
    return(
        <>
            <div>
                <label>Currently Reading?</label>
                    <input onChange={props.handleCurrentlyReading} id={props.bk.bookId} checked={props.bk.currentlyReading} value="true" type="radio"/>
                    <label>Yes</label>
                    <input onChange={props.handleCurrentlyReading} id={props.bk.bookId}
                    checked={props.bk.currentlyReading === false} value="false" type="radio"/>
                <label>No</label>
            </div>
        </>
    )
    
}

export default CurrReadButton;