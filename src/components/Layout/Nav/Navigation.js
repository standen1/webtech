import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { NavToggle } from './NavToggle';
import NavMenu from './NavMenu';
import Overlay from './Overlay';

export default function Navigation() {
    const [ navBarOpen, setNavBarOpen ] = useState(false);
    const closeNavBar = () => setNavBarOpen(false);
  return (
    <div>
        <motion.nav
            initial={false}
            animate={navBarOpen ? "open" : "closed"}
        >
            <NavToggle toggle={() => setNavBarOpen(!navBarOpen)} />
            <NavMenu isOpen={navBarOpen} closeNavBar={closeNavBar} />
            <Overlay isOpen={!navBarOpen} closeNav={closeNavBar} />
        </motion.nav>
    </div>
  )
}