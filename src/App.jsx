import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import DashboardLayout from './layout/DashboardLayout';
import SignUp from './Pages/SignUp';
import Login from './Pages/SignIn';
import AccountSetup from './Pages/AccountSetup';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect from root '/' to '/dashboard' */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/* Define your routes */}
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="/account-setup" element={<AccountSetup/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </Router>
  );
}

export default App;
