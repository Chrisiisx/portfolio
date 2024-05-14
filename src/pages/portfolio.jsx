import React from 'react';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Tanisan', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales ullamcorper risus eget rhoncus.',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    title: 'Progetto 2',
    description: 'Vestibulum et lacus quis magna varius tincidunt id id odio. Maecenas ultricies turpis vitae diam feugiat, at aliquam turpis vestibulum.',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 3,
    title: 'Progetto 2',
    description: 'Vestibulum et lacus quis magna varius tincidunt id id odio. Maecenas ultricies turpis vitae diam feugiat, at aliquam turpis vestibulum.',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 4,
    title: 'Progetto 2',
    description: 'Vestibulum et lacus quis magna varius tincidunt id id odio. Maecenas ultricies turpis vitae diam feugiat, at aliquam turpis vestibulum.',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 5,
    title: 'Progetto 2',
    description: 'Vestibulum et lacus quis magna varius tincidunt id id odio. Maecenas ultricies turpis vitae diam feugiat, at aliquam turpis vestibulum.',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 6,
    title: 'Progetto 2',
    description: 'Vestibulum et lacus quis magna varius tincidunt id id odio. Maecenas ultricies turpis vitae diam feugiat, at aliquam turpis vestibulum.',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 7,
    title: 'Progetto 2',
    description: 'Vestibulum et lacus quis magna varius tincidunt id id odio. Maecenas ultricies turpis vitae diam feugiat, at aliquam turpis vestibulum.',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 8,
    title: 'Progetto 2',
    description: 'Vestibulum et lacus quis magna varius tincidunt id id odio. Maecenas ultricies turpis vitae diam feugiat, at aliquam turpis vestibulum.',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 9,
    title: 'Progetto 2',
    description: 'Vestibulum et lacus quis magna varius tincidunt id id odio. Maecenas ultricies turpis vitae diam feugiat, at aliquam turpis vestibulum.',
    image: 'https://via.placeholder.com/300',
  }
];


const Portfolio = () => {
  let navigate = useNavigate();
  return (
    <body className='bg-darkBase'>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-extrabold mb-8 text-whiteBase">I Miei Progetti</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project) => (
            <div key={project.id} className="bg-darkBase rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover object-center" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-whiteBase">{project.title}</h2>
                <p className="text-paragraphBase">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-darkBase hover:opacity-60 text-whiteBase shadow-lg font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
        onClick={() => navigate("/")}
      >
        &lt;Home
      </button>
    </body>
  );
};

export default Portfolio;
