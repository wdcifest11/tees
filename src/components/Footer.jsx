import React from 'react';
import Logo from '../assets/lorem.png';
import Pay from '../assets/payments.png';

const Footer = () => {
    return (
        <div className='relative w-full bg-white pb-20 lg:pb-0'>
            <div className='py-10 px-5 md:px-10 lg:px-15 text-sm text-black/70 flex flex-col md:flex-row justify-center'>
                <div className='flex flex-col md:flex-row justify-between gap-10 w-full'>
                    {/* Logo & Payments */}
                    <div className='flex flex-col w-full md:w-1/3'>
                        <h1 className='text-4xl font-black'>TEES</h1>
                        <p className='border-b border-b-black/40 pb-3 w-fit mb-4'>Supported Payments:</p>
                        <img src={Pay} alt="Payments" className='w-40 md:w-fit grayscale' />
                    </div>

                    {/* Store Section */}
                    <div className='flex flex-col gap-y-4 w-full md:w-1/3'>
                        <p className='font-semibold'>Store</p>
                        <hr className='opacity-40' />
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='flex flex-col gap-2'>
                                <p>Designers</p>
                                <p>Tops</p>
                                <p>Collections</p>
                                <p>Texture</p>
                                <p>Sales</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p>Prints</p>
                                <p>Silk Edition</p>
                                <p>Brands</p>
                                <p>Demos</p>
                                <p>Showroom</p>
                            </div>
                        </div>
                    </div>

                    {/* Categories Section */}
                    <div className='flex flex-col gap-y-4 w-full md:w-1/3'>
                        <p className='font-semibold'>Categories</p>
                        <hr className='opacity-40' />
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='flex flex-col gap-2'>
                                <p>Designers</p>
                                <p>Tops</p>
                                <p>Collections</p>
                                <p>Texture</p>
                                <p>Sales</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p>Prints</p>
                                <p>Silk Edition</p>
                                <p>Brands</p>
                                <p>Demos</p>
                                <p>Showroom</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Bottom */}
            <div className='w-full px-5 md:px-10 lg:px-15 flex flex-col items-center py-4'>
                <hr className='w-full opacity-40' />
                <p className='text-center text-sm mt-4 text-black/70'><strong>&copy;2025 TEES.</strong> All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;