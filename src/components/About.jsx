import React, { Component } from 'react';
import Header from './Header'

class About extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="about-wrapper">
                    <article className="how">
                    <h2>What is gifLoop?</h2>
                        <p> It's a gif searcher that retrieve only gifs that loops</p>
                    </article>
                    
                    <article className="how"> 
                    <h2>How does it work?</h2>
                    <p>The frontend was built using ReactJS for the components, bootstrap-react for the style plus some CSS customizations and react-router to handle the links. </p> 
                    <p>For the backend a simple API call using axios library to fetch data from the giphy endpoint API, and a string "loop" before the query parameter.</p> 
                    </article>
                    

                </div>
            </>
        );
    }
}
export default About;