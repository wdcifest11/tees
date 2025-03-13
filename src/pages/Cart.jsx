import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../utils/products';
import { Trash2, ShoppingCart, Clock, ShieldCheck, CheckCheck, Pencil } from 'lucide-react';
import Logojn from '../assets/jne.jpeg';
import Payment from '../assets/payments.png';

const Cart = () => {
    const allProducts = products.flatMap(category => category.items);
    const [cartItems, setCartItems] = useState(allProducts.slice(0, 3)); // Hanya mengambil 3 produk untuk contoh
    const [totalPrice, setTotalPrice] = useState(cartItems.reduce((total, item) => total + item.price, 0));
    const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const removeItemFromCart = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        setTotalPrice(updatedCart.reduce((total, item) => total + item.price, 0));
    };

    const handleCheckout = () => {
        setIsCheckoutModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsCheckoutModalOpen(false);
    };

    const handleProceedToPayment = () => {
        setShowSuccessModal(true);
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false); // Setelah 4 detik, ubah ke tampilan sukses
        }, 4000);

        setTimeout(() => {
            setShowSuccessModal(false);
            setIsCheckoutModalOpen(false);
            setCartItems([]); // Kosongkan keranjang setelah checkout
            setTotalPrice(0);
        }, 7000);
    };

    return (
        <section className='pt-20 md:pt-30 px-4 lg:px-16'>
            <div className='flex gap-x-3 items-center mb-8 mt-6'>
                <Link to="/" className='text-lg cursor-pointer text-gray-600 hover:text-gray-900'>
                    Home
                </Link>
                <p className="text-gray-600">›</p>
                <h2 className="text-lg font-semibold text-gray-900">Cart</h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Daftar Produk di Cart */}
                <div className="lg:w-2/3">
                    {cartItems.map((product) => (
                        <div key={product.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 mb-4">
                            <div className="flex flex-col md:flex-row gap-6">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full md:w-32 h-32 object-cover rounded-lg"
                                />
                                <div className="flex-1">
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-semibold text-gray-800 text-lg">{product.name}</h3>
                                        <button onClick={() => removeItemFromCart(product.id)} className="text-gray-500 hover:text-red-500 transition-colors duration-200">
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                    <p className="text-gray-500 text-sm mt-1">{product.brand}</p>
                                    <p className="text-gray-600 text-sm mt-2">{product.description}</p>
                                    <div className="flex justify-between items-center mt-4">
                                        <p className="text-xl text-gray-800 font-semibold">${product.price}</p>
                                        <p className="text-green-600 text-sm">{product.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Ringkasan Belanja */}
                <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">Order Summary</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <p className="text-gray-600">Subtotal</p>
                            <p className="font-semibold text-gray-800">${totalPrice.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-600">Shipping</p>
                            <p className="font-semibold text-gray-800">$5.00</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-600">Tax</p>
                            <p className="font-semibold text-gray-800">${(totalPrice * 0.1).toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between border-t pt-4">
                            <p className="text-gray-600 font-semibold">Total</p>
                            <p className="font-semibold text-gray-800">${(totalPrice + 5 + (totalPrice * 0.1)).toFixed(2)}</p>
                        </div>
                    </div>
                    <button 
                        onClick={handleCheckout} 
                        className="w-full bg-green text-white py-3 rounded-lg mt-6 hover:bg-green-800/80 transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                        <ShoppingCart className="w-5 h-5" />
                        <span>Checkout</span>
                    </button>
                </div>
            </div>

            {/* Modal Checkout */}
            {isCheckoutModalOpen && (
                <div className="fixed inset-0 z-[999999] bg-black/40 flex justify-center items-center p-2">
                    <div className="bg-white p-3 sm:p-5 rounded-lg shadow-lg w-full max-w-4xl mx-auto h-[90vh] overflow-y-auto text-xs md:text-sm md:h-auto">
                        <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5'>
                            <div className='w-full md:w-3/5'>
                                <h2 className="text-lg font-semibold mb-3 sm:mb-4">Fast Payment</h2>
                                <div className='space-y-4'>
                                    {cartItems.map((product) => (
                                        <div key={product.id} className='flex flex-col sm:flex-row gap-3'>
                                            <img src={product.image} alt="" className='h-20 w-30' />
                                            <div>
                                                <p>Name: {product.name}</p>
                                                <p>Quality: Good</p>
                                                <p>Size: {product.size}</p>
                                            </div>
                                        </div>
                                    ))}
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
                                        <p className='flex justify-between'>Price: <span>${totalPrice.toFixed(2)}</span></p>
                                        <p className='flex justify-between'>Buyer Protection fee: <span>$1.30</span></p>
                                        <p className='flex justify-between'>Shipping: <span>$12.44</span></p>
                                        <p className='flex justify-between'>Sales tax: <span>To be confirmed</span></p>
                                    </ul>
                                    <p className='mb-2'>Payment method:</p>
                                    <img src={Payment} alt="" className='h-20 mb-4' />
                                    <button 
                                        className="w-full font-semibold cursor-pointer hover:bg-green-800/80 transition-all duration-300 bg-green text-white py-2 text-sm rounded-lg mb-2" 
                                        onClick={handleProceedToPayment}
                                    >
                                        Proceed to Payment
                                    </button>
                                    <button 
                                        className="w-full cursor-pointer hover:bg-gray-100 transition-all duration-300 border border-black/70 text-black/70 py-2 text-sm rounded-lg" 
                                        onClick={handleCloseModal}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

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
        </section>
    );
};

export default Cart;