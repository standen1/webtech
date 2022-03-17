import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

//components
import FullScreenDiv from '../components/UI/FullScreenDiv';
import BGVideoDiv from '../components/UI/BGVideoDiv';

//animations
import { fade, overlay, buttonAnimation } from '../animations/Animations';

//media
import recordVideo from '../images/recordSpinning.mp4';
import recordImage from '../images/record-min.jpeg';
import airlineImage from '../images/airline-min.jpeg';
import museumImage from '../images/museum-min.jpeg';
import nightskyVideo from '../images/nightsky.mp4';
import nightskyImage from '../images/nightsky.jpeg';
import weatherImage from '../images/weather-min.jpeg';

export default function Portfolio() {

  return (
    <main className='autoScrollParent'>
        <Div>
            <section className='autoScrollChild'>
                <FullScreenDiv background={'#000'}>
                    <div className='fullWrapper'>
                        <motion.div className='portfolioHeader' id="about" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fade} transition={{ delay: 0.3, duration: 1 }}>
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
                            <h2>DeepFake Records</h2>
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
                            <h2>EZ Weather App</h2>
                            <motion.button className='button' whileHover={buttonAnimation.hover} whileTap={buttonAnimation.click}>Visit</motion.button>
                        </motion.div>
                    </div>
                </FullScreenDiv>
            </section>

            <section className='autoScrollChild'>
                <BGVideoDiv imagePlaceholder={nightskyImage} mp4Vid={nightskyVideo}>
                    <div className='fullWrapper'>
                        <motion.div initial="hidden" whileHover="hover" variants={overlay} className='projectLink'>
                            <h2>Firelight Photography</h2>
                            <motion.button className='button' whileHover={buttonAnimation.hover} whileTap={buttonAnimation.click}>Visit</motion.button>
                        </motion.div>
                    </div>
                </BGVideoDiv>
            </section>

            <section className='autoScrollChild'>
                <FullScreenDiv background={`url(${museumImage})`}>
                    <motion.div className='fullWrapper'>
                        <motion.div initial="hidden" whileHover="hover" variants={overlay} className='projectLink'>
                            <h2>Culture and History Museum of San Diego</h2>
                            <motion.button className='button' whileHover={buttonAnimation.hover} whileTap={buttonAnimation.click}>Visit</motion.button>
                        </motion.div>
                    </motion.div>
                </FullScreenDiv>
            </section>
        </Div>
    </main>
  )
}

const Div = styled.div`
    .portfolioHeader {
        color: #fff;
        width: 100%;
        max-width: 600px;
        padding: 20px;
        margin: auto;
        
        h1 {
            font-size: 3rem;
            font-weight: 400;
            margin-bottom: 30px;
        }
        p {
            font-size: 1.1rem;
            font-weight: 300;
            letter-spacing: 1px;
        }
    }

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
