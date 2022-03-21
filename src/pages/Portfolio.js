import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

//components
import FullScreenDiv from '../components/UI/FullScreenDiv';
import BGVideoDiv from '../components/UI/BGVideoDiv';

//animations
import { fade, overlay, buttonAnimation, routeAnimations } from '../animations/Animations';

//media
import recordVideo from '../video/record.mp4';
import recordImage from '../images/record-min.jpeg';
import airlineImage from '../images/airline-min.jpeg';
import museumImage from '../images/museum-min.jpeg';
import nightskyVideo from '../video/lakeAndSky.mp4';
import nightskyImage from '../images/nightsky.jpeg';
import weatherImage from '../images/weather-min.jpeg';

export default function Portfolio() {

  return (
    <motion.main 
      className='autoScrollParent'
      initial="initial"
      animate="in"
      exit="out"
      variants={routeAnimations}
    >
        <Div>
            <section className='autoScrollChild'>
                <FullScreenDiv background={'#000'}>
                    <div className='fullWrapper'>
                        <motion.div className='bannerInner' id="about" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fade} transition={{ delay: 0.3, duration: 1 }}>
                            <h1>Portfolio</h1>
                            <p>Our latest projects showcase our use of modern technologies, design, aesthetics, and best practices.</p>
                        </motion.div>
                    </div>
                </FullScreenDiv>
            </section>

            <section className='autoScrollChild'>
                <BGVideoDiv imagePlaceholder={recordImage} mp4Vid={recordVideo}>
                    <div className='fullWrapper'>
                        <motion.div initial="hidden" whileHover="hover" variants={overlay} className='projectLink'>
                            <h2>Pants On Gold Records</h2>
                            <motion.button className='button' whileHover={buttonAnimation.hover} whileTap={buttonAnimation.click}>Visit</motion.button>
                        </motion.div>
                    </div>
                </BGVideoDiv>
            </section>

            <section className='autoScrollChild'>
                <FullScreenDiv background={`url(${airlineImage})`}>
                    <div className='fullWrapper'>
                        <motion.div initial="hidden" whileHover="hover" variants={overlay} className='projectLink'>
                            <h2>Receding Airlines</h2>
                            <motion.button className='button' whileHover={buttonAnimation.hover} whileTap={buttonAnimation.click}>Visit</motion.button>
                        </motion.div>
                    </div>
                </FullScreenDiv>
            </section>

            <section className='autoScrollChild'>
                <FullScreenDiv background={`url(${weatherImage})`}>
                    <div className='fullWrapper'>
                        <motion.div initial="hidden" whileHover="hover" variants={overlay} className='projectLink'>
                            <h2>Oh The Weather Outside Is Weather</h2>
                            <motion.button className='button' whileHover={buttonAnimation.hover} whileTap={buttonAnimation.click}>Visit</motion.button>
                        </motion.div>
                    </div>
                </FullScreenDiv>
            </section>

            <section className='autoScrollChild'>
                <BGVideoDiv imagePlaceholder={nightskyImage} mp4Vid={nightskyVideo}>
                    <div className='fullWrapper'>
                        <motion.div initial="hidden" whileHover="hover" variants={overlay} className='projectLink'>
                            <h2>Say CHEEEEZ Photography</h2>
                            <motion.button className='button' whileHover={buttonAnimation.hover} whileTap={buttonAnimation.click}>Visit</motion.button>
                        </motion.div>
                    </div>
                </BGVideoDiv>
            </section>

            <section className='autoScrollChild'>
                <FullScreenDiv background={`url(${museumImage})`}>
                    <motion.div className='fullWrapper'>
                        <motion.div initial="hidden" whileHover="hover" variants={overlay} className='projectLink'>
                            <h2>Museum of Classic Inappropriate Sculptures</h2>
                            <motion.button className='button' whileHover={buttonAnimation.hover} whileTap={buttonAnimation.click}>Visit</motion.button>
                        </motion.div>
                    </motion.div>
                </FullScreenDiv>
            </section>
        </Div>
    </motion.main>
  )
}

const Div = styled.div`
    .projectLink {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 25px;

        h2 {
            font-size: 2.2rem;
            color: #fff;
            font-weight: 400;
        }
    }
`;
