import React from 'react'

const Navbar = () => {
    return (
        <nav className='p-5 px-24 bg-bg-color border-b-2 border-b-[rgba(0,0,0,.1)]'>
            <div className='container mx-auto flex justify-between items-center text-text-color'>
                <h1 className="text-2xl font-bold cursor-default">Hikaru's Domain</h1>
                <div className="text-lg">
                    <a href="#home" className='ml-12 hover:text-main-color transition ease-in-out duration-400'>Home</a>
                    <a href="#about" className='ml-12 hover:text-main-color transition ease-in-out duration-400'>About</a>
                    <a href="#skills" className='ml-12 hover:text-main-color transition ease-in-out duration-400'>Skills</a>
                    <a href="#project" className='ml-12 hover:text-main-color transition ease-in-out duration-400'>Project</a>
                </div>
            </div>
      </nav>
    )
}

export default Navbar