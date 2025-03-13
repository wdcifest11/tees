import { useEffect, useRef } from "react";
import gsap from "gsap";

const InfiniteScrollText = () => {
  const marqueeRef = useRef(null);
    const tweenRef = useRef(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        const clone = marquee.innerHTML;
        marquee.innerHTML += clone + clone + clone + clone + clone; // Duplicate content for seamless loop

        tweenRef.current = gsap.to(marquee, {
            x: "-50%", // Move halfway to create an infinite loop
            duration: 50,
            ease: "linear",
            repeat: -1,
        });
    }, []);

    const handleMouseEnter = () => {
        gsap.to(tweenRef.current, { timeScale: 0.2, duration: 0.5, ease: "power4.out" }); // Gradual slow down
    };

    const handleMouseLeave = () => {
        gsap.to(tweenRef.current, { timeScale: 1 }); // Gradual speed up
    };

  return (
    <div ref={marqueeRef} className="whitespace-nowrap w-full text-black/70 bg-[#fff] h-10 flex items-center z-[9999]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="inline-block text-[10px]">
        {"     "} {""} Fashion Berkelanjutan, Bumi Lebih Nyaman! &nbsp; • &nbsp; Fashion Berkelanjutan, Bumi Lebih Nyaman! &nbsp; • &nbsp; Fashion Berkelanjutan, Bumi Lebih Nyaman! &nbsp; • &nbsp; 
      </div>
    </div>
  );
};

export default InfiniteScrollText;
