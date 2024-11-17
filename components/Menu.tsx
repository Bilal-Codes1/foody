"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";

const DishCard = ({
  name,
  img,
  description,
}: {
  name: string;
  img: string;
  description: string;
}) => {
  return (
    <div className="bg-[#232323] menu my-6 relative flex flex-col items-center rounded-lg w-full sm:w-60 h-56 shadow-md px-4 py-6 mb-6 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#2a2a2a]">
      {/* Dish Image */}
      <img
        src={img}
        alt={name}
        className="absolute top-[-40px] w-32 h-32 object-cover rounded-full"
      />
      {/* Card Content */}
      <div className="flex flex-col items-center mt-16 text-white">
        <h3 className="text-lg font-semibold text-center">{name}</h3>
        <p className="text-sm text-center my-2 text-gray-300">{description}</p>
        <div className="flex items-center gap-1 my-2">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <FaStar key={index} className="w-3 h-3 text-[#ffd250]" />
            ))}
          <span className="text-xs">5.0</span>
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  const [toggleState, setToggleState] = useState(1);

  const dishes = {
    1: [
      {
        name: "Spicy Chicken Alfredo",
        img: "./hot-dish1.png",
        description: "Creamy Alfredo pasta with a spicy twist.",
      },
      {
        name: "Chicken Stir-Fry",
        img: "./hot-dish2.png",
        description: "Stir-fried chicken with vegetables and a savory sauce.",
      },
      {
        name: "Butter Chicken",
        img: "./hot-dish3.png",
        description: "A rich and creamy Indian classic.",
      },
      {
        name: "Chicken Curry Rice Bowl",
        img: "./hot-dish4.png",
        description: "Tender chicken in a flavorful curry served with rice.",
      },
      {
        name: "Honey Garlic Chicken",
        img: "./hot-dish5.png",
        description: "Sweet and savory honey garlic glazed chicken.",
      },
      {
        name: "Chicken Pot Pie",
        img: "./hot-dish6.png",
        description: "A comforting, flaky pie with creamy chicken filling.",
      },
      {
        name: "Chicken Cacciatore",
        img: "./hot-dish7.png",
        description: "Chicken simmered in a rich tomato and herb sauce.",
      },
      {
        name: "Chicken Lasagna",
        img: "./hot-dish8.png",
        description:
          "Layers of pasta, chicken, and cheese in a delicious sauce.",
      },
    ],
    2: [
      {
        name: "Chicken Caesar Salad",
        img: "./cold-dish1.png",
        description:
          "Crisp romaine lettuce, grilled chicken, and Caesar dressing.",
      },
      {
        name: "Chicken Noodle Salad",
        img: "./cold-dish2.png",
        description: "A refreshing salad with tender chicken and noodles.",
      },
      {
        name: "Chicken Pasta Salad",
        img: "./cold-dish3.png",
        description:
          "Pasta salad with chicken, vegetables, and a tangy dressing.",
      },
      {
        name: "Grilled Chicken Wrap",
        img: "./cold-dish4.png",
        description:
          "Grilled chicken wrapped with fresh veggies in a soft tortilla.",
      },
      {
        name: "Chicken Spring Rolls",
        img: "./cold-dish5.png",
        description: "Crispy spring rolls filled with seasoned chicken.",
      },
      {
        name: "Chicken Avocado Bowl",
        img: "./cold-dish6.png",
        description: "Fresh avocado and grilled chicken served in a bowl.",
      },
      {
        name: "BBQ Chicken Salad",
        img: "./cold-dish7.png",
        description: "BBQ chicken served on a bed of fresh greens.",
      },
      {
        name: "Chicken Poke Bowl",
        img: "./cold-dish8.png",
        description: "Fresh chicken, rice, and toppings in a poke bowl.",
      },
    ],
    3: [
      {
        name: "Grilled Herb Chicken",
        img: "./grill1.png",
        description:
          "Chicken marinated in a mix of fresh herbs and grilled to perfection.",
      },
      {
        name: "BBQ Chicken Skewers",
        img: "./grill2.png",
        description: "Tender chicken skewers grilled with smoky BBQ sauce.",
      },
      {
        name: "Grilled Chicken",
        img: "./grill3.png",
        description: "Simple and flavorful grilled chicken with seasoning.",
      },
      {
        name: "Tandoori Chicken",
        img: "./grill4.png",
        description: "Spicy and aromatic chicken grilled with tandoori spices.",
      },
      {
        name: "Honey Grilled Chicken",
        img: "./grill5.png",
        description: "Sweet honey glaze on perfectly grilled chicken.",
      },
      {
        name: "Grilled Chicken Wings",
        img: "./grill6.png",
        description: "Crispy grilled wings with a smoky flavor.",
      },
      {
        name: "Grilled Chicken Thighs",
        img: "./grill7.png",
        description: "Juicy and tender chicken thighs grilled to perfection.",
      },
      {
        name: "Chimichurri Chicken",
        img: "./grill8.png",
        description: "Grilled chicken topped with tangy chimichurri sauce.",
      },
    ],
  };

  const tabs = ["Hot Dish", "Cold Dish", "Grill"];

  return (
    <div className="px-4 sm:px-16 py-12">
      <h1 className="text-[32px] font-semibold text-center sm:text-left">
        Our Menu
      </h1>
      <div className="flex items-center gap-4 my-4 justify-center sm:justify-start">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`flex justify-center items-center px-4 py-1 rounded-full cursor-pointer ${
              toggleState === index + 1 ? "active-tabs" : "tabs"
            }`}
            onClick={() => setToggleState(index + 1)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Responsive Grid for Larger Screens, Stack for Smaller Screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-8 sm:gap-16 w-full mt-8">
        {dishes[toggleState as keyof typeof dishes].map((dish) => (
          <DishCard
            key={dish.name}
            name={dish.name}
            img={dish.img}
            description={dish.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
