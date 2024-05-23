import React, { useState } from 'react';
import sendMessage from '../services/DiscordApi';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleClick = () => {
        const content = `Oggetto: ${subject} \n Email: ${email} \n\n Messaggio: ${message}`;
        sendMessageToDiscord(email, content);
        // Pulisci il modulo dopo l'invio
        setEmail('');
        setSubject('');
        setMessage('');
    };

    const sendMessageToDiscord = (email, content) => {
        sendMessage(email, content);
    };

    return (
        <section className="rounded-lg p-8 shadow-4xl container mx-auto px-8">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md shadow-2xl">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-whiteBase dark:text-white">Contact Me</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-whiteBase dark:text-gray-400 sm:text-xl">For assistance or inquiries, please contact me via email. im here to help and will respond promptly. Thank you for your support!</p>
                <form className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-whiteBase dark:text-gray-300">Your email</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="shadow-sm bg-whiteBase border border-gray-300 text-darkBase text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="example@gmail.com" required />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-whiteBase dark:text-gray-300">Subject</label>
                        <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="block p-3 w-full text-sm text-darkBase bg-whiteBase rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let me know how I can help you" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-whiteBase dark:text-gray-400">Your message</label>
                        <textarea id="message" rows="6" value={message} onChange={(e) => setMessage(e.target.value)} className="block p-2.5 w-full text-sm text-darkBase bg-whiteBase rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="button" className="bg-cyanBase hover:opacity-60 text-darkBase font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out" onClick={handleClick}>Send message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
