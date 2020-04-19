import React from 'react';
import './About.css'

function About(){
    return(
        <div className="about-container">
            <div className="about-content">
            
                <h1 className="about-title">About My Library</h1>
                <div>
                <h3>Welcome to My Library! My Library allows you to create your own virtual library to match what you have at home. Keep track of what books you own and which of them you have read, which you need to read and what books you want to get next! With My Library you can also search through Youtube to find and watch vidoes as well as save them and add them to your library! No more searching the interent for your favorite videos, you can save them right here!<br/><br/>
                Coming soon to My Library: <br/>
                -Bookclub: Find others that what to read the same book and join a book club where you can virtually meetup and talk about it!<br/>
                -Podcasts: Continuing to build and what we have, we will try and implemnt audio into on media library.<br/>
                -Book Suggestions: Have a cureated list of suggested book based on what you have on your shelves.<br/>

                </h3>
                </div>
            </div>
        </div>
    )
}

export default About;