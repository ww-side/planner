import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="bg-zinc-900 text-white">{children}</div>;
};

export default Layout;
