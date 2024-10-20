import React from 'react'

const Contact = () => {
    return (
        <section id='contact' className='py-24 bg-bg-color'>
            <div className='container mx-auto px-6 text-center'>
                <h2 className='text-4xl font-bold text-text-color mb-8'>Contact <span className='text-main-color'>Me</span></h2>
                <p className='text-1xl mb-4 text-text-color'>Contact me on :</p>
                <div className='grid gap-4 items-center justify-center'>
                    <a href='https://instagram.com/adithaean' className='text-main-color text-2xl font-semibold bg-second-bg-color py-2 px-4 w-40 rounded-lg'>Instagram</a>
                    <a href='mailto:adithaean@gmail.com' className='text-main-color text-2xl font-semibold bg-second-bg-color py-2 px-4 w-40 rounded-lg'>Email</a>
                </div>
            </div>
        </section>
    )
}

export default Contact