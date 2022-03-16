import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import BGVideoDiv from '../components/UI/BGVideoDiv';

import RoadImage from '../images/road.jpeg';
import RoadMP4 from '../images/road.mp4';

export default function About() {
  return (
    <main>
        <Div>
            <section id="aboutUsHero">
                <BGVideoDiv imagePlaceholder={RoadImage} mp4Vid={RoadMP4}>
                    <div id="about">
                        <h1>About Us</h1>
                        <p>WebTech is a development firm based out of San Diego, California.  We specialize in website and application design and development for businesses.  We cover everything from the core planning phase through the complete development lifecycle.  Having a good core web infrasctructure in place using the most modern tools will help you stand out in the marketplace and be two steps ahead of the competition at all times.  Let WebTech develop your online presence.</p>
                    </div>
                </BGVideoDiv>
            </section>

            <section id="services">
                <h2>Services We Offer</h2>
            </section>
        </Div>
    </main>
  )
}

const Div = styled.div`
    #about {
        color: #fff;
        width: 100%;
        max-width: 600px;
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
`;