import { useState, useRef, useEffect } from 'react';
import officePic1 from '../assets/office-pic-1.jpg?url';
import officePic2 from '../assets/office-pic-2.jpg?url';
import officePic3 from '../assets/office-pic-3.jpg?url';
import officePic4 from '../assets/office-pic-4.jpg?url';

const images = [officePic1, officePic2, officePic3, officePic4];

export default function OfficeShowcase() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev
  const [nextIdx, setNextIdx] = useState(null);
  const timeoutRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      handleNext();
    }, 3500);
    return () => {
      clearTimeout(timeoutRef.current);
      cancelAnimationFrame(animationRef.current);
    };
  }, [current]);

  function handleNext() {
    if (animating) return;
    setDirection(1);
    setNextIdx((current + 1) % images.length);
    setAnimating(true);
    animationRef.current = requestAnimationFrame(() => {
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setAnimating(false);
        setNextIdx(null);
      }, 500);
    });
  }

  function handlePrev() {
    if (animating) return;
    setDirection(-1);
    setNextIdx((current - 1 + images.length) % images.length);
    setAnimating(true);
    animationRef.current = requestAnimationFrame(() => {
      setTimeout(() => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
        setAnimating(false);
        setNextIdx(null);
      }, 500);
    });
  }

  const goTo = (idx) => {
    if (idx === current || animating) return;
    setDirection(idx > current ? 1 : -1);
    setNextIdx(idx);
    setAnimating(true);
    animationRef.current = requestAnimationFrame(() => {
      setTimeout(() => {
        setCurrent(idx);
        setAnimating(false);
        setNextIdx(null);
      }, 500);
    });
  };

  // Animation classes
  const getAnimClass = (isCurrent) => {
    if (!animating) return isCurrent ? 'z-10' : 'z-0';
    if (isCurrent) {
      // Current image (outgoing)
      return direction === 1 
        ? 'animate-slide-out-left z-20' 
        : 'animate-slide-out-right z-20';
    } else {
      // Next image (incoming)
      return direction === 1 
        ? 'animate-slide-in-right z-30' 
        : 'animate-slide-in-left z-30';
    }
  };

  return (
    <section className="py-16 w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center text-justify gap-12 px-4 md:px-8">
        {/* Text Section */}
        <div className="md:w-1/2 w-full mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4 font-serif">Welcome to our office!</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">"We specialize in treating fearful and anxious patients"</p>
          <p className="text-base text-gray-600 mb-2">
            Compassion and understanding are the guiding principles by which Dr. Rashmi Srivastava, DDS and his staff treat every patient. We care about our patients and do our very best to create an environment that is both pleasant and comfortable. In today's modern age, dentistry has made great progress and in the hands of a caring professional like Dr. Srivastava, a patient can relax and receive all necessary treatment with ease. Observe closely when visiting us; you will hear and see lots of laughter and smiles on the faces of staff and patients. All our staff are dedicated professionals who take pride in their skills and knowledge.
          </p>
        </div>
        {/* Image Slider Section */}
        <div className="md:w-1/2 w-full flex flex-col items-center">
          <div className="relative w-full max-w-md h-64 rounded-xl overflow-hidden shadow-lg bg-gray-200">
            {/* Left Arrow */}
            <button 
              onClick={handlePrev} 
              aria-label="Previous" 
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition z-40 shadow"
              disabled={animating}
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            {/* Image Content */}
            <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
              {/* Current image */}
              <img
                src={images[current]}
                alt="Office slide"
                className={`absolute w-full h-full object-cover rounded-xl will-change-transform ${getAnimClass(true)}`}
                style={{pointerEvents: animating ? 'none' : 'auto'}}
              />
              {/* Next image (only during animation) */}
              {animating && nextIdx !== null && (
                <img
                  src={images[nextIdx]}
                  alt="Office slide"
                  className={`absolute w-full h-full object-cover rounded-xl will-change-transform ${getAnimClass(false)}`}
                />
              )}
            </div>
            {/* Right Arrow */}
            <button 
              onClick={handleNext} 
              aria-label="Next" 
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition z-40 shadow"
              disabled={animating}
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-40">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`w-2.5 h-2.5 rounded-full mx-1 transition-all duration-300 ${idx === current ? 'bg-blue-600 w-4' : 'bg-gray-300'}`}
                  aria-label={`Go to image ${idx + 1}`}
                  disabled={animating}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes slide-in-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes slide-out-left {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        @keyframes slide-in-left {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        @keyframes slide-out-right {
          from { transform: translateX(0); }
          to { transform: translateX(100%); }
        }
        .animate-slide-in-right { 
          animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .animate-slide-out-left { 
          animation: slide-out-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .animate-slide-in-left { 
          animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .animate-slide-out-right { 
          animation: slide-out-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>
    </section>
  );
}