import { nanoid as id, nanoid } from 'nanoid';
import { FcBusinessman, FcBusinesswoman } from 'react-icons/fc';
import boardImg from '../../assets/img/board.png';
import listImg from '../../assets/img/board.png';

export const about = [
  {
    id: nanoid(),
    title: 'Board',
    desc: `A task board is a handy tool that helps you organize and keep track of your 
    task or project list. It is an electronic surface on which you can write and move 
    tasks around. The task board allows the team or individual performer to easily 
    visualize the current status of a project, track progress, and manage priorities.`,
    img: <img src={boardImg} alt="board" />,
  },
  {
    id: nanoid(),
    title: 'Task List',
    desc: `The task list will help you organize your tasks and mark their completion. 
    You can use the list to easily indicate the current status of tasks. For example, 
    a task, when it is ready, can be marked "Completed".`,
    img: <img src={listImg} alt="list" />,
  },
];

export const faq = [
  {
    id: id(),
    title:
      'I already use Trello, Notion, Airtable, etc... how is this different?',
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A 
        architecto commodi distinctio doloremque doloribus maxime necessitatibus 
        neque reprehenderit! Animi culpa dolore exercitationem id non nulla placeat 
        suscipit tenetur unde vero? Ad adipisci cupiditate debitis doloribus eaque esse 
        fuga fugiat itaque iusto laboriosam laborum, maiores nam nemo, nulla obcaecati 
        officiis pariatur placeat quaerat quas, quibusdam quo sint sunt ut v
        el voluptatem.`,
  },
  {
    id: id(),
    title: 'Who would be a good fit for Task Flow?',
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A 
        architecto commodi distinctio doloremque doloribus maxime necessitatibus 
        neque reprehenderit! Animi culpa dolore exercitationem id non nulla placeat 
        suscipit tenetur unde vero? Ad adipisci cupiditate debitis doloribus eaque esse 
        fuga fugiat itaque iusto laboriosam laborum, maiores nam nemo, nulla obcaecati 
        officiis pariatur placeat quaerat quas, quibusdam quo sint sunt ut v
        el voluptatem.`,
  },
  {
    id: id(),
    title: 'Do you guys have an iOS/Android app?',
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A 
        architecto commodi distinctio doloremque doloribus maxime necessitatibus 
        neque reprehenderit! Animi culpa dolore exercitationem id non nulla placeat 
        suscipit tenetur unde vero? Ad adipisci cupiditate debitis doloribus eaque esse 
        fuga fugiat itaque iusto laboriosam laborum, maiores nam nemo, nulla obcaecati 
        officiis pariatur placeat quaerat quas, quibusdam quo sint sunt ut v
        el voluptatem.`,
  },
];

export const reviews = [
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
