import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.tsx';
import MainLayout from '../../../layouts/MainLayout/MainLayout.tsx';
import HeaderLayout from '../../../layouts/HeaderLayout/HeaderLayout.tsx';

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