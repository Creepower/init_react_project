import React from 'react'
import About from '../components/about/About';
import { Carousel } from '../components/carousel/Carousel';
// import { Navbar } from '../components/Navbar/Navbar';
// import { Navbar } from '../components/Navbar/Navbar';

export const Home = () => {
    return (
        <div>
            <Carousel />

            <About />

        </div>
    )
}


