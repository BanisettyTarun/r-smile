import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DrHowardCetel from './pages/DrHowardCetel';
import DrRashmiSrivastava from './pages/DrRashmiSrivastava';
import StaffMembers from './pages/StaffMembers';
import Footer from './components/Footer';
import LazyMap from './components/LazyMap';
import Contents from './pages/Contents';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/staff/howard-cetel" element={<DrHowardCetel />} />
            <Route path="/staff/rashmi-srivastava" element={<DrRashmiSrivastava />} />
            <Route path="/staff/members" element={<StaffMembers />} />
            <Route path="/contents" element={<Contents />} />
          </Routes>

          {/* Lazy-loaded Google Map */}
          <LazyMap />
        </div>

        <Footer />
      </div>
    </Router>
  );
}
