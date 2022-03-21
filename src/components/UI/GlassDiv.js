import React from 'react';
import styled from 'styled-components';

export default function GlassDiv({children}) {
  return (
    <Div>
        {children}
    </Div>
  )
}

const Div = styled.div`
    border-radius: 1.5rem;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(3px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    
`;
