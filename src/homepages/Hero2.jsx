import React from 'react';
import VideoHero from '../assets/videohero.mp4';
import ImageHero from '../assets/imgvid.jpg';

const Hero2 = () => {
    return (
        <section className='pt-20 md:pt-30'>
            <div className='w-full relative flex flex-col-reverse justify-center items-center md:flex-row-reverse h-[60vh] lg:h-screen overflow-hidden'>
                <div className='md:w-1/2 w-full h-full'>
                    <img src={ImageHero} alt="" className="w-full h-full object-cover grayscale" />
                </div>
                <video className='md:w-1/2 w-full' muted playsInline autoPlay loop>
                    <source src={VideoHero} type='video/mp4' className='w-full h-auto object-cover' />
                </video>
                <div className=' absolute z-10 bottom-1/2 flex justify-center items-center flex-col gap-2'>
                    <h1 className='z-10 text-white text-3xl sm:text-5xl md:text-7xl font-bold'>FIND UR CLOTHES</h1>
                    <button className='z-10 text-white text-sm font-bold underline'>Shop Now</button>
                </div>
                <div className='w-screen h-screen bg-black/50 absolute '></div>
            </div>

        </section>
    );
}

export default Hero2;