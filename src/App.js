import React, {Suspense} from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { MotionConfig, AnimatePresence } from "framer-motion"

//Theme files
import { theme } from './styles/Theme';
import { GlobalStyles } from './styles/Globals';

//Layout
import Layout from './components/Layout/Layout';
import ScrollToTop from './components/Layout/ScrollToTop';

//Page Components
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const Contact = React.lazy(() => import('./pages/Contact'));


function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MotionConfig reducedMotion='user'>
        <Layout>
          <AnimatePresence>
            <ScrollToTop>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes location={location} key={location.pathname}>
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/" element={<Home />} />
                </Routes>
              </Suspense>
            </ScrollToTop>
          </AnimatePresence>
        </Layout>
      </MotionConfig>
    </ThemeProvider>
  );
}

export default App;
