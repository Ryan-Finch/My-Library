import React from 'react';
import './About.css'

function About(){
    return(
        <div className="about-container">
            <div className="about-content">
            
                <h1 className="about-title">About My Library</h1>
                <div>
                <h4>Welcome to My Library! My Library allows you to create your own virtual library to match what you have at home. Keep track of what books you own and which of them you have read, which you need to read and what books you want to get next! With My Library you can also search through Youtube to find and watch videos as well as save them and add them to your library! No more searching the internet for your favorite videos, you can save them right here!<br/><br/>
                <span>Coming soon to My Library</span>: <br/>
                -<span>Bookclub</span>: Find others that wat to read the same book and join a book club where you can virtually meetup and talk about it!<br/>
                -<span>Podcasts</span>: Continuing to build and what we have, we will try and implement audio into on media library.<br/>
                -<span>Book Suggestions</span>: Have a cureated list of suggested book based on what you have on your shelves.<br/>

                </h4>
                </div>
            </div>
        </div>
    )
}

export default About;