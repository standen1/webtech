import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function FullScreenDiv({ background, children}) {
  const [ screenHeight, setScreenHeight ] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener('resize', setScreenHeight(window.innerHeight));
  }, [])

  return (
    <Div height={screenHeight} background={background} >
      {children}
    </Div>
  )
}

const Div = styled.div`
  width: 100%;
  height: ${props => props.height + 10}px;
  background: ${props => props.background};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;