import React from 'react';
import './CurrReadButton.css'

function CurrReadButton(props) {
    return(
        <>
            <div>
                <label className="curr-read-label">Currently Reading?</label>
                    <input className="curr-read-input" onChange={props.handleCurrentlyReading} id={props.bk.bookId} checked={props.bk.currentlyReading} value="true" type="radio"/>
                    <label className="curr-read-label">Yes</label>
                    <input className="curr-read-input" onChange={props.handleCurrentlyReading} id={props.bk.bookId}
                    checked={props.bk.currentlyReading === false} value="false" type="radio"/>
                <label className="curr-read-label">No</label>
            </div>
        </>
    )
    
}

export default CurrReadButton;