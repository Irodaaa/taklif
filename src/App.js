import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateInvitation from './components/CreateInvitation';
import EditInvitation from './components/EditInvitation';
import Login from './components/Login';
import InvitationView from './components/InvitationView';

const App = () => {
  const location = useLocation();

  // Don't show Navbar on the invitation view page
  const showNavbar = !location.pathname.includes('/invitation/');

  return (
    <div>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreateInvitation />} />
        <Route path="/invitation/:id" element={<InvitationView />} />
        <Route path="/edit/:id" element={<EditInvitation />} />
      </Routes>
    </div>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
