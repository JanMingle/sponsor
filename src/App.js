import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidenav from './component/Sidenav';  // Update the import statement to match the filename
import Dashboard from './component/Dashboard';
import AccountManagement from './component/AccountManagement';
import DonationManagement from './component/DonationManagement';
import Campaigns from './component/Campaigns';
import Reporting from './component/Reporting';
import Updates from './component/Updates';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidenav />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/AccountManagement" element={<AccountManagement />} />
            <Route path="/DonationManagement" element={<DonationManagement />} />
            <Route path="/Campaigns" element={<Campaigns />} />
            <Route path="/reporting" element={<Reporting />} />
            <Route path="/Updates" element={<Updates />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
