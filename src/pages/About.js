import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import BGVideoDiv from '../components/UI/BGVideoDiv';

import RoadImage from '../images/road.jpeg';
import RoadMP4 from '../images/road.mp4';

export default function About() {
    // const RoadMP4 = '//player.vimeo.com/video/350245163?title=0&portrait=0&byline=0&autoplay=1';
  return (
    <main>
        <Div>
            <section id="aboutUsHero">
                <BGVideoDiv imagePlaceholder={RoadImage} mp4Vid={RoadMP4}></BGVideoDiv>
            </section>
        </Div>
    </main>
  )
}

const Div = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

    #aboutUsHero {
        width: 100%;
        height: 100%;
    }
`;