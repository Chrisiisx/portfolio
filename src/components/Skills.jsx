import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faJs, faReact, faPython, faJava, faNodeJs, faDiscord, faNfcDirectional } from '@fortawesome/free-brands-svg-icons';

function scrollToContactMe() {
    let contactMeDiv = document.getElementById('contactme');
    contactMeDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const Skills = () => {
    const [showMoreSkills, setShowMoreSkills] = useState(false);

    const skills = [
        { icon: <FontAwesomeIcon icon={faHtml5} size="3x" color='white' />, title: 'HTML5', percentage: 100, url: "https://www.html.it/guide/guida-html5/" },
        { icon: <FontAwesomeIcon icon={faJs} size="3x" color='white' />, title: 'JavaScript', percentage: 85, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { icon: <FontAwesomeIcon icon={faReact} size="3x" color='white' />, title: 'React', percentage: 65, url: "https://reactjs.org/" },
        { icon: <FontAwesomeIcon icon={faPython} size="3x" color='white' />, title: 'Python', percentage: 70, url: "https://www.python.org/" },
        { icon: <FontAwesomeIcon icon={faJava} size="3x" color='white' />, title: 'Java', percentage: 70, url: "https://www.java.com/" },
        { icon: <FontAwesomeIcon icon={faNodeJs} size="3x" color='white' />, title: 'NodeJs', percentage: 80, url: "https://nodejs.org/" },
        { icon: <FontAwesomeIcon icon={faDiscord} size="3x" color='white' />, title: 'Discord.js', percentage: 80, url: "https://discord.js.org/" },
        { icon: <FontAwesomeIcon icon={faNfcDirectional} size="3x" color='white' />, title: 'Databases', percentage: 70, url: "https://datasciencedojo.com/blog/understanding-databases/" },
    ];

    const toggleSkillsVisibility = () => {
        setShowMoreSkills(!showMoreSkills);
    };

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl text-center text-whiteBase mb-8 font-extrabold">My Skills</h2>
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        {skills.slice(0, showMoreSkills ? skills.length : 4).map((skill, index) => (
                            <div className="bg-darkBase rounded-lg p-4 shadow-2xl" key={index}>
                                <div className="flex items-center justify-center mb-4">
                                    {skill.icon}
                                </div>
                                <p className="text-center text-whiteBase font-semibold mb-2 hover:underline">
                                    <a href={skill.url} target='_blank'>{skill.title}</a>
                                </p>
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
                {showMoreSkills && (
                    <div className="flex justify-center mt-4">
                        <p className="text-center text-paragraphBase text-lg mb-8">
                            If you want to know more about my skills, <a className="underline hover:cursor-pointer" onClick={scrollToContactMe}>contact me.</a>
                        </p>
                    </div>
                )}
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
    );
};

export default Skills;
