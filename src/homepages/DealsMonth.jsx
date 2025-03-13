import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageCarousel from '../homepages/ImageCarousel';
import { FaMosque } from 'react-icons/fa';

const DealsMonth = () => {
    const [targetDate] = useState(() => {
        const date = new Date();
        date.setDate(date.getDate() + 2);
        date.setHours(date.getHours() + 8);
        date.setMinutes(date.getMinutes() + 3);
        date.setSeconds(date.getSeconds() + 45);
        return date;
    });

    const calculateTimeLeft = () => {
        const difference = targetDate - new Date();
        if (difference > 0) {
            return {
                day: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hr: Math.floor((difference / (1000 * 60 * 60)) % 24),
                min: Math.floor((difference / 1000 / 60) % 60),
                sec: Math.floor((difference / 1000) % 60),
            };
        }
        return { day: 0, hr: 0, min: 0, sec: 0 };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className='hidden md:flex flex-col md:flex-row justify-center w-full h-full py-10 md:py-20 bg-[#fafafa] px-3 lg:px-15 relative gap-x-3 overflow-hidden'>
            <div className='flex flex-col items-center md:items-start space-y-3 md:space-y-6 text-black/70 md:max-w-[40vw] w-1/2'>
                <p className='text-black/70 font-semibold text-2xl md:text-3xl lg:text-5xl'><FaMosque className='text-green-800/70' />Ramadhan Deals!</p>
                <p className='max-w-sm text-xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit vel magnam necessitatibus eos quae quia deserunt dignissimos obcaecati eveniet nesciunt.</p>
                <p className='text-lg md:text-xl'>Hurry, Before It’s Too Late!</p>
                <div className='flex justify-center lg:justify-start flex-wrap space-x-1 md:space-x-3'>
                    {Object.entries(timeLeft).map(([key, value]) => (
                        <div key={key} className='flex flex-col md:space-y-3 justify-center items-center text-lg md:text-xl'>
                            <div className='w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 text-xl md:text-2xl lg:text-4xl md:shadow-xl bg-white font-semibold border border-black/5 rounded-xl flex justify-center items-center'>
                                <p>{String(value).padStart(2, '0')}</p>
                            </div>
                            <p className='text-xs md:text-sm'>{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-1/2 h-full mt-8 lg:mt-0 z-10'>
                <ImageCarousel />
            </div>
        </section>
    );
};

export default DealsMonth;