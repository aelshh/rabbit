import featured from "../../assets/featured.webp";
import { Link } from "react-router";

const FeaturedProduct = () => {
  return (
    <section className="  px-4 lg:px-0   py-16 ">
      <div className="flex container mx-auto flex-col-reverse lg:flex-row bg-green-50 rounded-3xl items-center">
        <div className="lg:w-1/2 w-full p-8 text-center lg:text-left ">
          <h2 className="font-semibold text-lg text-gray-700 mb-2">
            Comfort and Style
          </h2>
          <h2 className="text-4xl lg:text-5xl  font-bold mb-6">
            Apparel made for your everyday life
          </h2>
          <p className="text-gray-600 text-lg  mb-6">
            Discover high-quality, comfortable clothing that effortlessly
            fashion and function. Designed to make you look and feel great ever
            day.
          </p>
          <Link
            to="/collections/all"
            className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800"
          >
            Shop Now
          </Link>
        </div>
        <div className="lg:w-1/2   ">
          <img
            src={featured}
            alt="featured image"
            className="w-full object-cover lg:rounded-br-3xl lg:rounded-tr-3xl "
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
