import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Img1 from '../assets/cust1.png';
import Img2 from '../assets/cust2.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const comments = [
    {
        image: Img2,
        description: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
        star: "★★★★★",
        name: "Angely",
        profession: "Traveler"
    },
    {
        image: Img1,
        description: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
        star: "★★★★★",
        name: "Michael",
        profession: "Traveler"
    },
    {
        image: Img1,
        description: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
        star: "★★★★★",
        name: "Michael",
        profession: "Traveler"
    },
];

function CustomerSay() {
    const swiperRef = useRef(null);

    return (
        <div className="bg-[#fafafa] px-3 lg:px-15  py-10 md:py-20">
            <div className='flex flex-col items-center justify-center relative'>
                <h1 className="text-black/70 self-start text-xl mb-4 font-semibold">This Is What Our Customers Say</h1>

                {/* Swiper Component */}
                <Swiper
                    ref={swiperRef}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    initialSlide={1}
                    loop={false}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 1.5 },
                        1024: { slidesPerView: 2 },
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 200,
                        depth: 200,
                        slideShadows: false
                    }}
                    pagination={false}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="w-full mx-auto"
                >
                    {comments.map((comment, idx) => (
                        <SwiperSlide key={idx} className="flex justify-center py-5">
                            <div className="max-w-xl mx-auto bg-white shadow-lg border border-black/25 rounded-2xl p-10">
                                <div className='flex flex-col md:flex-row justify-between gap-x-5'>
                                    <img className="md:h-auto h-full rounded-xl object-cover" src={comment.image} alt="User" />
                                    <div className='flex flex-col space-y-4 text-center md:text-left'>
                                        <p className="text-gray-700 text-sm md:text-sm">{comment.description}</p>
                                        <div className="flex justify-center md:justify-start text-yellow-500">{comment.star}</div>
                                        <hr className="max-w-48 mx-auto md:mx-0" />
                                        <p className="text-lg font-semibold">{comment.name}</p>
                                        <p className="text-gray-500">{comment.profession}</p>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation */}
                <div className='flex gap-x-4 mt-6'>
                    <button
                        className="bg-white border border-black/5 p-2 rounded-full text-black/70 hover:border-black/60 hover:text-black cursor-pointer transition-all duration-300 shadow-xl"
                        onClick={() => swiperRef.current.swiper.slidePrev()}
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        className="bg-white border border-black/5 p-2 rounded-full text-black/70 hover:border-black/60 hover:text-black cursor-pointer transition-all duration-300 shadow-xl"
                        onClick={() => swiperRef.current.swiper.slideNext()}
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CustomerSay;