import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

//components
import FullScreenDiv from '../components/UI/FullScreenDiv';
import BGVideoDiv from '../components/UI/BGVideoDiv';

//animations

//media


export default function Portfolio() {
  return (
    <main className='autoScrollParent'>
        <Div>
            <section className='autoScrollChild'></section>
            <section className='autoScrollChild'></section>
            <section className='autoScrollChild'></section>
            <section className='autoScrollChild'></section>
            <section className='autoScrollChild'></section>
        </Div>
    </main>
  )
}

const Div = styled.div`

`;
