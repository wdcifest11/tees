import React from "react";

const EduShop = () => {
    return (
        <div className="w-full lg:px-15 px-3 lg:py-20 py-10 bg-[#fafafa]">
            <div className="flex flex-col lg:flex-row text-xs text-start gap-10">
                <div className="lg:w-1/2">
                    <h1 className="text-sm font-bold text-gray-800 mb-4">
                        Edukasi Fashion Berkelanjutan
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Fashion berkelanjutan adalah pendekatan dalam industri mode yang
                        menitikberatkan pada dampak lingkungan dan sosial dalam setiap tahap
                        produksinya. Dengan meningkatnya kesadaran akan dampak negatif
                        industri fashion, banyak brand dan desainer mulai mengadopsi praktik
                        yang lebih ramah lingkungan.
                    </p>
                    <h2 className="font-semibold text-gray-700 mb-3">
                        Mengapa Fashion Berkelanjutan Penting?
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Industri fashion merupakan salah satu penyumbang polusi terbesar di
                        dunia. Dari penggunaan bahan kimia beracun, limbah tekstil, hingga
                        eksploitasi tenaga kerja, dampaknya sangat luas. Fashion berkelanjutan
                        hadir sebagai solusi dengan memanfaatkan bahan ramah lingkungan,
                        mendukung etika kerja yang adil, serta mengurangi limbah dengan model
                        produksi yang lebih efisien.
                    </p>
                    <h2 className="font-semibold text-gray-700 mb-3">
                        Cara Mendukung Fashion Berkelanjutan
                    </h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Membeli produk dari brand yang memiliki komitmen terhadap lingkungan.</li>
                        <li>Memilih bahan alami dan daur ulang.</li>
                        <li>Mendukung konsep slow fashion dengan mengurangi pembelian pakaian berlebihan.</li>
                        <li>Mendaur ulang dan mendonasikan pakaian yang tidak terpakai.</li>
                    </ul>
                    <p className="text-gray-600 mt-6">
                        Dengan langkah-langkah kecil, kita bisa turut berkontribusi dalam
                        menjaga keberlanjutan industri fashion demi masa depan yang lebih
                        baik.
                    </p>
                </div>
                <div className="lg:w-1/2 flex flex-col justify-center items-center space-y-5">
                    <div className="bg-[#fafafa] p-6 rounded-lg shadow-md">
                        <h3 className="font-semibold text-black/70">Tahukah Kamu?</h3>
                        <p className="text-black/70 text-xs mt-2">
                            Dibutuhkan sekitar 2.700 liter air untuk membuat satu kaos katun, 
                            setara dengan kebutuhan air minum seseorang selama lebih dari 2 tahun!
                        </p>
                    </div>
                    <div className="bg-[#fafafa] p-6 rounded-lg shadow-md">
                        <h3 className="font-semibold text-black/70">Fakta Menarik</h3>
                        <p className="text-black/70 text-xs mt-2">
                            Hanya 1% pakaian bekas yang benar-benar didaur ulang menjadi pakaian baru. 
                            Oleh karena itu, penting untuk membeli pakaian dengan bijak.
                        </p>
                    </div>
                    <div className="bg-[#fafafa] p-6 rounded-lg shadow-md">
                        <h3 className="font-semibold text-black/70">Dampak Limbah Tekstil</h3>
                        <p className="text-black/70 text-xs mt-2">
                            Setiap tahun, lebih dari 92 juta ton limbah tekstil dihasilkan secara global. 
                            Sebagian besar dari limbah ini berakhir di tempat pembuangan sampah.
                        </p>
                    </div>
                    <div className="bg-[#fafafa] p-6 rounded-lg shadow-md">
                        <h3 className="font-semibold text-black/70">Jejak Karbon Industri Fashion</h3>
                        <p className="text-black/70 text-xs mt-2">
                            Industri fashion menyumbang sekitar 10% dari emisi karbon global, 
                            lebih besar dari total emisi penerbangan dan pelayaran digabungkan!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EduShop;
