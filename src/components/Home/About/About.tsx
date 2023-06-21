import { FC } from 'react';
import { about } from '../data.tsx';

const About: FC = () => {
  return (
    <>
      <h2
        className="leading-normal font-semibold mt-10 mb-5 text-5xl
          text-transparent bg-clip-text bg-gradient-to-r from-blue-600
          to-violet-50"
      >
        Simple, but powerful
      </h2>
      <span className="text-xl w-5/12 mb-20 max-md:w-10/12">
        Task Flow helps you organize your thoughts and plan your day in a
        beautiful and simple app.
      </span>
      {about.map(item => (
        <div
          key={item.id}
          className="flex w-5/12 mb-5 flex-col justify-center items-center max-md:w-10/12 max-sm:w-11/12"
        >
          <h3 className="font-semibold text-3xl">{item.title}</h3>
          <p className="text-lg">{item.desc}</p>
          <span className="mt-5 w-7/12 max-lg:w-9/12 max-md:w-6/12 max-sm:w-8/12">
            {item.img}
          </span>
        </div>
      ))}
    </>
  );
};

export default About;
