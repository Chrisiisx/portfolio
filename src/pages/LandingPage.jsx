import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>
      <div className='flex h-screen bg-darkBase'>
        <div className="m-auto">
          <h3 className="text-8xl text-whiteBase text-center">
            <p className="text-pinkBase">
              {`<`}
              <Link to="/whoami" className="text-whiteBase cursor-pointer">Chris</Link>
              {`/>`}
            </p>
          </h3>
          <p className="text-center text-4xl text-paragraphBase">Christian Portoghesi</p>
          <div className="flex justify-center mt-10">
            <Link to="/portfolio" className="bg-pinkBase hover:bg-yellowBaseHover text-darkBase font-bold py-4 px-8 rounded-full transition duration-300 ease-in-out">
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
