export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
        About Me
      </h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          I am a passionate developer with expertise in building modern web applications. 
          With a strong foundation in both frontend and backend development, I strive to 
          create elegant solutions that solve real-world problems.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4">
          Experience
        </h2>
        <div className="space-y-8">
          <div className="border-l-4 border-indigo-500 pl-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Senior Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Company Name • 2020 - Present</p>
            <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Led development of multiple high-impact projects</li>
              <li>Mentored junior developers and conducted code reviews</li>
              <li>Implemented best practices and modern development workflows</li>
            </ul>
          </div>

          <div className="border-l-4 border-indigo-500 pl-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Full Stack Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Previous Company • 2018 - 2020</p>
            <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Developed and maintained multiple web applications</li>
              <li>Collaborated with cross-functional teams</li>
              <li>Improved application performance and user experience</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4">
          Education
        </h2>
        <div className="border-l-4 border-indigo-500 pl-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Bachelor's in Computer Science
          </h3>
          <p className="text-gray-600 dark:text-gray-300">University Name • 2014 - 2018</p>
        </div>
      </div>
    </div>
  );
}