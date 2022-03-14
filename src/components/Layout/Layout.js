import React from 'react';
import styled from 'styled-components';
import Header from './Header';

export default function Layout(props) {
  return (
    <>
        <Header />
        <Main>
            {props.children}
        </Main>
    </>
  );
}

const Main = styled.main`    
    
`;