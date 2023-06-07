import { FC } from 'react';
import { nanoid } from 'nanoid';
import boardImg from '../../../../assets/img/board.png';
import listImg from '../../../../assets/img/list.png';

const About: FC = () => {
  const about = [
    {
      id: nanoid(),
      title: 'Board',
      desc:
        'A task board is a handy tool that helps you organize and keep track of your task or project list. ' +
        'It is an electronic surface on which you can write and move tasks around. The task board allows ' +
        'the team or individual performer to easily visualize the current status of a project, track ' +
        'progress, and manage priorities.',
      img: <img src={boardImg} alt="board" />,
    },
    {
      id: nanoid(),
      title: 'Task List',
      desc:
        'The task list will help you organize your tasks and mark their completion. ' +
        'You can use the list to easily indicate the current status of tasks. For example,' +
        'a task, when it is ready, can be marked "Completed".',
      img: <img src={listImg} alt="list" />,
    },
  ];

  return (
    <>
      <h2
        className="leading-normal font-semibold mt-10 mb-5 text-5xl
          text-transparent bg-clip-text bg-gradient-to-r from-blue-600
          to-violet-50"
      >
        Simple, but powerful
      </h2>
      <span className="text-xl w-5/12 mb-20">
        Task Flow helps you organize your thoughts and plan your day in a
        beautiful and simple app.
      </span>
      {about.map(item => (
        <div key={item.id} className="flex w-6/12 mb-5">
          <span className="text-left">
            <h3 className=" font-semibold text-3xl">{item.title}</h3>
            <p className="text-lg">{item.desc}</p>
          </span>
          {item.img}
        </div>
      ))}
    </>
  );
};

export default About;
