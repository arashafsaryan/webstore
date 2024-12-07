import Header from "../components/Header";
import TypeFood from "../components/TypeFood";
import Slider from "../components/NewProducts";
import SpecialProducts from "../components/SpecialProducts";
import Baner from "../components/Baner";
import Tools from "../components/Tools";
import Articles from "../components/Articles";

const HomePage = () => {
  return (
    <>
      <Header />
      <TypeFood />
      <Slider />
      <SpecialProducts />
      <Baner />
      <Tools />
      <Articles />
    </>
  );
};

export default HomePage;
