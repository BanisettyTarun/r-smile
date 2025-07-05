import bannerImage from '../assets/banner.jpg?url';

export default function Banner() {
  return (
    <div className="relative h-[400px] md:h-[500px] lg:h-[800px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundPosition: 'center 30%',
          filter: 'brightness(65%) contrast(90%)',
        }}
      ></div>
      <div className="relative z-10 flex items-end justify-center h-full pb-16 md:pb-20 lg:pb-32">
        <div className="text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 font-serif">
            Dr. Rashmi Srivastava, DDS
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 font-light">
            Family Dentists & General Dentists located in Washington Township, Sewell, NJ
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="cursor-pointer flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>856-210-9508</span>
            </button>

            <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
              REQUEST APPOINTMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
