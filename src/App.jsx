import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import StudentRegistration from './pages/StudentRegistration';
import StaffRegistration from './pages/StaffRegistration';
import Attendance from './pages/Attendance';
import CommunicationHub from './pages/CommunicationHub';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-50">
        <nav className="bg-blue-700 p-4 text-white flex justify-between">
          <h1 className="font-bold">SIMS Central</h1>
          <div className="flex gap-4">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/student-registration">Student Registration</Link>
            <Link to="/staff-registration">Staff Registration</Link>
            <Link to="/attendance">Attendance</Link>
            <Link to="/communication-hub">Communication Hub</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/student-registration" element={<StudentRegistration />} />
          <Route path="/staff-registration" element={<StaffRegistration />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/communication-hub" element={<CommunicationHub />} />
        </Routes>
      </div>
    </Router>
  );
}