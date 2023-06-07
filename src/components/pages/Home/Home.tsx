import Footer from '../../UI/Footer/Footer.tsx';
import Reviews from './Reviews/Reviews.tsx';
import About from './About/About.tsx';
import Faq from './Faq/Faq.tsx';
import Title from './Title/Title.tsx';

const Home = () => {
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
