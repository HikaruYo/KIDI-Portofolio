import React from 'react'

const Footer = () => {
    return (
        <section className='bg-second-bg-color text-text-color py-6'>
            <div className='container mx-auto text-center'>
                <p className='text-sm'>&copy; { new Date().getFullYear() } Adithya Prasetio Hutahaean. All right reserved</p>
            </div>
        </section>
    )
}

export default Footer