import { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return <div className="bg-zinc-900 text-white">{children}</div>;
};

export default MainLayout;
