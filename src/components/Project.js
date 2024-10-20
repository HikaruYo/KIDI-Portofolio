import React from 'react'
import Pong from '../asset/Pong.png'
import Calender from '../asset/Calender.png'

const Project = () => {
    return (
        <section id='project' className='py-20 bg-second-bg-color'>
            <div className='container mx-auto text-center'>
                <h2 className='text-4xl text-text-color font-bold mb-8'>My <span className='text-main-color'>Project</span></h2>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div className='bg-bg-color p-4 rounded-lg'>
                        <img src={ Pong } alt='Pong Game' className='w-full h-56 object-cover mb-4 rounded-lg' />
                        <h3 className='text-2xl text-main-color font-bold mb-2'>Pong Game</h3>
                        <p className='text-text-color '>Pong Game based on Python</p>
                    </div>

                    <div className='bg-bg-color p-4 rounded-lg'>
                        <img src={ Calender } alt='Pong Game' className='w-full h-56 object-cover mb-4 rounded-lg' />
                        <h3 className='text-2xl text-main-color font-bold mb-2'>Calender</h3>
                        <p className='text-text-color '>Calender with todolist based on Website</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project