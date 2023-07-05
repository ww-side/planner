import { FC, ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return <div className="bg-zinc-900 text-white">{children}</div>;
};

export default MainLayout;
