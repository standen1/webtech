import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { MotionConfig, AnimatePresence } from "framer-motion"

//Theme files
import { theme } from './styles/Theme';
import { GlobalStyles } from './styles/Globals';
//Layout
import Layout from './components/Layout/Layout';
//Page Components
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MotionConfig reducedMotion='user'>
        <Layout>
          <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </AnimatePresence>
        </Layout>
      </MotionConfig>
    </ThemeProvider>
  );
}

export default App;
