import { FC, ReactNode } from 'react';

interface HeaderLayoutProps {
  children: ReactNode;
}

const HeaderLayout: FC<HeaderLayoutProps> = ({ children }) => {
  return <div className="bg-zinc-800 text-white shadow-md">{children}</div>;
};

export default HeaderLayout;
