import React from 'react';
import './Hero.css'
import logo from '../../../image/meal-icon (2).png';
import logo2 from '../../../image/meal-icon.png';
const Hero = () => {
    return (
        <div>
            <div className='container hero'>
                <div>
                    <img src={logo} alt="" className='img-fluid' />
                </div>
                <div className='text-center hero-info'>
                    <h3>Welcome to TheMealDB</h3>
                    <p>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.
                        We also offer a free JSON API for anyone wanting to use it, with additional features for subscribers.</p>
                    <button className='paypalButton'> <span className='pay'>Pay</span><span className='pal'>Pal</span> Subscribe</button>
                </div>
                <div>
                  <img src={logo2} alt="" className='img-fluid' />
                </div>
            </div>
        </div>
    );
};

export default Hero;