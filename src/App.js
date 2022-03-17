import React from 'react';
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { MotionConfig } from "framer-motion"

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
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MotionConfig reducedMotion='user'>
        <Layout>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </MotionConfig>
    </ThemeProvider>
  );
}

export default App;
