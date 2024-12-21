import Banner from "./Banner";
import Categories from "./Categories";
import FAQ from "./FAQ";
import Features from "./Features";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className="">
      <div>
        <Banner></Banner>
      </div>
      <div>
        <Features></Features>
      </div>
      <div>
        <Categories></Categories>
      </div>
      <div>
        <Testimonial></Testimonial>
      </div>
      <div>
        <FAQ></FAQ>
      </div>
    </div>
  );
};

export default Home;
