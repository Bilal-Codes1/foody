import { FaStar } from "react-icons/fa";

const ReviewCard = ({
  username,
  date,
  reviewText,
}: {
  username: string;
  date: string;
  reviewText: string;
}) => {
  return (
    <div className="bg-[#232323] p-6 rounded-xl shadow-lg transition-transform transform h-fit md:h-40 hover:scale-105">
      <div className="flex justify-between items-center text-secondary gap-8 mb-4">
        <span className="font-medium">@{username}</span>
        <span className="text-sm text-gray-400">{date}</span>
      </div>
      <div className="flex items-center gap-1 my-2">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <FaStar key={index} className="w-3 h-3 text-[#ffd250]" />
          ))}
      </div>
      <p className="text-secondary text-sm">{reviewText}</p>
    </div>
  );
};

const Reviews = () => {
  const reviews = [
    {
      username: "@sophia",
      date: "11 November 2024",
      reviewText:
        "Foody was fantastic! Great atmosphere, and the food was absolutely delicious. One of the best dining experiences I’ve had. Highly recommend!",
    },
    {
      username: "mcarter90",
      date: "11 November 2024",
      reviewText:
        "Every dish at Foody was incredible! Fresh ingredients, amazing flavors, and friendly staff. Can't wait to come back!",
    },
    {
      username: "emmaflores",
      date: "11 November 2024",
      reviewText:
        "Amazing experience at Foody! Fresh ingredients and warm ambiance made our night unforgettable.",
    },
  ];

  return (
    <div className="px-8 sm:px-16 py-12 xl:px-40 reviews">
      <h1 className="text-[24px] sm:text-[32px] xl:text-[40px] font-semibold text-white">
        Reviews
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
        {reviews.map((review, index) => (
          <div key={index} className="flex justify-center items-center">
            <ReviewCard
              username={review.username}
              date={review.date}
              reviewText={review.reviewText}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
