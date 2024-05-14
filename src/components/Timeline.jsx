import React from 'react';

const Timeline = () => {
    return (
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">

            <li>
                <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                    <time className="font-mono italic">2021</time>
                    <div className="text-lg font-black text-whiteBase">Gymtout</div>
                    Gymtout was a project in development, it was a website where you could create your personalized workouts, modify them as you like, or publish them online to exchange information with other users. It was developed with ReactJS.
                </div>
                <hr />
            </li>

            <li>
                <hr />
                <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-end mb-10">
                    <time className="font-mono italic">2022</time>
                    <div className="text-lg font-black text-whiteBase">Tanisan</div>
                    Tanisan was a multi-purpose Discord bot, developed using Node.js with the Discord.js library. A Discord bot is an automated program that can perform various tasks within Discord servers, such as moderating, managing roles, providing information, or playing games.
                </div>
                <hr />
            </li>

            <li>
                <hr />
                <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                    <time className="font-mono italic">2023</time>
                    <div className="text-lg font-black text-whiteBase">RebornPVP</div>
                    RebornPVP was a FiveM server where a player could train their driving or shooting skills. FiveM is a multiplayer modification framework for Grand Theft Auto V, allowing custom multiplayer experiences on dedicated servers, written in Lua.
                </div>
                <hr />
            </li>

            <li>
                <hr />
                <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-end mb-10">
                    <time className="font-mono italic">2019</time>
                    <div className="text-lg font-black text-whiteBase">YoutubeDownloader</div>
                    YoutubeDownloader was a Python-based software that allowed users to download YouTube videos at the highest resolution without any loss of quality.
                </div>
                <hr />
            </li>

            <li>
                <hr />
                <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                    <time className="font-mono italic">2018</time>
                    <div className="text-lg font-black text-whiteBase">Password Saver</div>
                    Password Saver was a Python-based software that allowed users to save login credentials locally through an encrypted database file.
                </div>
            </li>
            
        </ul>
    );
};

export default Timeline;
