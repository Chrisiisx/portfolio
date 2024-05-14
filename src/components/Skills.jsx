import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJs, faReact, faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';


const Skills = () => {
    const [showMoreSkills, setShowMoreSkills] = useState(false);
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
    const toggleSkillsVisibility = () => {
        setShowMoreSkills(!showMoreSkills);
    };

    

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl text-center text-whiteBase mb-8 font-extrabold">My Skills</h2>
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        {skills.slice(0, showMoreSkills ? skills.length : 4).map((skills, index) => (
                            <div className="bg-darkBase rounded-lg p-4 shadow-2xl" key={index}>
                                <div className="flex items-center justify-center mb-4">
                                    {skills.icon}
                                </div>
                                <p className="text-center text-whiteBase font-semibold mb-2">{skills.title}</p>
                                <div className="w-32 h-4 bg-gray-400 rounded-full">
                                    <div
                                        className="h-full bg-cyanBase rounded-full"
                                        style={{ width: `${skills.percentage}%` }}
                                    ></div>
                                </div>
                                <p className="text-center text-paragraphBase mt-2">{skills.percentage}%</p>
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
    )
}

export default Skills