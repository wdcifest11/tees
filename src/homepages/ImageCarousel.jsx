import React, { useEffect, useRef, useState } from 'react';
import Img1 from '../assets/imagedeals1.png';
import Img2 from '../assets/imagedeals2.png';
import Img3 from '../assets/imagedeals3.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';

const discountTexts = [
  { number: '01', category: 'Spring Sale', discount: '30% OFF' },
  { number: '02', category: 'Summer Special', discount: '25% OFF' },
  { number: '03', category: 'Winter Deals', discount: '40% OFF' }
];

const images = [Img1, Img2, Img3];

const ImageCarousel = () => {
  const [mainImgIndex, setMainImgIndex] = useState(0);
  const [otherImgs, setOtherImgs] = useState([Img2, Img3]);
  const discountTextRef = useRef(null);
  const mainImgRef = useRef(null);
  const thumbImgRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      mainImgRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
    gsap.fromTo(
      discountTextRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
  }, [mainImgIndex]);

  useEffect(() => {
    gsap.fromTo(
      thumbImgRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 1, stagger: 0.1, ease: 'power3.out' }
    );
  }, [otherImgs]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [mainImgIndex]);

  const handleNext = () => {
    gsap.to(mainImgRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'power3.in',
      onComplete: () => {
        setMainImgIndex((prevIndex) => (prevIndex + 1) % images.length);
        setOtherImgs(images.filter((_, index) => index !== (mainImgIndex + 1) % images.length));
      }
    });
  };

  const handlePrev = () => {
    gsap.to(mainImgRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: 'power3.in',
      onComplete: () => {
        setMainImgIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setOtherImgs(images.filter((_, index) => index !== (mainImgIndex - 1 + images.length) % images.length));
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-6">
        <div className="relative w-full md:w-1/2">
          <img
            ref={mainImgRef}
            src={images[mainImgIndex]}
            alt="Main"
            className="w-full h-auto rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
          />
          <div
            ref={discountTextRef}
            className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm text-black/80 px-4 py-3 rounded-lg shadow-md"
          >
            <p className="text-sm font-light mb-1">
              {discountTexts[mainImgIndex].number} — {discountTexts[mainImgIndex].category}
            </p>
            <p className="text-2xl font-semibold">{discountTexts[mainImgIndex].discount}</p>
          </div>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full md:w-1/2">
          {otherImgs.map((img, index) => (
            <img
              key={index}
              ref={(el) => (thumbImgRef.current[index] = el)}
              src={img}
              alt={`Thumbnail ${index}`}
              className="w-full md:w-1/2 h-48 object-cover rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;