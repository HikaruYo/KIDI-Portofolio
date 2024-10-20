import React from 'react'
import Me from '../asset/me.jpg'

const About = () => {
  return (
    <section id='about' className='py-24 bg-bg-color'>
      <div className='container mx-auto text-center px-6'>
        <h2 className='text-4xl font-bold mb-8 text-text-color'>Tentang <span className='text-main-color'>Saya</span></h2>
        
        <div className='flex flex-col items-center mb-12'>
          <img src={ Me } alt='profile' className='w-44 h-44 rounded-3xl object-cover mb-4 shadow-lg' />
          <p className='text-lg text-text-color font-medium'>Web Developer & Backend Developer</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-second-bg-color bg-opacity-70 p-6 rounded-lg shadow-lg hover:bg-opacity-100 transition-colors duration-500'>
            <h3 className='text-2xl font-bold mb-4 text-main-color'>Web Developer</h3>
            <p className='text-text-color mb-4'>
              Backend focused web developer with experience in PHP, JavaScript and React.
            </p>
          </div>

          <div className='bg-second-bg-color bg-opacity-70 p-6 rounded-lg shadow-lg hover:bg-opacity-100 transition-colors duration-500'>
            <h3 className='text-2xl font-bold mb-4 text-main-color'>Backend Developer</h3>
            <p className='text-text-color mb-4'>
              Backend developer that focus on data management on Website using Laravel.
            </p>
          </div>

          <div className='bg-second-bg-color bg-opacity-70 p-6 rounded-lg shadow-lg hover:bg-opacity-100 transition-colors duration-500'>
            <h3 className='text-2xl font-bold mb-4 text-main-color'>Cyber Security</h3>
            <p className='text-text-color mb-4'>
              Cybersecurity enthusiast actively exploring Capture the Flag (CTF) challenges, with a focus on cryptography and reverse engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About