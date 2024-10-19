import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline, useMediaQuery } from '@mui/material';
import Navbar from './Navbar';
import Home from '../components/Home';
import Contacts from '../components/Contacts';
import Projects from '../components/Projects';
import About from '../components/About';
import Footer from './Footer';

function App2() {
  // Determine user's system preference for dark mode
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');

  // Load dark mode state from localStorage (if it exists) or fall back to system preference
  const getInitialMode = () => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return JSON.parse(savedMode);
    }
    return prefersDarkMode;
  };

  const [darkMode, setDarkMode] = useState(getInitialMode);

  useEffect(() => {
    // Save dark mode preference to localStorage whenever it changes
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode}/>} />
          <Route path="/home" element={<Home darkMode={darkMode}/>} />
          <Route path="/about" element={<About darkMode={darkMode}/>} />
          <Route path="/projects" element={<Projects darkMode={darkMode}/>} />
          <Route path="/contact" element={<Contacts darkMode={darkMode}/>} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App2;