import React, { useState } from 'react';

const Barter = ({ displayedProducts }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showBarterModal, setShowBarterModal] = useState(false);
    const [barterStep, setBarterStep] = useState(1);

    const handleViewDetail = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    const handleAccept = () => {
        setShowBarterModal(true);
    };

    const handleNextStep = () => {
        if (barterStep < 3) {
            setBarterStep(barterStep + 1);
        } else {
            setShowBarterModal(false);
            setSelectedProduct(false)
            setBarterStep(1);
        }
    };

    return (
        <div className='flex w-full'>
            <div className='bg-white p-8 rounded-lg shadow-lg w-full'>
                <h2 className="text-lg font-bold mb-6 text-gray-800">Barter History</h2>
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
                                        <p className={`text-sm font-semibold ${product.status === 'Completed' ? 'text-green-500' : product.status === 'Rejected' ? 'text-red-500' : 'text-yellow-500'}`}>
                                            Status: {product.status}
                                        </p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <img
                                        src={product.offeredProduct.image}
                                        alt={product.offeredProduct.name}
                                        className="w-15 h-15 object-cover rounded-md"
                                    />
                                    <div className="flex flex-col ml-2 text-black/70 text-sm">
                                        <h3 className="font-semibold ">{product.offeredProduct.name}</h3>
                                        <p>Merk: {product.offeredProduct.brand}</p>
                                        <p className='font-semibold'>${product.offeredProduct.price}</p>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => handleViewDetail(product)}
                                    className='border h-fit w-fit py-2 px-3 text-sm hover:border-black hover:text-black transition-all duration-300 cursor-pointer rounded-lg shadow-md border-black/40'
                                >
                                    View Detail
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {selectedProduct && (
                <div className="fixed inset-0 bg-black/40 z-[999999999] flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                        <h2 className="text-lg font-bold mb-4">Barter Detail</h2>
                        <div className="flex">
                            <img
                                src={selectedProduct.image}
                                alt={selectedProduct.name}
                                className="w-20 h-20 object-cover rounded-md"
                            />
                            <div className="flex flex-col ml-4">
                                <h3 className="font-semibold">{selectedProduct.name}</h3>
                                <p>Merk: {selectedProduct.brand}</p>
                                <p className='font-semibold'>${selectedProduct.price}</p>
                                <p className={`text-sm font-semibold ${selectedProduct.status === 'Completed' ? 'text-green-500' : selectedProduct.status === 'Rejected' ? 'text-red-500' : 'text-yellow-500'}`}>
                                    Status: {selectedProduct.status}
                                </p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h3 className="font-semibold">Offered Product:</h3>
                            <div className="flex mt-2">
                                <img
                                    src={selectedProduct.offeredProduct.image}
                                    alt={selectedProduct.offeredProduct.name}
                                    className="w-20 h-20 object-cover rounded-md"
                                />
                                <div className="flex flex-col ml-4">
                                    <h3 className="font-semibold">{selectedProduct.offeredProduct.name}</h3>
                                    <p>Merk: {selectedProduct.offeredProduct.brand}</p>
                                    <p className='font-semibold'>${selectedProduct.offeredProduct.price}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button 
                                onClick={closeModal}
                                className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2"
                            >
                                Close
                            </button>
                            {selectedProduct.status === 'Pending' && (
                                <>
                                    <button 
                                        onClick={handleAccept}
                                        className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2"
                                    >
                                        Accept
                                    </button>
                                    <button 
                                        className="bg-red-500 text-white px-4 py-2 rounded-lg"
                                    >
                                        Reject
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
            {showBarterModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[9999999999999999999]">
                    <div className="bg-white rounded-lg shadow-2xl w-full max-w-md mx-4 p-6">
                        <h2 className="text-lg font-bold mb-4">Proses Barter</h2>

                        {/* Langkah 1: Konfirmasi Barter */}
                        {barterStep === 1 && (
                            <div className="space-y-4">
                                <p className="text-sm text-gray-700">Anda akan menukar:</p>
                                <div className="flex gap-4">
                                    <img src={selectedProduct.image} alt={selectedProduct.name} className="w-20 h-20 object-cover rounded-lg" />
                                    <img src={selectedProduct.offeredProduct.image} alt={selectedProduct.offeredProduct.name} className="w-20 h-20 object-cover rounded-lg" />
                                </div>
                                <div className="text-sm text-gray-700">
                                    <p><strong>Produk Anda:</strong> {selectedProduct.offeredProduct.name}</p>
                                    <p><strong>Produk Penjual:</strong> {selectedProduct.name}</p>
                                </div>
                                <p className="text-sm text-gray-700">Pastikan detail barter sudah benar sebelum melanjutkan.</p>
                            </div>
                        )}

                        {/* Langkah 2: Pembayaran (Opsional) */}
                        {barterStep === 2 && (
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <p className="text-sm text-gray-700">Biaya tambahan: <strong>$5</strong> (ongkir dan biaya admin)</p>
                                </div>
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <p className="text-sm text-gray-700">Silakan lakukan pembayaran ke rekening berikut:</p>
                                    <p className="text-sm font-mono text-gray-900">1234 5678 9012 3456 (BCA)</p>
                                </div>
                                <p className="text-sm text-gray-700">Konfirmasi pembayaran setelah transfer.</p>
                            </div>
                        )}

                        {/* Langkah 3: Pengiriman */}
                        {barterStep === 3 && (
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <p className="text-sm text-gray-700">Proses pengiriman akan segera dimulai.</p>
                                </div>
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <p className="text-sm text-gray-700">Silakan kirim produk Anda ke alamat berikut:</p>
                                    <p className="text-sm font-mono text-gray-900">Jl. Contoh No. 123, Jakarta</p>
                                </div>
                                <p className="text-sm text-gray-700">Anda akan menerima notifikasi ketika produk sudah dikirim.</p>
                            </div>
                        )}

                        {/* Tombol Aksi */}
                        <div className="mt-6 flex justify-end gap-2">
                            {barterStep > 1 && (
                                <button
                                    onClick={() => setBarterStep(barterStep - 1)}
                                    className="px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
                                >
                                    Kembali
                                </button>
                            )}
                            <button
                                onClick={handleNextStep}
                                className="px-4 py-2 text-sm text-white bg-green-500 rounded-lg hover:bg-green-600"
                            >
                                {barterStep === 3 ? "Selesai" : "Lanjut"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Barter;