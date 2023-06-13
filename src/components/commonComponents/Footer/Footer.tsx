import { FC } from 'react';
import { BsGithub, BsInstagram, BsLinkedin, BsTelegram } from 'react-icons/bs';

const Footer: FC = () => {
  const footerLinks = [
    {
      id: 'instagram-link',
      href: 'https://www.instagram.com/ww_side/',
      icon: <BsInstagram size={30} color="white" />,
    },
    {
      id: 'telegram-link',
      href: 'https://t.me/side_culture',
      icon: <BsTelegram size={30} color="white" />,
    },
    {
      id: 'github-link',
      href: 'https://github.com/ww-side',
      icon: <BsGithub size={30} color="white" />,
    },
    {
      id: 'linkedin-link',
      href: 'https://www.linkedin.com/in/daniil-metelia-371218274/',
      icon: <BsLinkedin size={30} color="white" />,
    },
  ];

  return (
    <div className="bg-zinc-800 shadow-md flex items-center justify-between p-2">
      <h2 className="text-4xl text-white">Task Flow</h2>
      <div className="flex items-center gap-4">
        {footerLinks.map(item => (
          <a
            key={item.id}
            className="hover:opacity-50 transition duration-200"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
