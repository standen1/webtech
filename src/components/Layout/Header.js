import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

import Navigation from './Nav/Navigation';

export default function Header() {
  return (
    <SiteHeader>
        <Link to="/"><h1>WEBTECH</h1></Link>
        <Navigation />
    </SiteHeader>
  );
}

const SiteHeader = styled.header`
    width: 100%;
    height: 50px;
    background: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    h1 {
        margin-left: 30px;
        font-weight: 400;
    }
`;