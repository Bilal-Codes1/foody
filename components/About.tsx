const About = () => {
  return (
    <div className="flex aboutus flex-col sm:flex-row items-center gap-8 sm:gap-16 justify-between p-8 sm:p-16">
      {/* Image */}
      <img
        src="./about.png"
        alt="noodles"
        width={500} // Set width and height for proper scaling
        height={500}
        className="w-full sm:w-[500px] h-auto" // Makes image responsive
      />
      {/* Text Content */}
      <div className="flex flex-col gap-4 sm:w-[50%]">
        <h1 className="text-[24px] sm:text-[32px] font-semibold text-left">
          About Us
        </h1>
        <p className="text-lg sm:text-2xl text-secondary">
          Welcome to Foody—where flavor meets heart. We’re passionate about
          crafting dishes inspired by global tastes and local ingredients.
          Whether you’re here for a quick bite or a special celebration, Foody
          offers an inviting atmosphere and food made to be savored. Join us and
          experience the joy of great food, made with love.
        </p>
      </div>
    </div>
  );
};

export default About;
