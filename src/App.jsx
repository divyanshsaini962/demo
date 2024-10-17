import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Layout/Navigation';
import Footer from './components/Layout/Footer';
import CourseList from './components/Home/CourseList';
import CourseDetails from './components/Courses/CourseDetails';
import Quiz from './components/Quiz/Quiz';
import Login from './components/Auth/Login';
import Profile from './components/Profile/Profile';
import Reports from './components/Reports/Reports';
import { AuthProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import './styles/index.css';

const App = () => {
  return (
    <AuthProvider>
      <LanguageProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<CourseList />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/quiz/:id" element={<Quiz />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/reports" element={<Reports/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
          <Footer />
        </Router>
      </LanguageProvider>
    </AuthProvider>
  );
};

export default App;
