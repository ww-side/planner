import { FC } from 'react';
import { Link } from 'react-router-dom';

const ErrorPage: FC = () => {
  return (
    <div className="bg-zinc-800 flex items-center justify-center h-screen">
      <div className="max-w-lg mx-auto p-8 bg-zinc-900 rounded shadow">
        <h1 className="text-4xl text-white text-center mb-6">Error 404</h1>
        <p className="text-xl text-white text-center mb-6">Page not found.</p>
        <Link className="text-lg text-white text-center hover:underline" to="/">
          Return to home page
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
