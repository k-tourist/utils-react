import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../components/common/AnimatedCounter';

// Import all avatars
import avatar1 from '../assets/avatars/avatar1.png';
import avatar2 from '../assets/avatars/avatar2.png';
import avatar3 from '../assets/avatars/avatar3.png';
import avatar4 from '../assets/avatars/avatar4.png';
import avatar5 from '../assets/avatars/avatar5.png';

const Home = () => {
  const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-8">
        <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
          Welcome to <span className="text-primary dark:text-primary-400">Utils</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Your comprehensive utility platform. Experience the next generation of digital solutions.
        </p>

        {/* User Stats Section */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex -space-x-4">
            {avatars.map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                alt={`User ${index + 1}`}
                className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800 object-cover transition-transform hover:scale-110 hover:z-10"
              />
            ))}
            <div className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800 bg-primary dark:bg-primary-600 text-white flex items-center justify-center text-sm font-medium">
              +2k
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            <AnimatedCounter end={153200} /> Users
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Join our growing community of users worldwide
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <Link 
            to="/login"
            className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-200 flex items-center gap-2 dark:bg-primary-600 dark:hover:bg-primary-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
            Get Started
          </Link>
          <Link 
            to="/register"
            className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-200 flex items-center gap-2 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Learn More
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            title: "Smart Solutions",
            description: "Intelligent tools and features to streamline your workflow.",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            )
          },
          {
            title: "Real-time Monitoring",
            description: "Live data and advanced analytics at your fingertips.",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            )
          },
          {
            title: "24/7 Support",
            description: "Round-the-clock expert support for all your needs.",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            )
          }
        ].map((feature, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-gray-700"
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white text-center">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home; 