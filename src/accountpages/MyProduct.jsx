import React, { useState } from 'react';
import { gsap } from 'gsap';
import ModalCart from './ModalCart';

const MyProduct = ({ displayedProducts }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddToCart = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='flex w-full'>
            <div className='bg-white p-8 rounded-lg shadow-lg w-full'>
                <h2 className="text-lg font-bold mb-6 text-gray-800">My Product</h2>
                <div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 md:gap-3 gap-2">
                        {displayedProducts.map((product) => (
                            <div key={product.id} className="bg-white md:p-4 rounded-2xl shadow-lg border border-black/10">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-auto object-cover rounded-md md:mb-4 mb-2"
                                />
                                <div className="flex justify-between items-center px-2 md:px-0">
                                    <h3 className="font-semibold text-black/70 md:text-lg text-sm">{product.name}</h3>
                                </div>
                                <p className="px-2 md:px-0 text-gray-500 text-xs md:text-sm">{product.brand}</p>
                                <div className="flex justify-between mt-2 md:mt-5 px-2 md:px-0 items-center">
                                    <p className="md:text-xl mb-2 md:mb-0 text-sm text-black/70 font-semibold md:mt-2">${product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <ModalCart isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default MyProduct;