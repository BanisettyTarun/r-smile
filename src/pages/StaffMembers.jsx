import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const staffList = [
  {
    name: 'Debbie Baran, RDH',
    bio: `I thoroughly enjoy working for Dr. Cetel and his office. Since 1994, I have been with Dr. Cetel's practice. I have been practicing Dental Hygiene for patients since 1984. I graduated #1 in my hygiene program.\n\nI feel confident that our Dental facility provides top-notch care which I am happy to contribute to. I enjoy my profession as a Dental Hygienist and strive to do my utmost in following the "Golden rule" in treating our dental patients.`,
    img: 'https://sa1s3optim.patientpop.com/assets/images/provider/photos/1675266.jpeg',
  },
  {
    name: 'Dean Murrell, RDH',
    bio: `Dean has been a valued member of our clinical team for over 10 years. He is passionate about patient education and preventive care, and is known for his gentle approach and attention to detail.\n\nDean enjoys building long-term relationships with patients and helping them achieve optimal oral health.`,
    img: 'https://sa1s3optim.patientpop.com/assets/images/provider/photos/1675268.jpeg',
  },
  {
    name: 'Lisa Chen, Dental Assistant',
    bio: `Lisa brings a warm smile and positive energy to our office every day. She assists with a variety of dental procedures and ensures that patients feel comfortable and informed throughout their visit.\n\nLisa is dedicated to ongoing learning and is always ready to help both patients and colleagues.`,
    img: 'https://sa1s3optim.patientpop.com/assets/images/provider/photos/1675270.jpeg',
  },
  {
    name: 'Michael Rivera, Office Manager',
    bio: `Michael oversees the daily operations of our practice and is the friendly face you'll often see at the front desk. He is committed to making every patient's experience smooth and stress-free, from scheduling to insurance questions.\n\nMichael's organizational skills and dedication to service are invaluable to our team.`,
    img: 'https://sa1s3optim.patientpop.com/assets/images/provider/photos/1815900.jpeg',
  },
  {
    name: 'Emily Patel, Patient Coordinator',
    bio: `Emily helps patients navigate their appointments, treatment plans, and insurance. She is known for her patience, empathy, and clear communication.\n\nEmily is always happy to answer questions and make sure every patient feels welcome and cared for.`,
    img: 'https://sa1s3optim.patientpop.com/assets/images/provider/photos/2261007.jpeg',
  },
  {
    name: 'Emily Patel, Patient Coordinator',
    bio: `Emily helps patients navigate their appointments, treatment plans, and insurance. She is known for her patience, empathy, and clear communication.\n\nEmily is always happy to answer questions and make sure every patient feels welcome and cared for.`,
    img: 'https://sa1s3optim.patientpop.com/assets/images/provider/photos/2261996.jpeg',
  },
];

export default function StaffMembers() {
  const [showContents, setShowContents] = useState(false);
  const contentsRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (contentsRef.current && !contentsRef.current.contains(event.target)) {
        setShowContents(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Header */}
      <header className="bg-gradient-to-r from-teal-600 to-teal-800 h-48 flex items-center justify-center text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-md tracking-wide">
          Meet Our Team
        </h1>
      </header>

      {/* Breadcrumb */}
      <nav className="container mx-auto mt-6 mb-4 px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <Link to="/" className="hover:text-teal-600 transition-colors">R-Smile Dental Care</Link>
          {/* <span>></span> */}
          <Link to="/contents" className="hover:text-teal-600 transition-colors">Contents</Link>
          {/* <span>></span> */}
          <Link to="/staff/members" className="hover:text-teal-600 transition-colors">Our Staff</Link>
          {/* <span>></span> */}
          <span className="text-gray-400">Staff Members</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-12 mb-8 border border-gray-100">
          <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto leading-relaxed">
            At <span className="font-semibold text-teal-600">R-Smile Dental Care</span>, our dedicated team is committed to providing a warm, welcoming, and professional dental experience. Get to know the skilled professionals who make every visit exceptional.
          </p>

          {/* Staff List */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {staffList.map((staff, idx) => (
              <div
                key={`${staff.name}-${idx}`}
                className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={staff.img}
                    alt={staff.name}
                    className="w-32 h-32 object-cover rounded-full border-2 border-teal-100 hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h2 className="text-xl font-semibold text-teal-700 text-center mb-3">{staff.name}</h2>
                <div className="text-gray-600 text-sm leading-relaxed">
                  {staff.bio.split('\n').map((para, i) => (
                    <p key={i} className="mb-3 last:mb-0">{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}