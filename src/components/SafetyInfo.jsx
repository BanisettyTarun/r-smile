import { RiShieldCheckLine, RiInformationLine } from 'react-icons/ri';
import { FaLungs, FaDoorClosed, FaWind, FaSprayCan, FaTooth, FaThermometer, FaUserShield } from 'react-icons/fa';

export default function SafetyInfo() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-gray-50 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Safety Icon */}
          <div className="flex justify-center mb-8">
            <RiShieldCheckLine className="text-blue-600 text-5xl sm:text-6xl transition-transform duration-300 hover:scale-110" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-900 text-center font-sans tracking-tight mb-6">
            Your Safety is Our Priority
            <span className="block w-16 h-1 bg-blue-500 rounded-full mx-auto mt-4"></span>
          </h2>

          {/* Safety Features Grid */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-10">
            {[
              { text: "Medical-grade HEPA units in every operatory", icon: <FaLungs className="text-blue-500 text-xl sm:text-2xl mt-1 mr-3 shrink-0 transition-transform duration-300 group-hover:scale-125" /> },
              { text: "Private operatories with doors", icon: <FaDoorClosed className="text-blue-500 text-xl sm:text-2xl mt-1 mr-3 shrink-0 transition-transform duration-300 group-hover:scale-125" /> },
              { text: "Windows in operatories for ventilation", icon: <FaWind className="text-blue-500 text-xl sm:text-2xl mt-1 mr-3 shrink-0 transition-transform duration-300 group-hover:scale-125" /> },
              { text: "HE-tech units to reduce aerosols", icon: <FaSprayCan className="text-blue-500 text-xl sm:text-2xl mt-1 mr-3 shrink-0 transition-transform duration-300 group-hover:scale-125" /> },
              { text: "Bacteria-reducing rinse protocol", icon: <FaTooth className="text-blue-500 text-xl sm:text-2xl mt-1 mr-3 shrink-0 transition-transform duration-300 group-hover:scale-125" /> },
              { text: "Temperature checks & staggered patient scheduling", icon: <FaThermometer className="text-blue-500 text-xl sm:text-2xl mt-1 mr-3 shrink-0 transition-transform duration-300 group-hover:scale-125" /> },
              { text: "Fully geared staff for maximum protection", icon: <FaUserShield className="text-blue-500 text-xl sm:text-2xl mt-1 mr-3 shrink-0 transition-transform duration-300 group-hover:scale-125" /> },
            ].map((item, index) => (
              <li
                key={index}
                className="group flex items-start bg-gray-50 rounded-lg p-4 sm:p-5 hover:bg-blue-50 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out"
              >
                {item.icon}
                <span className="text-gray-700 text-sm sm:text-base font-medium leading-snug">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>

          {/* Info Box */}
          <div className="mt-10 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-4 sm:p-5 flex items-center gap-3 sm:gap-4 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <RiInformationLine className="text-blue-600 text-xl sm:text-2xl shrink-0 transition-transform duration-300 hover:scale-110" />
            <p className="text-gray-800 text-sm sm:text-base italic">
              During these challenging times, we prioritize your health and safety with comprehensive protocols.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}