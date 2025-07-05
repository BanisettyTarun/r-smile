import crownsImg from '../assets/crowns.jpg';
import rootCanalImg from '../assets/root-canal.jpg';
import dentalImplantsImg from '../assets/dental-implants.jpg';
import denturesImg from '../assets/dentures.jpg';
import invisalignImg from '../assets/invisalign.jpg';
import teethWhiteningImg from '../assets/teeth-whitening.jpg';
import oralSurgeryImg from '../assets/oral-surgery.jpg';
import emergencyCareImg from '../assets/emergency-care.jpg';
import teethCleaningImg from '../assets/teeth-cleaning.jpg';

const services = [
  { name: 'Dental Crowns', description: 'Restore damaged teeth with custom-made crowns for protection and natural appearance.', img: crownsImg, link: '#' },
  { name: 'Root Canal', description: 'Painless root canal treatments to save infected teeth and relieve discomfort.', img: rootCanalImg, link: '#' },
  { name: 'Dental Implants', description: 'Permanent tooth replacement solutions that look and function like natural teeth.', img: dentalImplantsImg, link: '#' },
  { name: 'Dentures', description: 'Custom-fitted dentures for comfortable chewing and confident smiling.', img: denturesImg, link: '#' },
  { name: 'Invisalign', description: 'Clear aligners for discreet teeth straightening without metal braces.', img: invisalignImg, link: '#' },
  { name: 'Teeth Whitening', description: 'Professional whitening treatments for a brighter, more confident smile.', img: teethWhiteningImg, link: '#' },
  { name: 'Oral Surgery', description: 'Expert surgical procedures for tooth extractions and other oral health needs.', img: oralSurgeryImg, link: '#' },
  { name: 'Emergency Care', description: 'Immediate dental care for urgent situations and unexpected pain relief.', img: emergencyCareImg, link: '#' },
  { name: 'Teeth Cleaning', description: 'Professional cleaning to maintain oral health and prevent dental issues.', img: teethCleaningImg, link: '#' },
];

export default function Services() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-gray-50 w-full">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-blue-900 mb-3">
            Our Dental Services
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mb-4"></div>
          <p className="text-sm sm:text-base text-gray-700 max-w-xl mx-auto">
            High-quality dental care tailored to your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[280px] overflow-hidden"
            >
              <div className="relative h-36 sm:h-44 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-base font-semibold text-blue-800 mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-700 mb-4 flex-grow">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className="inline-flex items-center text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors duration-200"
                  aria-label={`Learn more about ${service.name}`}
                >
                  Learn more
                  <svg
                    className="w-3 h-3 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
