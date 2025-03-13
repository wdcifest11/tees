import React from 'react';
import Img from '../assets/imgkiri.png';
import Img2 from '../assets/imgtengahatas.png';
import Img3 from '../assets/imgtengahbawah.png';
import Img4 from '../assets/imgkanan.png';

const Hero = () => {
    return (
        <section className='hidden md:flex justify-center items-center w-full bg-white px-3 md:px-3 lg:px-15 pt-20 md:pt-30'>
            <div className='h-auto md:h-[38rem] flex flex-col md:flex-row justify-center items-center gap-4 md:gap-5 w-full overflow-hidden'>
                <img 
                    src={Img} 
                    alt='' 
                    className='rounded-xl w-full md:w-auto md:h-full object-cover max-w-full h-auto' 
                />
                
                <div className='flex flex-col justify-between w-full items-center h-full space-y-4 md:space-y-0'>
                    <img 
                        src={Img2} 
                        alt='' 
                        className='object-cover w-full rounded-xl max-w-full h-auto' 
                    />
                    <div className='text-4xl md:text-6xl flex flex-col space-y-2 justify-center py-1 items-center text-center'>
                        <p className='uppercase text-6xl md:text-6xl text-stroke'>Find UR</p>
                        <p className='uppercase text-6xl md:text-8xl font-semibold text-black/70 font-poppins'>Clothes</p>
                    </div>
                    <img 
                        src={Img3} 
                        alt='' 
                        className='object-cover w-full rounded-xl max-w-full h-auto' 
                    />
                </div>
                
                <img 
                    src={Img4} 
                    alt='' 
                    className='rounded-xl w-full md:w-auto md:h-full object-cover max-w-full h-auto' 
                />
            </div>
        </section>
    );
};

export default Hero;