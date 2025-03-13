import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { CheckCheck } from 'lucide-react';

const Address = () => {
    const [formData, setFormData] = useState({
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        country: ''
    });

    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simpan data alamat (bisa diintegrasikan dengan API atau state management)
        console.log('Address saved:', formData);
        setShowModal(true);
        animateModalIn();
        setTimeout(() => {
            animateModalOut();
            setShowModal(false);
        }, 2000); // Modal akan menutup otomatis setelah 2 detik
    };

    const animateModalIn = () => {
        gsap.fromTo(modalRef.current, 
            { opacity: 0, y: -50 }, 
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
        );
    };

    const animateModalOut = () => {
        gsap.to(modalRef.current, 
            { opacity: 0, y: -50, duration: 0.5, ease: 'power2.in', onComplete: () => setShowModal(false) }
        );
    };

    return (
        <div className="flex w-full">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full">
                <h2 className="text-lg font-bold mb-6 text-gray-800">Shipping Address</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-black/70 text-sm  mb-2" htmlFor="streetAddress">
                            Street Address
                        </label>
                        <input
                            type="text"
                            id="streetAddress"
                            name="streetAddress"
                            value={formData.streetAddress}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border-b border-black/50 focus:outline-none "
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-9 mb-4">
                        <div>
                            <label className="block text-black/70 text-sm  mb-2" htmlFor="city">
                                City
                            </label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border-b border-black/50 focus:outline-none "
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-black/70 text-sm  mb-2" htmlFor="state">
                                State
                            </label>
                            <input
                                type="text"
                                id="state"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border-b border-black/50 focus:outline-none "
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-9 mb-4">
                        <div>
                            <label className="block text-black/70 text-sm  mb-2" htmlFor="zipCode">
                                Zip Code
                            </label>
                            <input
                                type="text"
                                id="zipCode"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border-b border-black/50 focus:outline-none "
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-black/70 text-sm  mb-2" htmlFor="country">
                                Country
                            </label>
                            <input
                                type="text"
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border-b border-black/50 focus:outline-none "
                                required
                            />
                        </div>
                    </div>

                    <div className="flex justify-end text-sm">
                        <button
                            type="submit"
                            className="border-black/30 border transition-all duration-300 cursor-pointer hover:border-black text-black/70 hover:text-black font-semibold  py-2 px-4 rounded-lg focus:outline-none"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>

                {showModal && (
                    <div className="fixed inset-0 z-[9999999999] flex items-center justify-center bg-black/40">
                        <div ref={modalRef} className="bg-white p-8 rounded-lg flex flex-col justify-center items-center shadow-lg max-w-[300px]">
                            <CheckCheck className='w-10 h-10 text-green mb-2' />
                            <p className="text-sm font-semibold text-gray-800 text-center">Address saved successfully!</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Address;