import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/index.tsx';
import MainLayout from '../../../layouts/MainLayout/index.tsx';
import HeaderLayout from '../../../layouts/HeaderLayout/index.tsx';

const Screen: FC = () => {
  return (
    <div className="h-screen bg-zinc-900 flex flex-col">
      <HeaderLayout>
        <Header />
      </HeaderLayout>
      <div className="flex-grow">
        <MainLayout>
          <Outlet />
        </MainLayout>
      </div>
    </div>
  );
};

export default Screen;
