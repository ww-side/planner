import { FC } from 'react';
import { nanoid as id } from 'nanoid';
import './Faq.css';

const Faq: FC = () => {
  const faq = [
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
