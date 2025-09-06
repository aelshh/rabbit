import React, { useEffect, useRef, useState, type MouseEvent } from "react";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router";

const newArrivals = [
  {
    _id: "1",
    name: "Stylish Jacket",
    price: 120,
    image: [
      {
        url: "https://picsum.photos/500/500?random=1",
        altText: "Stylish Jacket",
      },
    ],
  },
  {
    _id: "2",
    name: "Stylish Jacket",
    price: 120,
    image: [
      {
        url: "https://picsum.photos/500/500?random=2",
        altText: "Stylish Jacket",
      },
    ],
  },
  {
    _id: "3",
    name: "Stylish Jacket",
    price: 120,
    image: [
      {
        url: "https://picsum.photos/500/500?random=3",
        altText: "Stylish Jacket",
      },
    ],
  },
  {
    _id: "4",
    name: "Stylish Jacket",
    price: 120,
    image: [
      {
        url: "https://picsum.photos/500/500?random=4",
        altText: "Stylish Jacket",
      },
    ],
  },
  {
    _id: "5",
    name: "Stylish Jacket",
    price: 120,
    image: [
      {
        url: "https://picsum.photos/500/500?random=5",
        altText: "Stylish Jacket",
      },
    ],
  },
  {
    _id: "6",
    name: "Stylish Jacket",
    price: 120,
    image: [
      {
        url: "https://picsum.photos/500/500?random=6",
        altText: "Stylish Jacket",
      },
    ],
  },
  {
    _id: "7",
    name: "Stylish Jacket",
    price: 120,
    image: [
      {
        url: "https://picsum.photos/500/500?random=7",
        altText: "Stylish Jacket",
      },
    ],
  },
  {
    _id: "8",
    name: "Stylish Jacket",
    price: 120,
    image: [
      {
        url: "https://picsum.photos/500/500?random=8",
        altText: "Stylish Jacket",
      },
    ],
  },
];
const NewArrivals = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const scroll = (direction: "left" | "right") => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };
  const updateScrollButton = () => {
    const container = scrollRef.current;

    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollabe =
        container.scrollWidth > container.scrollLeft + container.clientWidth;
      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollabe);
    }

    console.log({
      scrollLeft: container?.scrollLeft,
      clientWidht: container?.clientWidth,
      containerScrollWidth: container?.scrollWidth,
    });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButton);
      updateScrollButton();
    }

    return () => container?.removeEventListener("scroll", updateScrollButton);
  }, []);

  const handleOnMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleOnMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);

    const walk = x - startX;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleOnMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section className="px-4  py-16  relative">
      <div className="container mx-auto text-center mb-20 relative">
        <h2 className="text-3xl font-bold mb-3">Explore New Arrivals</h2>
        <p className="text-lg text-gray-500 mb-8">
          Discover the latest styles straight off the runway, freshly added to
          keep your wardrobe on the cutting edge of fashion.
        </p>
        <div className="absolute right-0 items-center  bottom-[-60px] flex space-x-2  ">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={` shadow-md p-2 rounded-full ${
              canScrollLeft
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={` shadow-md p-2 rounded-full ${
              canScrollRight
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* scrollabe container */}

      <div
        ref={scrollRef}
        className={`relative flex overflow-x-scroll container mx-auto space-x-6  ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleOnMouseDown}
        onMouseUp={handleOnMouseUpOrLeave}
        onMouseMove={handleOnMouseMove}
        onMouseLeave={handleOnMouseUpOrLeave}
      >
        {newArrivals.map((item) => (
          <div
            className="min-w-[100%] sm:min-w-[50%]  lg:min-w-[30%]  relative "
            key={item._id}
          >
            <img
              src={item.image[0].url}
              alt={item.image[0].altText || item.name}
              className="w-full h-[500px] object-cover rounded-lg"
              draggable="false"
            />
            <div className="absolute  bottom-0 inset-x-0 text-white bg-white/20 backdrop-blur-md p-4 rounded-b-lg ">
              <Link to={`/product/${item._id}`} className="block">
                <h4 className="font-medium">{item.name}</h4>
                <span className="mt-1"> ${item.price}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
