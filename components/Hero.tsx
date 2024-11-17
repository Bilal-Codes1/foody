import Chicken from "@/public/hero.png";
import Onion from "@/public/onion.png";
import Tomato from "@/public/tomato.png";
import Chilli from "@/public/chilli.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="px-4 home sm:px-16 py-12 flex flex-col sm:flex-row justify-between items-center">
      {/* Left Content */}
      <div className="max-w-xl mb-8 sm:mb-0">
        <div className="px-8 py-2 w-fit mb-6 border border-primary bg-tertiary/15 rounded-full text-primary font-medium">
          Tasty Food Forever
        </div>
        <h1 className="text-[36px] sm:text-[56px] hero-text leading-tight mb-6 font-bold">
          Eat Your Chicken Just How{" "}
          <span className="text-primary">You Like it!</span>
        </h1>
        <p className="text-secondary text-lg sm:text-xl mb-6 leading-relaxed">
          Chicken thighs, chicken drumsticks, buffalo <br />
          hot sauce, cayenne pepper, garlic powder
        </p>
        <div className="flex items-center gap-5">
          <button className="px-6 py-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 drop-shadow">
            See Menu
          </button>
        </div>
        {/* Stats Section */}
        <div className="flex gap-8 items-center mt-12 flex-wrap justify-center sm:justify-start">
          {[
            { count: "5000+", label: "Customers" },
            { count: "8000+", label: "Deliveries" },
            { count: "1000+", label: "Ratings" },
          ].map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-secondary"
            >
              <span className="text-3xl">{stat.count}</span>
              <span className="text-md font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative flex-shrink-0 w-full sm:w-auto">
        {/* Chicken Image */}
        <Image
          src={Chicken}
          alt="chicken"
          className="w-full sm:w-[500px] animate-fade-in-up"
        />
        {/* Floating Ingredients */}
        <Image
          src={Onion}
          alt="onion"
          className="w-16 sm:w-20 absolute top-0 left-8 sm:left-10 animate-float"
        />
        <Image
          src={Tomato}
          alt="tomato"
          className="w-20 sm:w-24 absolute bottom-0 right-8 sm:right-10 animate-float"
        />
        <Image
          src={Chilli}
          alt="chilli"
          className="w-20 sm:w-24 absolute bottom-10 left-8 sm:left-10 animate-float"
        />
      </div>
    </div>
  );
};

export default Hero;
