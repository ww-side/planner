import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../UI/Header/Header.tsx';
import Layout from '../Layout/Layout.tsx';

const Screen: FC = () => {
  return (
    <div className="h-screen bg-zinc-900 flex flex-col">
      <Header />
      <div className="flex-grow">
        <Layout>
          <Outlet />
        </Layout>
      </div>
    </div>
  );
};
export default Screen;
