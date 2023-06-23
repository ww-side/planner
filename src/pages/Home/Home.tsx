import Footer from '../../components/commonComponents/Footer/Footer.tsx';
import Reviews from '../../components/shared/Reviews/Reviews.tsx';
import About from '../../components/shared/About/About.tsx';
import Faq from '../../components/shared/Faq/Faq.tsx';
import Title from '../../components/shared/Title/Title.tsx';

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
