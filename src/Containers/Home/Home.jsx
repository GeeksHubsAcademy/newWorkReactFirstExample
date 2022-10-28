
//Basic JSX Component functional structure

import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

import './Home.css';

const Home = () => {

    return (
        <div className="homeDesign">
            <Header/>
            
            <div className="homeFiller">
                I am the main content for the body of Home
            </div>

            <Footer/>
        </div>
    )
}

export default Home;