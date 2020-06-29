import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Helmet>
        <title>Rach McD</title>
      </Helmet>
      <h1>Rachael McDonald</h1>
      <h2>Production, Animation, VR Dev and Design</h2>
    {/* <iframe src="https://drive.google.com/file/d/1gDimoQIvk-dwoSAL90lAuS51qQp-xZop/preview" title ="2D Animation Reel" width="640" height="360" playlist=&loop=1></iframe> */}
      <h3>  
        {/* TODO: styling and font size */}
      Music: Blippy Trance by Kevin MacLeod
      <br/>
      Link: https://incompetech.filmmusic.io/song/5759-blippy-trance
      <br/>
      License: http://creativecommons.org/licenses/by/4.0/
      <br/>
      </h3> 
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
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default Index;
