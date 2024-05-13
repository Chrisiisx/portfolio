import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJs, faReact, faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';


function LandingPage() {
  const skills = [
    { icon: <FontAwesomeIcon icon={faHtml5} size="3x" color='white' />, title: 'HTML5', percentage: 100 },
    { icon: <FontAwesomeIcon icon={faCss3} size="3x" color='white' />, title: 'CSS3', percentage: 80 },
    { icon: <FontAwesomeIcon icon={faJs} size="3x" color='white' />, title: 'JavaScript', percentage: 85 },
    { icon: <FontAwesomeIcon icon={faReact} size="3x" color='white' />, title: 'React', percentage: 75 },
    { icon: <FontAwesomeIcon icon={faPython} size="3x" color='white' />, title: 'Python', percentage: 95 },
    { icon: <FontAwesomeIcon icon={faJava} size="3x" color='white' />, title: 'Java', percentage: 50 },
    { icon: <FontAwesomeIcon icon={faFileCode} size="3x" color='white' />, title: 'C++', percentage: 90 },
    { icon: <FontAwesomeIcon icon={faFileCode} size="3x" color='white' />, title: 'C', percentage: 75 },
  ];

  const [showMoreSkills, setShowMoreSkills] = useState(false);

  const toggleSkillsVisibility = () => {
    setShowMoreSkills(!showMoreSkills);
  };
  return (
    <body className='bg-darkBase'>
      <div className='flex h-screen bg-darkBase'>
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

      <section className="py-2">
        <div className="container mx-auto bg-darkBase">
          <h2 className="text-4xl text-center text-whiteBase font-bold mb-8">About Me</h2>
          <p className="text-center text-paragraphBase text-lg mb-8">
            I am a computer science student aspiring to become a Full Stack Developer.
            With this website, I showcase my personal projects and my skills.
            <br></br>
            Let's work together to bring your ideas to life!
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center text-whiteBase font-bold mb-8">My Skills</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {skills.slice(0, showMoreSkills ? skills.length : 4).map((skill, index) => (
                <div className="bg-darkBase rounded-lg p-4 shadow-2xl" key={index}>
                  <div className="flex items-center justify-center mb-4">
                    {skill.icon}
                  </div>
                  <p className="text-center text-whiteBase font-semibold mb-2">{skill.title}</p>
                  <div className="w-32 h-4 bg-gray-400 rounded-full">
                    <div
                      className="h-full bg-cyanBase rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-center text-paragraphBase mt-2">{skill.percentage}%</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={toggleSkillsVisibility}
              className="bg-cyanBase hover:opacity-60 text-darkBase font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
            >
              {showMoreSkills ? 'Show less' : 'Show more'}
            </button>
          </div>
        </div>
      </section>

      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center text-whiteBase font-bold mb-8">Contact Me</h2>
          <p className="text-center text-paragraphBase text-lg mb-8">
            If you have any questions or would like to discuss a project, feel free to reach out to me.
            I'm always open to new opportunities and collaborations.
          </p>
          <div className="flex justify-center">
            <a href="mailto:portoschristian25@gmail.com" className="bg-cyanBase hover:opacity-60 text-darkBase font-bold py-4 px-8 rounded-full transition duration-300 ease-in-out">
              Get in Touch
            </a>
          </div>
        </div>
      </section> */}
      <section className="rounded-lg p-8 shadow-4xl container mx-auto px-8">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md shadow-2xl">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-whiteBase dark:text-white">Contact Me</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-whiteBase dark:text-gray-400 sm:text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus ea, numquam quod recusandae eos distinctio harum magni.</p>
          <form action="#" className="space-y-8">
            <div>
              <label for="email" className="block mb-2 text-sm font-medium text-whiteBase dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-darkBase text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="example@gmail.com" required/>
            </div>
            <div>
              <label for="subject" className="block mb-2 text-sm font-medium text-whiteBase dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-darkBase bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let me know how i can help you" required/>
            </div>
            <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-whiteBase dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-darkBase bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" className="bg-cyanBase hover:opacity-60 text-darkBase font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">Send message</button>
          </form>
        </div>
      </section>
    </body>
  );
}

export default LandingPage;
