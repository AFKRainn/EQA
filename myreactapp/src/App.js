import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/homepage';
import AboutPage from './pages/aboutpage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/quiz" element={<QuizPage />} /> */}
        {/* More routes here */}
      </Routes>
    </Router>
  );
}

export default App;
