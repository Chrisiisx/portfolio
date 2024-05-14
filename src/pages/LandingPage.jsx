import React from 'react';
import { Link } from 'react-router-dom';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';

function LandingPage() {
  return (
    <body className='bg-darkBase'>
      <div className='flex bg-darkBase justify-center items-center py-96 pb-32'>
        <div className="m-auto">
          <h3 className="text-8xl text-whiteBase text-center">
            <p className="text-cyanBase">
              {`<`}
              <Link to="/whoami" className="text-whiteBase cursor-pointer">Chris</Link>
              {`/>`}
            </p>
          </h3>
          <p className="text-center text-4xl text-paragraphBase">Christian Portoghesi</p>
          <div className="flex justify-center mt-10">
            <Link to="portfolio" className="bg-cyanBase hover:opacity-60 text-darkBase font-bold py-4 px-8 rounded-full transition duration-300 ease-in-out">
              View Portfolio
            </Link>
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
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-whiteBase dark:text-white p-12">Portfolio</h2>
      <Timeline />

      <section className="rounded-lg p-8 shadow-4xl container mx-auto px-8">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md shadow-2xl">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-whiteBase dark:text-white">Contact Me</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-whiteBase dark:text-gray-400 sm:text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus ea, numquam quod recusandae eos distinctio harum magni.</p>
          <form action="#" className="space-y-8">
            <div>
              <label for="email" className="block mb-2 text-sm font-medium text-whiteBase dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-whiteBase border border-gray-300 text-darkBase text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="example@gmail.com" required />
            </div>
            <div>
              <label for="subject" className="block mb-2 text-sm font-medium text-whiteBase dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-darkBase bg-whiteBase rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let me know how i can help you" required />
            </div>
            <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-whiteBase dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-darkBase bg-whiteBase rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" className="bg-cyanBase hover:opacity-60 text-darkBase font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">Send message</button>
          </form>
        </div>
      </section>
      <div className="w-full bg-footerColor p-4 text-center text-whiteBase">
        Made with ❤️ by Chris
      </div>
    </body >
  );
}

export default LandingPage;
