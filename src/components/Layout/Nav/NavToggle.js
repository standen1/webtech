import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

//borrowed from example on Framer Motion's website
const Path = props => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="#fff"
      strokeLinecap="round"
      {...props}
    />
  );
  
  export const NavToggle = ({ toggle }) => (
    <Button onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </Button>
  );

const Button = styled.button`
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    cursor: pointer;
    position: fixed;
    z-index: 100;
    top: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: transparent;
`;