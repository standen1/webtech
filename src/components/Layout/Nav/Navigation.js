import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { NavToggle } from './NavToggle';
import NavMenu from './NavMenu';

export default function Navigation() {
    const [ navBarOpen, setNavBarOpen ] = useState(false);
  return (
    <div>
        <motion.nav
            initial={false}
            animate={navBarOpen ? "open" : "closed"}
        >
            <NavToggle toggle={() => setNavBarOpen(!navBarOpen)} />
            <NavMenu isOpen={navBarOpen} />
        </motion.nav>
    </div>
  )
}