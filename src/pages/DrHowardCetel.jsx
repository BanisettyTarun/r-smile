import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function DrHowardCetel() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Blue Header */}
      <header className="bg-blue-400 h-40 flex items-center justify-center flex-col text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg tracking-tight">
          About R-Smile Dental Care
        </h1>
      </header>
      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto mt-6 mb-2 px-4 text-sm text-gray-500">
        <Link to="/" className="hover:underline text-blue-700">R-Smile Dental Care</Link> <span className="mx-1">&gt;</span> <span>About</span>
      </nav>
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mt-4">
          <h2 className="text-2xl font-normal text-gray-900 mb-2">Welcome Dr. Rashmi Srivastava</h2>
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Announcing the Retirement of Dr. Howard Cetel and Welcoming Dr. Rashmi Srivastava to Sewell, NJ
          </h3>
          <p className="text-gray-700 mb-4">
            After decades of dedicated dental care in Sewell, New Jersey, Dr. Howard Cetel is retiring. Dr. Cetel has built a reputation as one of the best dentists in Gloucester County, offering exceptional general and cosmetic dentistry to countless patients. His commitment to personalized, compassionate care has earned him the prestigious "Best Dentist" award five times.
          </p>
          <p className="text-gray-700 mb-4">
            We congratulate Dr. Cetel on his remarkable career and wish him a fulfilling and well-deserved retirement. His passion for helping patients maintain healthy, beautiful smiles will always be remembered.
          </p>
          <p className="text-gray-700 mb-4">
            We are also pleased to introduce <span className="font-semibold">Dr. Rashmi Srivastava</span> as the new leader of our practice. Dr. Srivastava is a highly skilled general dentist with two decades of experience in providing comprehensive dental care. She earned her Doctor of Dental Surgery degree from the prestigious <span className="font-semibold">New York University College of Dentistry (NYU)</span> and has a proven track record of delivering patient-centered, high-quality dental services.
          </p>
          <p className="text-gray-700 mb-4">
            To ensure a smooth transition and maintain our welcoming office environment, we are proud to share that our dedicated staff will remain the same. This continuity ensures that you will continue to see familiar, friendly faces at every visit.
          </p>
          <p className="text-gray-700">
            Our team remains dedicated to providing a comfortable, patient-focused experience. We look forward to welcoming you and your family to meet Dr. Rashmi Srivastava and continue your dental care journey with us.
          </p>
        </div>
      </main>
    </div>
  );
} 