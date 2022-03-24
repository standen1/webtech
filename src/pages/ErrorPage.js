import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

//animations 
import { routeAnimations } from '../animations/Animations';

//components
import FullScreenDiv from '../components/UI/FullScreenDiv';

export default function ErrorPage() {
  return (
    <motion.main
        className='autoScrollParent'
        initial="initial"
        animate="in"
        exit="out"
        variants={routeAnimations}
    >
      <FullScreenDiv background="#000">
        <Div className='fullWrapper'>
          <h1>404 | Error</h1>
          <p>Sorry, the page you are trying to access was not found.</p>
        </Div>
      </FullScreenDiv>
    </motion.main>
  )
}

const Div = styled.div`
  color: #fff;
  flex-direction: column;

  h1 {
    font-size: 2.2rem;
    padding-bottom: 25px;
  }

  p {
    font-size: 1.2rem;
  }
`;
