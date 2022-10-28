
//Basic JSX Component functional structure

import React from 'react';
import {useState, useEffect} from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

import './Home.css';

const Home = () => {

    let day = "Friday";
    
    //Hooks are declared here, they are the first to be checked by the component.
    const [semaphore, setSemaphore] = useState(false);

    const showText = () => {
        //This is executed only when we click..

        //We change the state of our component here,, just by adjusting the hook value.
        setSemaphore(true);
    }

    //The render zone is the second thing that is being checked.
    return (
        <div className="homeDesign">
            <Header/>
            
            <div className="homeFiller">
                {/* Conditional interpolation */}
                {
                    semaphore === true &&

                    <div>This is Home and today is {day}</div>
                }

                <div onClick={()=>showText()}>click me.</div>
                
            </div>

            <Footer/>
        </div>
    )
}

export default Home;