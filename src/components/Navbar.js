import React from 'react'

const Navbar = () => {
    return (
        <nav className='p-8 bg-bg-color border-b-2 border-b-[rgba(0,0,0,.1)]'>
            <div className='container mx-auto flex justify-between items-center text-text-color'>
                <h1 className="text-3xl font-bold cursor-default">Hikaru's Domain</h1>
                <div className="text-2xl">
                    <a href="#home" className='ml-16 hover:text-main-color transition duration-300'>Home</a>
                    <a href="#about" className='ml-16 hover:text-main-color transition duration-300'>About</a>
                    <a href="#skills" className='ml-16 hover:text-main-color transition duration-300'>Skills</a>
                    <a href="#project" className='ml-16 hover:text-main-color transition duration-300'>Project</a>
                </div>
            </div>
      </nav>
    )
}

export default Navbar