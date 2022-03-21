import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

//components
import FullScreenDiv from '../components/UI/FullScreenDiv';

//animations
import { fade, buttonAnimation, routeAnimations } from '../animations/Animations';

//media
import RoadImage from '../images/desertroad.jpeg';

export default function Contact() {
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
              <FullScreenDiv background={`url(${RoadImage})`}>
                    <div className='fullWrapper'>
                        <motion.div className='portfolioHeader' id="contactHeader" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fade} transition={{ delay: 0.3, duration: 1 }}>

                            <h1>Contact Us</h1>
                            <p>Thanks for visiting. Please reach out for any inquiries.</p>
                        </motion.div>
                    </div>
                </FullScreenDiv>
            </section>
            <section className='autoScrollChild'>
              <FullScreenDiv background={'#000'}>
                    <div className='fullWrapper'>
                        <motion.div className='portfolioHeader' id="contactForm" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fade} transition={{ delay: 0.3, duration: 1 }}>
                            <form>
                              <p>Fill out the form below to get in touch.</p>
                              <input
                                type="text"
                                aria-label="Name"
                                aria-required="true"
                                placeholder="Name"
                                name="name"
                              />
                              <input
                                type="email"
                                aria-label="Email"
                                aria-required="true"
                                placeholder="Email"
                                name="email"
                              />
                              <textarea 
                                type="description"
                                aria-label="Description"
                                aria-required="true"
                                placeholder="Description"
                                name="description" />
                              <motion.button className='button' whileHover={buttonAnimation.hover} whileTap={buttonAnimation.click}>Submit Form</motion.button>
                            </form>
                        </motion.div>
                    </div>
                </FullScreenDiv>
            </section>
        </Div>
    </motion.main>
  );
}

const Div = styled.div`
  .fullWrapper {
    background: rgba(0, 0, 0, 0.4);
  }

  #contactHeader {
    color: #fff;
    padding: 20px;
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

  #contactForm {
    color: #fff;

    form {
      width: 100%;
      max-width: 400px;
      margin: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      p {
        font-size: 1.5rem;
        font-weight: 300;
        letter-spacing: 1px;
        padding: 10px;
        margin-bottom: 10px;
      }

      input, textarea {
        border: none;
        width: 100%;
        max-width: 400px;
        margin: 10px;
        padding: 5px 15px;
        border-radius: 0.3em;
        font-family: 'Roboto', sans-serif;
        font-size: 1em;
      }

      input {
        height: 30px;
      }

      textarea {
        height: 60px;
        margin-bottom: 25px;
      }
    }
  }
`;