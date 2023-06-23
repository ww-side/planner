import { FC } from 'react';
import { faq } from '../dataHome.tsx';
import './Faq.css';

const Faq: FC = () => {
  return (
    <>
      <h2
        className="leading-normal font-semibold mt-10 mb-5 text-5xl
          text-transparent bg-clip-text bg-gradient-to-r
          from-blue-600 to-violet-50"
      >
        Frequently asked questions
      </h2>
      <div className="w-10/12 mb-10">
        {faq.map(item => (
          <details key={item.id}>
            <summary>{item.title}</summary>
            <p>{item.desc}</p>
          </details>
        ))}
      </div>
    </>
  );
};

export default Faq;
