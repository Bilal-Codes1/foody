const About = () => {
  return (
    <div className="aboutus grid grid-cols-1 laptop:grid-cols-2 items-center gap-16 p-8 laptop:p-16 xl:px-40">
      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src="./about.png"
          alt="noodles"
          width={500} // Fixed width for layout consistency
          height={500}
          className="w-[400px] laptop:w-[500px] xl:w-[550px] h-auto" // Responsive scaling
        />
      </div>

      {/* Text Content Section */}
      <div className="flex flex-col items-center laptop:items-start gap-6 text-center laptop:text-left">
        <h1 className="text-[24px] laptop:text-[32px] xl:text-[40px] font-semibold">
          About Us
        </h1>
        <p className="text-lg laptop:text-xl xl:text-2xl text-secondary leading-relaxed">
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
