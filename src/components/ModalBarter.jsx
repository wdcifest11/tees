import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import products from '../utils/products';
import { useParams, useNavigate } from 'react-router-dom'; // Ganti useHistory dengan useNavigate

const ModalBarter = ({ isBarter, barterClose }) => {
    const { id } = useParams();
    const navigate = useNavigate(); // Gunakan useNavigate
    const allProducts = products.flatMap(category => category.items);
    const product = allProducts.find((item) => item.id === parseInt(id));
    
    const [userProduct, setUserProduct] = useState({
        name: '',
        image: null,
        brand: '',
        size: '',
        location: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const modalRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserProduct({ ...userProduct, [name]: value });
    };
    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUserProduct({ ...userProduct, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(userProduct).some(value => value === '' || value === null)) {
            alert('Harap isi semua bidang sebelum mengajukan barter.');
            return;
        }

        setIsLoading(true);

        // Simulasi proses loading selama 3 detik
        setTimeout(() => {
            setIsLoading(false);
            navigate(`/barter/${product.id}`); // Gunakan navigate untuk mengarahkan ke halaman lain
        }, 3000);
    };
    
    useEffect(() => {
        document.body.style.overflow = isBarter ? 'hidden' : 'auto';
        return () => { document.body.style.overflow = 'auto'; };
    }, [isBarter]);

    useEffect(() => {
        if (isBarter) {
            gsap.from(modalRef.current, {
                duration: 0.5,
                opacity: 0,
                y: 50,
                ease: 'power3.out'
            });
        } else {
            gsap.to(modalRef.current, {
                duration: 0.3,
                opacity: 0,
                y: -50,
                ease: 'power3.in',
                onComplete: barterClose
            });
        }
    }, [isBarter, barterClose]);

    if (!isBarter || !product) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4 sm:px-6 md:px-8">
            <div ref={modalRef} className="bg-white rounded-lg shadow-2xl w-full max-w-3xl mx-4 my-8 overflow-hidden flex flex-col max-h-[90vh]">
                {/* Header */}
                <div className="p-6 border-b border-gray-200">
                    <h2 className="text-lg font-bold text-gray-900">Apply Barter</h2>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 text-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Produk yang akan dibarter */}
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-semibold text-sm mb-4 text-gray-800">Product to be traded:</h3>
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
                            <div className="space-y-2 text-gray-700">
                                <p><strong>Name:</strong> {product.name}</p>
                                <p><strong>Price:</strong> ${product.price}</p>
                                <p><strong>Brand:</strong> {product.brand}</p>
                                <p><strong>Size:</strong> {product.size}</p>
                                <p><strong>Location:</strong> {product.location}</p>
                            </div>
                        </div>

                        {/* Form Produk Anda */}
                        <div className="p-6 text-sm">
                            <h3 className="font-semibold text-lg mb-4 text-gray-800">Your Product</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Nama Produk */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Name Product</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Contoh: Sepatu Sneakers"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none "
                                        value={userProduct.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Upload Gambar */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
                                    <div className="flex items-center justify-center w-full">
                                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 p-3">
                                            {userProduct.image ? (
                                                <img src={userProduct.image} alt="Preview" className="w-full h-full object-cover rounded-lg" />
                                            ) : (
                                                <div className="flex flex-col items-center text-center justify-center pt-5 pb-6">
                                                    <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                                    </svg>
                                                    <p className="text-sm text-gray-500"><span className="font-semibold">Click for upload</span> or drag and drop</p>
                                                    <p className="text-xs text-gray-500">SVG, PNG, JPG (MAX. 800x400px)</p>
                                                </div>
                                            )}
                                            <input type="file" name="image" accept="image/*" className="hidden" onChange={handleImageChange} required />
                                        </label>
                                    </div>
                                </div>

                                {/* Brand, Size, dan Lokasi */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
                                        <input
                                            type="text"
                                            name="brand"
                                            placeholder="Contoh: Nike"
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none "
                                            value={userProduct.brand}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Size</label>
                                        <input
                                            type="text"
                                            name="size"
                                            placeholder="Contoh: 42"
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none "
                                            value={userProduct.size}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                    <input
                                        type="text"
                                        name="location"
                                        placeholder="Contoh: Jakarta"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none "
                                        value={userProduct.location}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Tombol Submit */}
                                <button
                                    type="submit"
                                    className="w-full bg-green text-white py-3 rounded-lg hover:bg-green-800/80 transition duration-300"
                                >
                                    Apply Barter
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-200 flex justify-end">
                    <button
                        onClick={barterClose}
                        className="text-sm text-red-600 hover:text-red-900 hover:underline"
                    >
                        Cancel
                    </button>
                </div>
            </div>

            {/* Modal Loading */}
            {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="bg-white p-8 rounded-lg shadow-2xl flex flex-col items-center">
                        <svg className="animate-spin h-12 w-12 text-green mb-4" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
                            <path fill="currentColor" d="M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"/>
                        </svg>
                        <p className="text-gray-700">Processing your request...</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalBarter;