import React from 'react';
import { Link } from 'react-router-dom';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import Contact from '../components/Contact';

function scrollToPortfolio() {
  var portfolioDiv = document.getElementById('portfolio');
  portfolioDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function LandingPage() {
  return (
    <body className='bg-darkBase'>
      <div className='flex bg-darkBase justify-center items-center py-96 pb-32'>
        <div className="m-auto">
          <h3 className="text-8xl text-whiteBase text-center">
            <p className="text-cyanBase">
              {`<`}
              <Link className="text-whiteBase cursor-pointer">Chris</Link>
              {`/>`}
            </p>
          </h3>
          <p className="text-center text-4xl text-paragraphBase">Christian Portoghesi</p>
          <div className="flex justify-center mt-10">
            <button className="bg-cyanBase hover:opacity-60 text-darkBase font-bold py-4 px-8 rounded-full transition duration-300 ease-in-out" onClick={scrollToPortfolio}>
              View Portfolio
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto bg-darkBase">
        <h2 className="text-4xl text-center text-whiteBase font-bold mb-8 font-extrabold">About Me</h2>
        <p className="text-center text-paragraphBase text-lg mb-8">
          I am a computer science student aspiring to become a Full Stack Developer.
          With this website, I showcase my personal projects and my skills.
          <br></br>
          Let's work together to bring your ideas to life!
        </p>
      </div>

      <Skills />
      <div id='portfolio'>
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-whiteBase dark:text-white p-12">Portfolio</h2>

        <Timeline />
      </div>
      <div id='contactme'>

        <Contact />
      </div>

      <div className="w-full bg-footerColor p-4 text-center text-whiteBase">
        Made with ❤️ by Chris
      </div>
    </body >
  );
}

export default LandingPage;
