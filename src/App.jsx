import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import DashboardLayout from './layout/DashboardLayout';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect from root '/' to '/dashboard' */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/* Define your routes */}
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </Router>
  );
}

export default App;
