import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";

const Home = () => {
  return (
    <div className="w-screen min-h-screen background">
      <Header />
      <Hero />
      <Menu />
      <About />
      <Reviews />
      <Footer />
    </div>
  );
};
export default Home;
