import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

//animations
import { fade, buttonAnimation, routeAnimations } from '../animations/Animations';

//components
import BGVideoDiv from '../components/UI/BGVideoDiv';
import FullScreenDiv from '../components/UI/FullScreenDiv';

//media
import RoadImage from '../images/road.jpeg';
import RoadMP4 from '../video/forestDrive.mp4';


export default function About() {
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
            <section id="aboutUsHero" className='autoScrollChild'>
                <BGVideoDiv imagePlaceholder={RoadImage} mp4Vid={RoadMP4}>
                    <motion.div className='bannerInner' initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fade} transition={{ delay: 0.3, duration: 1 }}>
                        <motion.h1 variants={fade}>About Us</motion.h1>
                        <motion.p variants={fade}>WebTech is a development firm based out of San Diego, California.  We specialize in website and application design and development for businesses.  We cover everything from the core planning phase through the complete development lifecycle.  Having a good core web infrasctructure in place using the most modern tools will help you stand out in the marketplace and be two steps ahead of the competition at all times.  Let WebTech develop your online presence.</motion.p>
                    </motion.div>
                </BGVideoDiv>
            </section>

            <section id="services" className='autoScrollChild'>
                <FullScreenDiv background={'#000'}>
                    <div className='servicesWrapper'>
                        <motion.h2 initial="hidden" whileInView="visible" variants={fade}>Services We Offer</motion.h2>
                        <div className='servicesGrid'>
                            <motion.ul initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fade} transition={{ delay: 0.3, duration: 1, delayChildren: 0.3, staggerChildren: 0.3 }}>
                                <motion.li variants={fade}>Graphic Design</motion.li>
                                <motion.li variants={fade}>UI/UX Design</motion.li>
                                <motion.li variants={fade}>SEO and Marketing Strategy</motion.li>
                            </motion.ul>
                            <motion.ul initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fade} transition={{ delay: 0.7, duration: 1, delayChildren: 1, staggerChildren: 0.3 }}>
                                <motion.li variants={fade}>Web and Application Development</motion.li>
                                <motion.li variants={fade}>Web and Application Hosting Services</motion.li>
                                <motion.li variants={fade}>Analytics Services</motion.li>
                            </motion.ul>
                        </div>
                        <motion.button className='button' whileHover={buttonAnimation.hover} whileTap={buttonAnimation.click} onClick={()=> {navigate('/contact')}}>Contact Us</motion.button>
                    </div>
                </FullScreenDiv>
            </section>
        </Div>
    </motion.main>
  )
}

const Div = styled.div`
    #services {
        width: 100%;
        color: #fff;

        h2 {
            text-align: center;
            font-size: 3rem;
            font-weight: 400;
            padding: 50px 20px 30px;
        }

        .servicesWrapper {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            button {
                margin-top: 35px;
            }
        }

        .servicesGrid {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            
            ul {
                list-style-type: none;

                li {
                    margin: 20px;
                    font-size: 1.5rem;
                    font-weight: 300;
                }
            }
        }
    }
`;