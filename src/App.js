import React from 'react';
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { MotionConfig } from "framer-motion"

import { theme } from './styles/Theme';
import { GlobalStyles } from './styles/Globals';
import Layout from './components/Layout/Layout';

import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MotionConfig reducedMotion='user'>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </MotionConfig>
    </ThemeProvider>
  );
}

export default App;
