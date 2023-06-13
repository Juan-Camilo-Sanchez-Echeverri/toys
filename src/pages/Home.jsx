import Navegacion from '../components/navegacion/Navegacion';
import Slider from '../components/slider/Slider';
import Categories from '../components/categories/Categories';
import Footer from '../components/footer/Footer';

export const Home = () => {
  return (
    <div>
      <Navegacion />
      <Slider />
      <Categories />
      <Footer />
    </div>
  );
};
