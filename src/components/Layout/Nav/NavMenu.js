import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import { 
  navBGAnimation, 
  navMenuAnimation,
  navLinkAnimation 
}  from '../../../animations/NavBar';

export default function NavMenu({ isOpen }) {
  return (
    <Div initial="closed" as={motion.div} animate={isOpen ? "open" : "closed"} variants={navBGAnimation}>
      <motion.ul animate={isOpen ? "open" : "closed"} variants={navMenuAnimation}>
        <motion.li variants={navLinkAnimation}>
          <NavLink 
            to="/"
            className={isActive => `navLink ${isActive ? 'active': ''}`}
          >
            Home
          </NavLink>
        </motion.li>
        <motion.li variants={navLinkAnimation}>
          <NavLink 
            to="/about"
            className={isActive => `navLink ${isActive ? 'active': ''}`}
          >
            About
          </NavLink>
        </motion.li>
        <motion.li variants={navLinkAnimation}>
          <NavLink 
            to="/portfolio"
            className={isActive => `navLink ${isActive ? 'active': ''}`}
          >
            Portfolio
          </NavLink>
        </motion.li>
        <motion.li variants={navLinkAnimation}>
          <NavLink 
            to="/contact"
            className={isActive => `navLink ${isActive ? 'active': ''}`}
          >
            Contact
          </NavLink>
        </motion.li>
      </motion.ul>
    </Div>
  )
}

const Div = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100vh;
  z-index: 90;
  background: #333;

  ul {
    list-style-type: none;
    width: 100%;
    overflow: hidden;

    li {
      width: 100%;
      transition: all 0.2s ease;

      .navLink {
        display: block;
        padding: 15px 30px;
        color: #fff;
        font-size: 1.5rem;
        font-weight: 300;
        transition: all 0.2s ease;
        width: 100%;
      }

      &:hover {
        background: #fff;

        .navLink {
          color: #000;
          padding: 15px 30px 15px 40px;
        }
      }
    }
  }
`;