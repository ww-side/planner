import Footer from '../../components/commonComponents/Footer/Footer.tsx';
import Reviews from '../../components/Home/Reviews/Reviews.tsx';
import About from '../../components/Home/About/About.tsx';
import Faq from '../../components/Home/Faq/Faq.tsx';
import Title from '../../components/Home/Title/Title.tsx';

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
