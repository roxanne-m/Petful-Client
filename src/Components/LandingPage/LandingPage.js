import React from 'react';
import './LandingPage.css';
import CatDog from '../../Images/pexels-snapwire-46024.jpg'

class LandingPage extends React.Component{


    render(){
        return(
            <div>
                
                <section>
                    <img className='bg-img' src={CatDog} alt="cat dog"/>
                    <div className='landing-page-quote'>
                        <h1>Adopt Today.</h1>
                    <h2>Unconditional Love with Paws.</h2>
                    </div>
                </section>

                <section className='process-style'>
                <h2>Adoption Process</h2>
                <h3>Adoption Shelter Connection</h3>
                <p>
                    Here at Petful FIFO, we work hard to scout out pet shelters who have furry friends
                    that are most in need of a new chance and a new home. We collaborate alongside with them 
                    to pair our four pawed friends with a loving family. Petful FIFO works only with the adoption 
                    process regarding dogs and cats; for any other animal adoptions, you will need to contact a specific
                    animal shelter nearest you. 
                </p>

            <h3>How Petful FIFO Functions</h3>
                <ol>
                    <li>
                        Click on the 'Adoption' tab in our website.
                    </li>
                    <li>
                        You will see a list of names that are already in our waiting list.
                        You will also see some of our pets that are in the process of being paired with their 
                        new loving home! You may add your name to get on the list and be paired with your new furry friend!
                    </li>
                    <li>
                        Petful FIFO works in a 'first in first out' manner, meaning the pets that have been in 
                        a pet shelter the longest will be the first ones in line to be adopted. All of our pets have a picture,
                        their age, breed, name, a short description of them, and their background story.
                    </li>
                    <li>
                        Once your name is first in line, you will have the opportunity to choose to either adopt the next dog or cat in line. 
                    </li>
                    <li>
                    Finally, you meet your new pet! Make sure to keep them updated with their vaccinations.
                        Take your new pet home and make a lifetime of new memories!
                    </li>
                </ol>
                </section>
            </div>
        )
    }
}

export default LandingPage;