import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/homepage';
import LogInPage from './pages/loginpage';
import SignUpPage from './pages/signuppage'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Log-In" element={<LogInPage />} />
        <Route path="/Sign-up" element={<SignUpPage />} />
        {/* <Route path="/quiz" element={<QuizPage />} /> */}
        {/* More routes here */}
      </Routes>
    </Router>
  );
}

export default App;
