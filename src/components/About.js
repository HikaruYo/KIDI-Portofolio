import React from 'react'
import Me from '../asset/me.jpg'

const About = () => {
  return (
    <section className='bg-second-bg-color text-text-color flex justify-center items-center gap-8 h-full'>
        <img src={ Me } className='ME w-[400px] rounded-3xl flex mt-40'></img>
    </section>
  )
}

export default About