export default function Footer() {
    return (
      <footer className="bg-[#0c2f3c] text-white py-10 px-4 sm:px-8 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-6 sm:space-y-0 text-sm">
            <div className="space-x-6">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms & Conditions</a>
              <a href="#" className="hover:underline">Accessibility Notice</a>
              <a href="#" className="hover:underline">Contact Us</a>
            </div>
            <p>© Copyright 2025 Tebra Inc.</p>
          </div>
  
          <div className="mt-6 text-sm">
            <p className="mb-1 font-semibold">R-Smile Dental Care, Sewell, NJ</p>
            <p className="mb-1">Phone (appointments): <a href="tel:8562109508" className="text-blue-300 hover:underline">856-210-9508</a> | Phone (general inquiries): <a href="tel:8564641900" className="text-blue-300 hover:underline">856-464-1900</a></p>
            <p>Address: 100B Kings Way West, Suite 100B, Sewell, NJ 08080</p>
          </div>
  
          <div className="mt-6 flex flex-col items-center text-sm">
            <div className="flex items-center space-x-1">
              <span className="text-3xl font-bold">4.91</span>
              <span className="text-white">/ 5</span>
              <div className="flex text-yellow-400 ml-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4" viewBox="0 0 20 20">
                    <path d="M9.049 2.927C9.327 2.065 10.673 2.065 10.951 2.927L12.214 6.76a1 1 0 00.95.69h3.88c.969 0 1.371 1.24.588 1.81l-3.141 2.28a1 1 0 00-.364 1.118l1.2 3.693c.3.923-.755 1.688-1.54 1.118l-3.14-2.28a1 1 0 00-1.176 0l-3.141 2.28c-.784.57-1.838-.195-1.54-1.118l1.2-3.693a1 1 0 00-.364-1.118L2.368 9.26c-.783-.57-.38-1.81.588-1.81h3.88a1 1 0 00.95-.69l1.263-3.833z" />
                  </svg>
                ))}
              </div>
            </div>
            <span className="mt-1">(57 reviews)</span>
          </div>
  
          <p className="mt-6 text-sm text-blue-300">Medical website powered by Tebra</p>
        </div>
      </footer>
    );
  }
  