import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    review: "Dr. Srivastava and her staff are amazing! They made my whole family feel comfortable and welcome. Highly recommend!",
    name: "Emily Chen",
    rating: 5,
  },
  {
    review: "The best dental experience I've ever had. The office is clean and the staff is very friendly.",
    name: "Michael Lee",
    rating: 4,
  },
  {
    review: "My kids love coming here! The dentist is gentle and explains everything clearly.",
    name: "Priya Patel",
    rating: 5,
  },
  {
    review: "Professional, caring, and efficient. I always feel at ease during my visits.",
    name: "James Smith",
    rating: 5,
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex mb-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-600' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
      ))}
    </div>
  );
}

const arrowVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1, transition: { type: 'spring', stiffness: 400, damping: 20 } },
};

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!isHovering) {
      timeoutRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 3000);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [current, isHovering]);

  const goTo = (idx) => {
    setCurrent(idx);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-gray-50"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-blue-900 text-center mb-8">
          What Our Patients Say
          <span className="block w-16 h-1 bg-blue-600 rounded-full mt-3 mx-auto"></span>
        </h2>
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="relative bg-white rounded-2xl shadow-xl px-4 sm:px-6 md:px-8 py-4 min-h-[100px]"
          style={{ willChange: 'transform' }}
        >
          {/* Left Arrow */}
          <motion.button
            variants={arrowVariants}
            initial="initial"
            whileHover="hover"
            onClick={() => goTo((current - 1 + testimonials.length) % testimonials.length)}
            aria-label="Previous"
            className="absolute left-[-2.5rem] top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white/90 transition duration-200 z-10 border border-blue-200"
          >
            <svg className="w-4 h-4 text-blue-600 hover:text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          {/* Testimonial Content */}
          <motion.div
            key={current}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 150, damping: 15 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 min-h-[80px] sm:min-h-[90px]"
          >
            <div className="sm:w-2/3 text-left">
              <p className="text-base sm:text-lg text-blue-800 font-medium italic break-words whitespace-pre-line px-1 max-w-full overflow-hidden">“{testimonials[current].review}”</p>
            </div>
            <div className="sm:w-1/3 flex flex-col items-end">
              <StarRating rating={testimonials[current].rating} />
              <div className="font-semibold text-blue-900 text-base sm:text-lg">{testimonials[current].name}</div>
            </div>
          </motion.div>

          {/* Right Arrow */}
          <motion.button
            variants={arrowVariants}
            initial="initial"
            whileHover="hover"
            onClick={() => goTo((current + 1) % testimonials.length)}
            aria-label="Next"
            className="absolute right-[-2.5rem] top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white/90 transition duration-200 z-10 border border-blue-200"
          >
            <svg className="w-4 h-4 text-blue-600 hover:text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="flex justify-center gap-2 mt-6"
          >
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === current ? 'bg-blue-600 w-3' : 'bg-gray-300 hover:bg-blue-400'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}