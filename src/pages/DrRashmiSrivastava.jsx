import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function DrRashmiSrivastava() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Blue Header */}
      <header className="bg-blue-400 h-40 flex items-center justify-center flex-col text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg tracking-tight">
          Rashmi Srivastava, DDS
        </h1>
        <p className="text-lg sm:text-2xl text-blue-100 mt-2 font-medium">
          General Dentist located in Washington Township, Sewell, NJ
        </p>
      </header>
      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto mt-6 mb-2 px-4 text-sm text-gray-500">
        <Link to="/" className="hover:underline text-blue-700">R-Smile Dental Care</Link> <span className="mx-1">&gt;</span> <Link to="/staff/rashmi-srivastava" className="hover:underline text-blue-700">Providers</Link> <span className="mx-1">&gt;</span> <span>Rashmi Srivastava, DDS</span>
      </nav>
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 pb-16">
        <div className="flex flex-col md:flex-row items-center md:items-start bg-white rounded-2xl shadow-xl p-8 md:p-12 mt-4">
          {/* Profile Image */}
          <div className="flex-shrink-0 w-40 h-40 md:w-56 md:h-56 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden mb-8 md:mb-0 md:mr-10">
            <img
              src="data:image/jpeg;base64,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"
              alt="Dr. Rashmi Srivastava"
              className="w-32 h-32 md:w-44 md:h-44 object-cover rounded-full shadow-md border-2 border-blue-200"
            />
          </div>
          {/* Bio */}
          <div className="flex-1 md:pl-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Dr. Rashmi Srivastava</h2>
            <p className="text-gray-700 mb-4">
              Dr. Rashmi Srivastava is a highly skilled general dentist with two decades of experience in providing comprehensive dental care. She earned her Doctor of Dental Surgery degree from the prestigious <span className="font-semibold">New York University College of Dentistry (NYU)</span> and has a proven track record of delivering patient-centered, high-quality dental services.
            </p>
            <p className="text-gray-700 mb-4">
              Dr. Srivastava is dedicated to ensuring every patient receives personalized, high-quality care in a comfortable and welcoming environment. Her approach combines technical excellence with compassion, making her a trusted provider for families in Sewell, NJ.
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Specialties:</span> General Dentistry, Preventive Care, Restorative Dentistry, Cosmetic Dentistry, Emergency Care, Patient Education
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 