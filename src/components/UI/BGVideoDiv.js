import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useWindowHeight } from '../../hooks/customHooks';

export default function BGVideoDiv({ imagePlaceholder, mp4Vid, webMVid, children }) {
  const screenHeight = useWindowHeight();

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
  height: ${props => props.height}px;
  background: ${props => props.background};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  .videoWrapper {
    video {
      object-fit: cover;
      width: 100%;
      height: ${props => props.height}px;
      
      top: 0;
      left: 0;
    }
  }

  .contentWrapper {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }
`;