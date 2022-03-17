import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

//components
import FullScreenDiv from '../components/UI/FullScreenDiv';
import GlassDiv from '../components/UI/GlassDiv';

//animations
import { fade, fadeInAndDown, buttonAnimation } from '../animations/Animations';

//media
import EuropeCity from '../images/europeCity.jpeg';
import FallPark from '../images/fallPark.jpeg';
import GreenHouseInterior from '../images/greenhouseInterior.jpeg';

export default function Home() {

  return (
    <main className='autoScrollParent'>
      <Div>
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
              <motion.button className='button' whileHover={buttonAnimation.hover} whileTap={buttonAnimation.click}>Learn More</motion.button>
            </motion.div>
          </FullScreenDiv>
        </section>
      </Div>
    </main>
  )
}

const Div = styled.div`
  section {
    margin: 0;
    padding; 0;
  }

  .welcome {
    width: 100%;
    height: 100%;
    margin: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
    color: #fff;

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