import React from 'react'
import Frieren from '../asset/frieren.jpg' 

const Home = () => {
    return (
        <section className='bg-cover bg-center h-screen text-text-color' style={{ backgroundImage: `url(${ Frieren })` }}>
            <div className='bg-second-bg-color bg-opacity-60 h-full flex flex-col justify-center items-center text-center p-6'>
                <h2 className='text-5xl font-bold mb-4'>Hello, I'm <span className='text-main-color'>Adithya Prasetio Hutahaean</span></h2>
                <p className='text-2xl mb-8'>Web Developer & Backend Developer</p>
            </div>
        </section>
    )
}

export default Home