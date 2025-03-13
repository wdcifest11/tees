import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// SVG Icons
const icons = {
  buy: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  ),
  eco: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  clock: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  recycle: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  wash: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
};

const tips = [
  {
    title: 'Beli Pakaian Bekas',
    fact: 'Industri fashion menyumbang 10% dari emisi karbon global. Membeli pakaian bekas bisa mengurangi limbah tekstil!',
    icon: icons.buy,
  },
  {
    title: 'Pilih Bahan Ramah Lingkungan',
    fact: 'Kapas organik menggunakan 91% lebih sedikit air dibandingkan kapas konvensional.',
    icon: icons.eco,
  },
  {
    title: 'Kurangi Fast Fashion',
    fact: 'Rata-rata, satu orang membuang sekitar 30 kg pakaian per tahun. Kurangi konsumsi dengan membeli lebih sedikit tapi berkualitas.',
    icon: icons.clock,
  },
  {
    title: 'Daur Ulang atau Upcycle',
    fact: 'Hanya 15% dari pakaian yang dibuang didaur ulang. Gunakan kreativitas untuk mengubah pakaian lama menjadi sesuatu yang baru!',
    icon: icons.recycle,
  },
  {
    title: 'Cuci dengan Bijak',
    fact: 'Mencuci pakaian dengan air dingin dan mengeringkan secara alami dapat mengurangi jejak karbon hingga 50%!',
    icon: icons.wash,
  },
];

const Tips = () => {
  const tipsRef = useRef([]);

  useEffect(() => {
    tipsRef.current.forEach((tip, index) => {
      gsap.fromTo(
        tip,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: tip,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <section className='pt-20 md:pt-30 px-3 lg:px-15 pb-20 bg-gray-50 min-h-screen'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold text-center text-gray-800 mb-12 mt-10'>Tips & Trick Fashion Berkelanjutan</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {tips.map((tip, index) => (
            <div
              key={index}
              ref={el => tipsRef.current[index] = el}
              className='p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'
            >
              <div className='flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4'>
                {tip.icon}
              </div>
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>{tip.title}</h3>
              <p className='text-gray-600 leading-relaxed'>{tip.fact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tips;