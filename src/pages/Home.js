import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

//components
import FullScreenDiv from '../components/UI/FullScreenDiv';
 main

import BGVideoDiv from '../components/UI/BGVideoDiv';
 homePageUpdate
import GlassDiv from '../components/UI/GlassDiv';

//animations
import { fade, fadeInAndDown, buttonAnimation, routeAnimations } from '../animations/Animations';

//media
import EuropeCity from '../images/europeCity.jpeg';
import FallPark from '../images/fallPark.jpeg';
import GreenHouseInterior from '../images/greenhouseInterior.jpeg';
 main

import GreenHouseWindow from '../images/greenhouseWindows.jpeg';
import CityLightsImage from '../images/cityLights-min.jpeg';
import CityLightsVideo from '../video/bridge.mp4';
import NightCarsImage from '../images/nightCars-min.jpeg';
import NightCarsVideo from '../video/roundabout.mp4';
 homePageUpdate

export default function Home() {
  const navigate = useNavigate();

  return (
    <motion.main 
      className='autoScrollParent'
      initial="initial"
      animate="in"
      exit="out"
      variants={routeAnimations}
    >
      <Div>
 main
        <section className='autoScrollChild'>
          <FullScreenDiv background={`url(${EuropeCity})`}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fade} transition={{ duration: 1, delayChildren: 1, staggerChildren: 1 }} className='welcome'>
              <motion.h1 variants={fadeInAndDown}>Welcome to WebTech</motion.h1>
              <motion.strong variants={fadeInAndDown}>Building a stronger web for the future.</motion.strong>
            </motion.div>
          </FullScreenDiv>
        </section>

        <section className='autoScrollChild'>
          <FullScreenDiv background={`url(${FallPark})`}>
            <motion.div className='gridContainer homePageGrid' initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fade} transition={{  staggerChildren: 0.3 }}>
              <motion.div
                as={motion.div}
                variants={fade}
              >
                <GlassDiv>
                  <div className='homePageGridElements'>
                    <h3>Improve Your Online Presence</h3>
                    <p>Your website needs to be very fast, scalable, and contain relevant content in order to be successful.  WebTech utilizes modern web technologies and strategies for improving SEO, speed, and overall market outreach.</p>
                  </div>
                </GlassDiv>
              </motion.div>
              
              <motion.div
                as={motion.div}
                variants={fade}
              >
                <GlassDiv 
                  as={motion.div}
                  variants={fade}
                >
                  <div className='homePageGridElements'>
                    <h3>Boost Your Pagespeed</h3>
                    <p>Performance plays an integral part of your SEO, accessibility, and overall quality.  Slow websites get punished by search engines and can make users feel frustrated.  That's why businesses need to stay on top of the latest in modern web trends and technologies in order to stay relevant.  WebTech utilizes only the most modern web architectures to ensure top notch scores on website speed tests in order to boost SEO and improve the user experience.</p>
                  </div>
                </GlassDiv>
              </motion.div>

              <motion.div
                as={motion.div}
                variants={fade}
              >
                <GlassDiv 
                  as={motion.div}
                  variants={fade}
                >
                  <div className='homePageGridElements'>
                    <h3>Keeping Accessibility Number 1</h3>
                    <p>WebTech delivers websites that meet full accessibility requirements and complies with all WCAG standards.  Not only does this help people with disabilities and special needs, it also improves the experience for regular users by ensuring content is easily identifiable and easy to understand.  This in turn will boost your customer's trust and earn you points in the market.</p>
                  </div>
                </GlassDiv>
              </motion.div>
              
              <motion.div
                as={motion.div}
                variants={fade}
              >
                <GlassDiv 
                  as={motion.div}
                  variants={fade}
                >
                  <div className='homePageGridElements'>
                    <h3>Only The Latest Technologies</h3>
                    <p>WebTech only uses the latest and greatest web technologies in all of the websites and web applications we build.</p>
                  </div>
                </GlassDiv>
              </motion.div>
            </motion.div>
          </FullScreenDiv>
        </section>
        
        <section className='autoScrollChild'>
          <FullScreenDiv background={`url(${GreenHouseInterior})`}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fade} transition={{ duration: 1, delayChildren: 1, staggerChildren: 1 }} className='welcome'>
              <h2>Get started with WebTech today!</h2>
              <motion.button className='button' whileHover={buttonAnimation.hover} whileTap={buttonAnimation.click} onClick={()=> {navigate('/contact')}}>Learn More</motion.button>
            </motion.div>

        <section id="introHero" className='autoScrollChild'>
          <BGVideoDiv imagePlaceholder={CityLightsImage} mp4Vid={CityLightsVideo}>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fade} transition={{ duration: 1, delayChildren: 1, staggerChildren: 1 }} className='welcome fullWrapper darkenBackground'>
              <motion.h1 variants={fadeInAndDown}>Welcome to WebTech</motion.h1>
              <motion.strong variants={fadeInAndDown}>Building a stronger web for the future.</motion.strong>
            </motion.div>
          </BGVideoDiv>
        </section>

        <section id="online-presence" className='autoScrollChild'>
          <FullScreenDiv background={`url(${EuropeCity})`}>
            <div className='fullWrapper darkenBackground'>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fade} transition={{ duration: 1, delayChildren: 1, staggerChildren: 1 }} className='bannerInner'>
                <h2>Improve Your Online Presence</h2>
                <p>Your website needs to be very fast, scalable, and contain relevant content in order to be successful.  WebTech utilizes modern web technologies and strategies for improving SEO, speed, and overall market outreach.</p>
              </motion.div>
            </div>
          </FullScreenDiv>
        </section>

        <section id="boost-pagespeed" className='autoScrollChild'>
          <FullScreenDiv background={`url(${GreenHouseWindow})`}>
            <div className='fullWrapper darkenBackground'>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fade} transition={{ duration: 1, delayChildren: 1, staggerChildren: 1 }} className='bannerInner'>
                <h2>Boost Your Pagespeed</h2>
                <p>Performance plays an integral part of your SEO, accessibility, and overall quality.  Slow websites get punished by search engines and can make users feel frustrated.  That's why businesses need to stay on top of the latest in modern web trends and technologies in order to stay relevant.  WebTech utilizes only the most modern web architectures to ensure top notch scores on website speed tests in order to boost SEO and improve the user experience.</p>
              </motion.div>
            </div>
          </FullScreenDiv>
        </section>

        <section id="accessibility" className='autoScrollChild'>
          <FullScreenDiv background={`url(${FallPark})`}>
            <div className='fullWrapper darkenBackground'>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fade} transition={{ duration: 1, delayChildren: 1, staggerChildren: 1 }} className='bannerInner'>
                <h2>Keeping Accessibility Number 1</h2>
                <p>WebTech delivers websites that meet full accessibility requirements and complies with all WCAG standards.  Not only does this help people with disabilities and special needs, it also improves the experience for regular users by ensuring content is easily identifiable and easy to understand.  This in turn will boost your customer's trust and earn you points in the market.</p>
              </motion.div>
            </div>
          </FullScreenDiv>
        </section>

        <section id="latest-tech" className='autoScrollChild'>
          <BGVideoDiv imagePlaceholder={NightCarsImage} mp4Vid={NightCarsVideo}>
            <div className='fullWrapper darkenBackground'>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fade} transition={{ duration: 1, delayChildren: 1, staggerChildren: 1 }} className='bannerInner'>
                <h2>Only The Latest Technologies</h2>
                <p>WebTech only uses the latest and greatest web technologies in all of the websites and web applications we build.</p>
              </motion.div>
            </div>
          </BGVideoDiv>
        </section>
        
        <section className='autoScrollChild'>
          <FullScreenDiv background={`url(${GreenHouseInterior})`}>
            <div className='welcome fullWrapper darkenBackground'>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fade} transition={{ duration: 1, delayChildren: 1, staggerChildren: 1 }} className='welcome'>
                <h2>Get started with WebTech today!</h2>
                <motion.button className='button' whileHover={buttonAnimation.hover} whileTap={buttonAnimation.click} onClick={()=> {navigate('/contact')}}>Learn More</motion.button>
              </motion.div>
            </div>
 homePageUpdate
          </FullScreenDiv>
        </section>
      </Div>
    </motion.main>
  )
}

const Div = styled.div`
  section {
    margin: 0;
    padding; 0;
  }

  .welcome {
 main
    width: 100%;
    height: 100%;
    margin: auto;
    height: 100%;

 homePageUpdate
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
 main
    background: rgba(0, 0, 0, 0.4);
    color: #fff;

 homePageUpdate

    h1, h2 {
      font-size: 3rem;
      font-weight: 400;
      padding: 15px;
      text-align: center;
    }

    strong {
      font-size: 1.2rem;
      font-weight: 400;
    }
  }

  .homePageGrid {
    height: 100%;
    width: 100%;
    justify-content: center;
    align-content: center;
    padding: 20px;
  }
`;