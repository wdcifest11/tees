import React, { useEffect, useState } from 'react';
import Logo from '../assets/tees.png'

const GetStartedModal = ({ isOpen, onClose }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4 sm:px-6 md:px-8">
      <div className="bg-white py-10 p-5 md:p-8 rounded-lg shadow-xl max-w-md sm:max-w-lg w-full flex flex-col items-center max-h-[90vh] overflow-y-auto">
        <img src={Logo} alt="" className='w-25 mb-4' />
        <p className="text-gray-600 leading-relaxed text-start mb-4 text-xs md:text-sm">
          Di era modern ini, kesadaran akan fashion berkelanjutan semakin meningkat. Industri pakaian bekas kini menjadi solusi bagi mereka yang ingin tampil stylish tanpa mengorbankan lingkungan.
        </p>
        <p className="text-gray-600 leading-relaxed text-start mb-4 text-xs md:text-sm">
          Platform ini tidak hanya tempat jual beli pakaian bekas, tetapi juga wadah edukasi tentang pentingnya fashion berkelanjutan. Dengan konsep circular fashion, setiap pengguna dapat memberikan kehidupan baru bagi pakaian mereka.
        </p>
        <p className="text-gray-600 leading-relaxed text-start mb-6 text-xs md:text-sm">
          Selain manfaat lingkungan, platform ini juga membuka peluang bisnis bagi individu dan pelaku usaha kecil dengan sistem transaksi yang transparan dan pengalaman belanja yang menyenangkan.
        </p>
        <div className="flex flex-wrap self-start gap-2 mb-4">
          <input
            type="checkbox"
            id="agreement"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-500"
          />
          <label htmlFor="agreement" className="text-gray-700 text-xs flex gap-x-2">
            Saya menyetujui 
          </label>
          <p className="text-blue-500 underline text-xs">syarat & ketentuan</p>
        </div>
        <button
          onClick={onClose}
          disabled={!isChecked}
          className={`px-4 py-2 text-sm sm:px-6 sm:py-3 cursor-pointer duration-300 text-white font-semibold rounded-lg w-full transition-all ${isChecked ? 'bg-[#3D9970] hover:bg-green-800/80' : 'bg-black/30 cursor-not-allowed'}`}
        >
          Get started
        </button>
      </div>
    </div>
  );
};

export default GetStartedModal;
