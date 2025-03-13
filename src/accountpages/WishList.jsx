import React, { useState } from 'react';
import { gsap } from 'gsap';
import ModalCart from './ModalCart';

const WishList = ({ displayedProducts }) => {
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
                <h2 className="text-lg font-bold mb-6 text-gray-800">Wishlist</h2>
                <div>
                    <div className="grid grid-cols-1 gap-4">
                        {displayedProducts.map((product) => (
                            <div key={product.id} className="bg-white flex justify-between items-center border p-3 border-black/10 shadow-md rounded-lg">
                                <div className='flex'>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-15 h-15 object-cover rounded-md"
                                    />
                                    <div className="flex flex-col ml-2 text-black/70 text-sm">
                                        <h3 className="font-semibold ">{product.name}</h3>
                                        <p>Merk: {product.brand}</p>
                                        <p className='font-semibold'>${product.price}</p>
                                    </div>
                                </div>
                                <button 
                                    onClick={handleAddToCart} 
                                    className='border h-fit w-fit py-2 px-3 text-sm hover:border-black hover:text-black transition-all duration-300 cursor-pointer rounded-lg shadow-md border-black/40'
                                >
                                    Add to cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <ModalCart isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default WishList;