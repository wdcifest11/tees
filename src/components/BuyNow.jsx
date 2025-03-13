import React, { useEffect, useState } from 'react';
import products from '../utils/products';
import { useParams } from 'react-router-dom';
import Logojn from '../assets/jne.jpeg';
import { CheckCheck, Clock, Pencil, ShieldCheck } from 'lucide-react';
import Payment from '../assets/payments.png';

const BuyNow = ({ modalOpen, modalClose }) => {
    const { id } = useParams();
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const allProducts = products.flatMap(category => category.items);
    const product = allProducts.find((item) => item.id === parseInt(id));

    useEffect(() => {
        if (modalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [modalOpen]);

    if (!modalOpen) return null;

    if (!product) {
        return <div className="text-center text-red-500 text-lg">Produk tidak ditemukan</div>;
    }

    const handleProceedToPayment = () => {
        setShowSuccessModal(true);
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false); // Setelah 1 detik, ubah ke tampilan sukses
        }, 4000);

        setTimeout(() => {
            setShowSuccessModal(false);
            modalClose();
        }, 7000);
    };

    return (
        <>
            <div className="fixed inset-0 z-[999999] bg-black/40 bg-opacity-50 flex justify-center items-center p-2">
                <div className="bg-white p-3 sm:p-5 rounded-lg shadow-lg w-full max-w-4xl mx-auto h-[90vh] overflow-y-auto text-xs md:text-sm md:h-auto">
                    <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5'>
                        <div className='w-full md:w-3/5'>
                            <h2 className="text-lg font-semibold mb-3 sm:mb-4">Fast Payment</h2>
                            <div className='space-y-4'>
                                <div className='flex flex-col sm:flex-row gap-3'>
                                    <img src={product.image} alt="" className='h-20 w-30' />
                                    <div>
                                        <p>Name: {product.name}</p>
                                        <p>Quality: Good</p>
                                        <p>Size: {product.size}</p>
                                    </div>
                                </div>
                                <div className='bg-white border border-black/10 p-3 rounded-lg relative'>
                                    <h2 className='mb-5 font-semibold'>My Address</h2>
                                    <p className='md:text-sm max-w-sm'>Jl. Dr.Sukardjo no9 RT12 RW12, Kota Tasikmalaya, Jawa Barat, Indonesia</p>
                                    <div className='absolute top-3 right-3 flex items-center cursor-pointer space-x-1'>
                                        <Pencil className='w-3' />
                                        <p className='text-xs'>Edit</p>
                                    </div>
                                </div>
                                <div className='bg-white border border-black/10 p-3 rounded-lg relative'>
                                    <h2 className='mb-5 font-semibold'>Delivery Details</h2>
                                    <div className='flex flex-col sm:flex-row items-start sm:space-x-3'>
                                        <img src={Logojn} alt="" className='md:h-20 h-10 border mb-3 sm:mb-0 border-black/10' />
                                        <div>
                                            <p className='font-semibold mb-1 sm:mb-0'>$12.44</p>
                                            <p className='flex gap-x-2 text-xs sm:text-sm items-center'><Clock className='w-3' />Home delivery 1-3 days</p>
                                        </div>
                                    </div>
                                </div>
                                <span className='flex items-center space-x-1'>
                                    <ShieldCheck className='w-4' />
                                    <p className='text-xs'>This payment is encrypted and secure</p>
                                </span>
                            </div>
                        </div>

                        <div className='w-full md:w-2/5'>
                            <div className='bg-white border border-black/5 rounded-lg p-4'>
                                <p className='mb-7 font-semibold'>Order Summary</p>
                                <ul className='space-y-4 mb-7'>
                                    <p className='flex justify-between'>Price: <span>${product.price}</span></p>
                                    <p className='flex justify-between'>Buyer Protection fee: <span>$1.30</span></p>
                                    <p className='flex justify-between'>Shipping: <span>$12.44</span></p>
                                    <p className='flex justify-between'>Sales tax: <span>To be confirmed</span></p>
                                </ul>
                                <p className='mb-2'>Payment method:</p>
                                <img src={Payment} alt="" className='h-20 mb-4' />
                                <button className="w-full font-semibold cursor-pointer hover:bg-green-800/80 transition-all duration-300 bg-green text-white py-2 text-sm rounded-lg mb-2" onClick={handleProceedToPayment}>
                                    Proceed to Payment
                                </button>
                                <button className="w-full cursor-pointer hover:bg-gray-100 transition-all duration-300 border border-black/70 text-black/70 py-2 text-sm rounded-lg" onClick={modalClose}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Berhasil */}
            {showSuccessModal && (
                <div className="fixed inset-0 z-[999999] bg-black/40 flex justify-center items-center p-5">
                    <div className="bg-white p-10 rounded-lg shadow-lg flex flex-col items-center text-center w-fit">
                        {isLoading ? (
                            <>
                                <div className="h-10 w-10 border-4 border-gray-300 border-t-green rounded-full animate-spin"></div>
                                <h2 className="text-lg font-semibold mt-4">Processing...</h2>
                                <p className="text-xs">Please wait while we process your payment.</p>
                            </>
                        ) : (
                            <>
                                <CheckCheck className='h-10 w-10 text-green' />
                                <h2 className="text-lg font-semibold mt-3">Success!</h2>
                                <p className="text-xs">Your payment is being processed.</p>
                                <p className="text-xs">See the process on your profile!</p>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default BuyNow;
