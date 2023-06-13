import { FC } from 'react';
import { nanoid } from 'nanoid';
import { FcBusinessman, FcBusinesswoman } from 'react-icons/fc';

const Reviews: FC = () => {
  const reviews = [
    {
      id: nanoid(),
      phrase: '"This is hands down the best app for timeboxing your day"',
      icon: <FcBusinesswoman className="my-auto" size={40} />,
      name: 'Sarah N.',
      title: 'Student @ Uchicago',
    },
    {
      id: nanoid(),
      phrase: '"The brain dump feature is insanely useful..."',
      icon: <FcBusinessman className="my-auto" size={40} />,
      name: 'Jonathan S.',
      title: 'Startup founder',
    },
    {
      id: nanoid(),
      phrase: '"...this app should not be free. It\'s perfectly!"',
      icon: <FcBusinessman className="my-auto" size={40} />,
      name: 'Oleg P.',
      title: 'Student @ CSTU',
    },
  ];

  return (
    <div className="flex gap-3 justify-center max-md:flex-col max-md:items-center">
      {reviews.map(user => (
        <div
          key={user.id}
          className="bg-slate-50 text-black gap-3 p-3 rounded-lg text-left w-3/12 shadow-xl max-md:w-8/12"
        >
          <span className="font-bold">{user.phrase}</span>
          <div className="flex gap-2">
            {user.icon}
            <span className="flex flex-col">
              {user.name}
              <span className="text-sm text-slate-500">{user.title}</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
