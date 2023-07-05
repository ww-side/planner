import { FC } from 'react';
import Footer from '../../components/common/Footer/index.tsx';
import Reviews from '../../components/shared/Reviews/index.tsx';
import Faq from '../../components/shared/Faq/index.tsx';
import Title from '../../components/shared/Title/index.tsx';
import About from '../../components/shared/About';

const Home: FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center mt-20">
        <Title />
        <Reviews />
        <About />
        <Faq />
      </div>
      <Footer />
    </>
  );
};

export default Home;
