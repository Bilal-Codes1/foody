import Chicken from "@/public/hero.png";
import Onion from "@/public/onion.png";
import Tomato from "@/public/tomato.png";
import Chilli from "@/public/chilli.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="px-4 sm:px-16 laptop:px-24 xl:px-40 py-12 grid grid-cols-1 xl:place-items-center laptop:grid-cols-2 gap-y-12 items-center">
      {/* Left Content */}
      <div className="max-w-lg mx-auto laptop:mx-0 flex flex-col xl:justify-center text-center laptop:text-left">
        <div className="px-8 py-2 w-fit mb-6 border border-primary bg-tertiary/15 rounded-full text-primary font-medium mx-auto laptop:mx-0">
          Tasty Food Forever
        </div>
        <h1 className="text-[36px] md:text-[44px] laptop:text-[48px] xl:text-[60px] hero-text leading-tight mb-6 font-bold">
          Eat Your Chicken Just How{" "}
          <span className="text-primary">You Like it!</span>
        </h1>
        <p className="text-secondary text-lg md:text-xl xl:text-2xl laptop:text-xl mb-6 leading-relaxed">
          Chicken thighs, chicken drumsticks, buffalo{" "}
          <br className="hidden laptop:block" />
          hot sauce, cayenne pepper, garlic powder
        </p>
        <button className="px-6 xl:px-8 py-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 drop-shadow w-fit mx-auto laptop:mx-0">
          See Menu
        </button>
        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-8 mt-12">
          {[
            { count: "5000+", label: "Customers" },
            { count: "8000+", label: "Deliveries" },
            { count: "1000+", label: "Ratings" },
          ].map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-secondary"
            >
              <span className="text-3xl md:text-4xl laptop:text-4xl font-bold">
                {stat.count}
              </span>
              <span className="text-md font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative flex-shrink-0 w-full mx-auto laptop:mx-0 md:w-[450px] laptop:w-[400px] lg:w-[500px] xl:w-[650px]">
        {/* Chicken Image */}
        <Image
          src={Chicken}
          alt="chicken"
          className="w-full h-auto animate-fade-in-up"
        />
        {/* Floating Ingredients */}
        <Image
          src={Onion}
          alt="onion"
          className="w-16 laptop:w-20 absolute top-0 left-8 laptop:left-12 animate-float"
        />
        <Image
          src={Tomato}
          alt="tomato"
          className="w-20 laptop:w-24 absolute bottom-0 right-8 laptop:right-12 animate-float"
        />
        <Image
          src={Chilli}
          alt="chilli"
          className="w-20 laptop:w-24 absolute bottom-10 left-8 laptop:left-12 animate-float"
        />
      </div>
    </div>
  );
};

export default Hero;
