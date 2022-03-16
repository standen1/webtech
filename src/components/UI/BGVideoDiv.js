import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function BGVideoDiv({ imagePlaceholder, mp4Vid, webMVid, children }) {
  const [ screenHeight, setScreenHeight ] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener('resize', setScreenHeight(window.innerHeight));
  }, [])

  return (
    <Div height={screenHeight} background={imagePlaceholder} >
        <div className='videoWrapper'>
            <video width="100%" height="100%" preload="auto" autoPlay muted loop poster={imagePlaceholder} id="bgvid">
                <source src={webMVid} type="video/webm" />
                <source src={mp4Vid} type="video/mp4" />
            </video>
        </div>
        <div className='contentWrapper'>
            {children}
        </div>
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