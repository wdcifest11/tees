import React, { useEffect, useRef } from 'react';
import Img5 from '../assets/logo.png';
import Img6 from '../assets/logo1.png';
import Img7 from '../assets/logo2.png';
import Img8 from '../assets/logo3.png';
import Img9 from '../assets/logo4.png';
import gsap from 'gsap';

const LogoCarousel = () => {
    const marqueeRef = useRef(null);
    const tweenRef = useRef(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        const clone = marquee.innerHTML;
        marquee.innerHTML += clone + clone + clone + clone + clone; // Duplicate content for seamless loop

        tweenRef.current = gsap.to(marquee, {
            x: "-50%", // Move halfway to create an infinite loop
            duration: 30,
            ease: "linear",
            repeat: -1,
        });
    }, []);

    const handleMouseEnter = () => {
        gsap.to(tweenRef.current, { timeScale: 0.2, duration: 0.5, ease: "power4.out" }); // Gradual slow down
    };

    const handleMouseLeave = () => {
        gsap.to(tweenRef.current, { timeScale: 1 }); // Gradual speed up
    };

    return (
        <div className='px-3 lg:px-0 w-full mx-auto'>
            <div className="overflow-hidden bg-white py-10 md:py-12" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div ref={marqueeRef} className="flex space-x-6 sm:space-x-8 md:space-x-10 whitespace-nowrap">
                    <img src={Img5} alt="Logo 1" className="w-24 sm:w-28 md:w-32 h-auto" />
                    <img src={Img6} alt="Logo 2" className="w-24 sm:w-28 md:w-32 h-auto" />
                    <img src={Img7} alt="Logo 3" className="w-24 sm:w-28 md:w-32 h-auto" />
                    <img src={Img8} alt="Logo 4" className="w-24 sm:w-28 md:w-32 h-auto" />
                    <img src={Img9} alt="Logo 5" className="w-24 sm:w-28 md:w-32 h-auto" />
                </div>
            </div>
        </div>
    );
};

export default LogoCarousel;
