import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Input from '../components/common/Input';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Welcome Back</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Please sign in to continue</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            required
          />
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-600 dark:text-gray-300">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <Link to="/forgot-password" className="text-primary dark:text-primary-400 hover:text-secondary dark:hover:text-primary-300">
              Forgot Password?
            </Link>
          </div>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
        <p className="text-center mt-6 text-gray-600 dark:text-gray-300">
          Don't have an account?{' '}
          <Link to="/register" className="text-primary dark:text-primary-400 hover:text-secondary dark:hover:text-primary-300">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login; 