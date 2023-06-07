import { FC } from 'react';
import mockup from '../../../../assets/img/homeMockup.png';

const Title: FC = () => {
  return (
    <>
      <h1
        className="font-bold text-transparent text-7xl bg-clip-text
          bg-gradient-to-r from-blue-600 to-violet-50 mb-5"
      >
        Task Flow
      </h1>
      <h2 className="text-4xl mb-5">
        A better streamlined Task Workflow Management
      </h2>
      <img className="h-4/6 w-4/6 mb-10" src={mockup} alt="mock" />
    </>
  );
};

export default Title;
