import React, { useEffect, useState, useRef } from 'react';
import products from '../utils/products';
import { useNavigate, useParams } from 'react-router-dom';
import { X } from 'lucide-react';
import gsap from 'gsap';

const Offering = ({ offeringOpen, offeringClose }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const allProducts = products.flatMap(category => category.items);
    const product = allProducts.find((item) => item.id === parseInt(id));

    const [customPrice, setCustomPrice] = useState(8.00);
    const [selectedOption, setSelectedOption] = useState(null);
    const originalPrice = product?.price;
    const tenPercentOff = (originalPrice * 0.9).toFixed(2);
    const twentyPercentOff = (originalPrice * 0.8).toFixed(2);
    const modalRef = useRef(null);

    useEffect(() => {
        if (offeringOpen) {
            document.body.style.overflow = 'hidden';
            gsap.fromTo(modalRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [offeringOpen]);

    const handleOfferClick = () => {
        offeringClose(); 
        navigate(`/offer/${product.id}`); // Ganti '/success' dengan path tujuan
    };

    if (!offeringOpen) return null;
    if (!product) {
        return <div className="text-center text-red-500 text-lg">Produk tidak ditemukan</div>;
    }


    return (
        <div className="fixed inset-0 z-[999999] bg-black/40 bg-opacity-50 flex justify-center items-center p-2">
            <div ref={modalRef} className="w-96 bg-white rounded-xl p-4 md:p-8 shadow-lg relative">
                <button className="absolute top-3 right-3" onClick={() => {
                    gsap.to(modalRef.current, { opacity: 0, y: -50, duration: 0.3, ease: 'power2.in', onComplete: offeringClose });
                }}>
                    <X className="w-5 h-5 cursor-pointer" />
                </button>
                <div className="text-sm md:text-base">
                    <h2 className="text-lg font-semibold">Make an offer</h2>
                    <div className="flex items-center space-x-3 mt-3">
                        <img src={product.image} alt="Shirt" className="w-25 h-20 object-cover rounded" />
                        <div className="text-left">
                            <p className="text-sm font-medium">{product.name}</p>
                            <p className="text-xs text-gray-500">Item price: ${product.price}</p>
                        </div>
                    </div>
                    <p className='text-xs mt-4'>Select an option</p>
                    <div className="grid grid-cols-3 gap-2 mt-1">
                        <button
                            className={`border px-4 py-2 rounded-lg cursor-pointer text-sm hover:bg-gray-100 transition-all duration-300 ${selectedOption === tenPercentOff ? 'border-green border-2' : ''}`}
                            onClick={() => { setCustomPrice(tenPercentOff); setSelectedOption(tenPercentOff); }}>
                            ${tenPercentOff}
                            <span className="text-xs text-gray-500 block">10% off</span>
                        </button>
                        <button
                            className={`border px-4 py-2 rounded-lg cursor-pointer text-sm hover:bg-gray-100 transition-all duration-300 ${selectedOption === twentyPercentOff ? 'border-green border-2' : ''}`}
                            onClick={() => { setCustomPrice(twentyPercentOff); setSelectedOption(twentyPercentOff); }}>
                            ${twentyPercentOff}
                            <span className="text-xs text-gray-500 block">20% off</span>
                        </button>
                        <button
                            className={`border px-4 py-2 rounded-lg cursor-pointer text-sm hover:bg-gray-100 transition-all duration-300 ${selectedOption === 'custom' ? 'border-green border-2' : ''}`}
                            onClick={() => setSelectedOption('custom')}>
                            Custom
                            <span className="text-xs text-gray-500 block">Set a price</span>
                        </button>
                    </div>
                    {selectedOption && selectedOption !== 'custom' && (
                        <p className="text-sm text-green-500 my-2">You selected {selectedOption === tenPercentOff ? '10%' : '20%'} discount.</p>
                    )}
                    {selectedOption === 'custom' && (
                        <div className="mt-3">
                            <label className="text-xs text-gray-500">Enter your custom offer:</label>
                            <input
                                type="number"
                                className="w-full text-center border rounded-lg p-2 mt-1"
                                value={customPrice}
                                onChange={(e) => setCustomPrice(e.target.value)}
                            />
                        </div>
                    )}
                    <p className="text-xs text-gray-500 mt-2">$9.10 incl. Buyer Protection fee</p>
                    <button
                        className="w-full mt-4 bg-green font-semibold text-white py-2 rounded-lg hover:bg-green-800/80 cursor-pointer transition"
                        onClick={handleOfferClick}>
                        Offer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Offering;
