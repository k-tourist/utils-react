import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Input from '../components/common/Input';

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Create Account</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Join our community today</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            required
          />
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <Input
            label="Password"
            type="password"
            placeholder="Create a password"
            required
          />
          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            required
          />
          <div className="text-sm">
            <label className="flex items-center text-gray-600 dark:text-gray-300">
              <input type="checkbox" className="mr-2" required />
              I agree to the{' '}
              <Link to="/terms" className="text-primary dark:text-primary-400 hover:text-secondary dark:hover:text-primary-300 ml-1">
                Terms of Service
              </Link>
            </label>
          </div>
          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </form>
        <p className="text-center mt-6 text-gray-600 dark:text-gray-300">
          Already have an account?{' '}
          <Link to="/login" className="text-primary dark:text-primary-400 hover:text-secondary dark:hover:text-primary-300">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register; 