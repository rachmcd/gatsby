import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import '../styles/index.css';

const CreditsDiv = styled.div`
  font-size: 16px;

`

function Index() {
  
  return (
    <main>
      <Helmet>
        <title>Rach McD</title>
      </Helmet>
      <h1>Rachael McDonald</h1>
      <h2>Production, Animation, VR Dev and Design</h2>
      <iframe src="https://drive.google.com/file/d/1gDimoQIvk-dwoSAL90lAuS51qQp-xZop/preview" title ="2D Animation Reel" width="640" height="360"></iframe>
      
      
      <CreditsDiv>
          {/* TODO: styling and font size */}
        <p>Music: Blippy Trance by Kevin MacLeod</p>
        <p>Link: https://incompetech.filmmusic.io/song/5759-blippy-trance</p>
        <p>License: http://creativecommons.org/licenses/by/4.0/</p>
      </CreditsDiv>
      <p>
        <a
          href="https://github.com/vercel/vercel/blob/master/gatsby"
          target="_blank"
          rel="noreferrer noopener"
        >
          This project
        </a>{' '}
        is a <a href="https://www.gatsbyjs.org/">Gatsby</a> app with two
        directories, <code>/src</code> for static content and <code>/api</code>{' '}
        which contains a serverless{' '}
        <a href="https://nodejs.org/en/">Node.js (TypeScript)</a> function. See{' '}
        <a href="/api/date">
          <code>api/date</code> for the Date API with Node.js (TypeScript)
        </a>
      </p>
      <br />
      <h2>The date according to Node.js (TypeScript) is:</h2>
      
    </main>
  );
}

export default Index;
