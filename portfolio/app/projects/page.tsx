import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Project One',
    description: 'A modern web application built with Next.js and TypeScript',
    image: '/project1.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/yourusername/project1',
  },
  {
    title: 'Project Two',
    description: 'Full-stack application with real-time features',
    image: '/project2.jpg',
    tags: ['React', 'Node.js', 'Socket.IO'],
    link: 'https://github.com/yourusername/project2',
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-12">
        My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
          >
            <div className="relative h-48 w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-20"></div>
              {/* Add project image here */}
              {/* <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              /> */}
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                View Project
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
