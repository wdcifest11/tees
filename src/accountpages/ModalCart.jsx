import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ShoppingBagIcon } from "@heroicons/react/24/outline";


const ModalCart = ({ isOpen, onClose }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            gsap.fromTo(modalRef.current,
                { opacity: 0, y: -50 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
            );
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-[999999] text-black/70">
            <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-lg">
                <div className='flex gap-x-2 items-center mb-3'>
                    <h2 className="text-base font-bold">Added to Cart</h2>
                    <ShoppingBagIcon className='w-6 h-6' />
                </div>
                <p className='text-sm'>Your item has been added to the cart successfully.</p>
                <button
                    onClick={onClose}
                    className="mt-4 cursor-pointer font-bold self-end"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default ModalCart;