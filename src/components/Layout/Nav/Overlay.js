import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { overlayAnimation } from '../../../animations/NavBar';

export default function Overlay({ closeNavBar, isOpen, closeNav }) {
  return (
    <Div as={motion.div} variants={overlayAnimation} onClick={closeNav}></Div>
  )
}

const Div = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
`;
