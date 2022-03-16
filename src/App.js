import React from 'react';
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { MotionConfig } from "framer-motion"

import { theme } from './styles/Theme';
import { GlobalStyles } from './styles/Globals';
import Layout from './components/Layout/Layout';

import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MotionConfig reducedMotion='user'>
        <Layout>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </MotionConfig>
    </ThemeProvider>
  );
}

export default App;
