import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Your Name</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              A passionate developer focused on creating beautiful and user-friendly applications
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get in touch
              </Link>
              <Link
                href="/projects"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                View Projects <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg opacity-20"></div>
            {/* Add your profile image here */}
            {/* <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              className="object-cover rounded-lg"
              priority
            /> */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-12 text-center">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Add your skills here */}
          {['JavaScript', 'React', 'Node.js', 'TypeScript'].map((skill) => (
            <div key={skill} className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <span className="text-lg font-medium text-gray-900 dark:text-white">{skill}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
