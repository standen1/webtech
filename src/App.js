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
import ScrollToTop from './components/Layout/ScrollToTop';

function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MotionConfig reducedMotion='user'>
        <Layout>
          <AnimatePresence>
            <ScrollToTop>
              <Routes location={location} key={location.pathname}>
                <Route path={process.env.PUBLIC_URL + "/about"} element={<About />} />
                <Route path={process.env.PUBLIC_URL +"/contact"} element={<Contact />} />
                <Route path={process.env.PUBLIC_URL +"/portfolio"} element={<Portfolio />} />
                <Route path={process.env.PUBLIC_URL +"/"} element={<Home />} />
              </Routes>
            </ScrollToTop>
          </AnimatePresence>
        </Layout>
      </MotionConfig>
    </ThemeProvider>
  );
}

export default App;
