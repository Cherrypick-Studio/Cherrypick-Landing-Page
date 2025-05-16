import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowLeftCircle,
  ArrowRight,
  ArrowRightCircle,
  Star,
  StarIcon,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const SliderReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("right");
  const exampleData = [
    {
      review: 5,
      text: `"Cherrypick really helped our small business by providing a great-looking landing page at an affordable price.
Their design feels professional and clean, yet simple enough for our customers to navigate.
It’s been a big step for our brand, and we’re super happy with the result!
"`,
      name: "Bintang Aditya",
      position: "Owner of Harwi Gadget",
      image: "/images/avatar-1.png",
    },
  ];

  // button execution function
  const nextSlide = () => {
    if (animating) return;
    setDirection("right");
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % exampleData.length);
      setAnimating(false);
    }, 300);
  };

  const prevSlide = () => {
    if (animating) return;
    setDirection("left");
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + exampleData.length) % exampleData.length
      );
      setAnimating(false);
    }, 300);
  };

  return (
    <div className="flex w-full justify-between max-lg:flex-col max-lg:gap-16">
      <div className="relative overflow-hidden w-full">
        <div
          className={`transition-transform duration-500 ease-out ${
            animating
              ? direction === "right"
                ? "translate-x-[-100%] opacity-50"
                : "translate-x-[100%] opacity-50"
              : "translate-x-0 opacity-100"
          }`}
          style={{ width: "100%" }}
        >
          <div className="flex w-full flex-col gap-10">
            <div className="flex gap-2">
              {Array.from({ length: exampleData[currentIndex].review }).map(
                (item, indexStar) => (
                  <StarIcon
                    key={indexStar}
                    fill="#FFD800"
                    size={20}
                    className="text-[#FFD800]"
                  />
                )
              )}
            </div>
            <p className="text-[#939393] text-2xl italic">
              {exampleData[currentIndex].text}
            </p>
            <div className="flex gap-3 items-center">
              <Image
                width={56}
                height={56}
                src={"/images/alex-komerce-photo.svg"}
                alt="photo-review"
              />
              <div className="flex flex-col">
                <h1 className="text-xl font-medium">
                  {exampleData[currentIndex].name}
                </h1>
                <span className="text-base text-gray-150">
                  {exampleData[currentIndex].position}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* button slider  */}
      {exampleData.length > 1 && (
        <div className="flex w-1/2 justify-end items-end gap-5 max-lg:justify-between max-lg:w-full">
          <div
            className="w-fit border border-black rounded-full p-1 cursor-pointer"
            onClick={prevSlide}
          >
            <ArrowLeft
              size={30}
              className="text-gray-500 cursor-pointer hover:text-gray-700 transition-colors"
            />
          </div>
          <div
            className="w-fit border border-black rounded-full p-1 cursor-pointer"
            onClick={nextSlide}
          >
            <ArrowRight
              size={30}
              className="text-gray-500 cursor-pointer hover:text-gray-700 transition-colors"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SliderReview;
