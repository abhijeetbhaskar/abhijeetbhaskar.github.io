import About from "../components/homepage/About";
import Clients from "../components/homepage/Clients";
import MainContent from "../components/MainContent";
import Service from "../components/homepage/Service";
import Testimonials from "../components/homepage/Testimonials";

const HomePage = () => {
  return (
    <>
      <MainContent pageName="about">
        <About />
        <Service />
        <Testimonials />
        <Clients />
      </MainContent>
    </>
  );
};

export default HomePage;
