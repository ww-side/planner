import { FC } from 'react';
import { reviews } from '../data.tsx';

const Reviews: FC = () => {
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
