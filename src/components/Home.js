import React from 'react'
import { ReactTyped } from "react-typed";
import Frieren from '../asset/frieren.jpg' 

const Home = () => {
    return (
        <section id='home' className='bg-cover bg-center h-screen text-text-color' style={{ backgroundImage: `url(${ Frieren })` }}>
            <div className='bg-second-bg-color bg-opacity-90 h-full flex flex-col justify-center items-center text-center p-6'>
                <h2 className='text-5xl font-bold mb-4'>Hello, I'm<br /><span className='text-main-color'>Adithya Prasetio Hutahaean</span></h2>
                <p className='text-2xl font-semibold mb-8'>
                    <ReactTyped strings={[ 'Web Developer', 'Backend Developer' ]} 
                                typeSpeed={100} 
                                backSpeed={100} 
                                backDelay={1000} 
                                loop />
                </p>
                <a href="#project" className='bg-main-color hover:bg-second-bg-color text-text-color font-bold py-2 px-6 rounded-lg shadow-lg transition ease-in-out duration-500'>
                    My Projects
                </a>
            </div>
        </section>
    )
}

export default Home