import { ReactNode } from 'react';

const HeaderLayout = ({ children }: { children: ReactNode }) => {
  return <div className="bg-zinc-800 text-white shadow-md">{children}</div>;
};

export default HeaderLayout;
