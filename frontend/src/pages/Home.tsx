import Hero from "../components/Layout/Hero";
import FeatruresSection from "../components/Products/FeatruresSection";
import FeaturedProduct from "../components/Products/FeaturedProduct";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";

const placeholderProducts = [
  {
    _id: 1,
    name: "Stylish Jacket",
    price: 120,
    images: [
      {
        url: "https://picsum.photos/500/500?random=1",
        altText: "Stylish Jacket 1",
      },
    ],
  },
  {
    _id: 2,
    name: "Stylish Jacket",
    price: 120,
    images: [
      {
        url: "https://picsum.photos/500/500?random=2",
        altText: "Stylish Jacket 2",
      },
    ],
  },
  {
    _id: 3,
    name: "Stylish Jacket",
    price: 120,
    images: [
      {
        url: "https://picsum.photos/500/500?random=3",
        altText: "Stylish Jacket 3",
      },
    ],
  },
  {
    _id: 4,
    name: "Stylish Jacket",
    price: 120,
    images: [
      {
        url: "https://picsum.photos/500/500?random=4",
        altText: "Stylish Jacket 4",
      },
    ],
  },
  {
    _id: 5,
    name: "Stylish Jacket",
    price: 120,
    images: [
      {
        url: "https://picsum.photos/500/500?random=5",
        altText: "Stylish Jacket 4",
      },
    ],
  },
  {
    _id: 6,
    name: "Stylish Jacket",
    price: 120,
    images: [
      {
        url: "https://picsum.photos/500/500?random=7",
        altText: "Stylish Jacket 4",
      },
    ],
  },
  {
    _id: 7,
    name: "Stylish Jacket",
    price: 120,
    images: [
      {
        url: "https://picsum.photos/500/500?random=7",
        altText: "Stylish Jacket 4",
      },
    ],
  },
  {
    _id: 8,
    name: "Stylish Jacket",
    price: 120,
    images: [
      {
        url: "https://picsum.photos/500/500?random=8",
        altText: "Stylish Jacket 4",
      },
    ],
  },
];

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      <h2 className="font-bold text-3xl mb-4 text-center ">Best Seller</h2>
      <ProductDetails />
      <div className="container mx-auto">
        <h2 className="text-center font-bold text-3xl mb-10">
          Top Wears for Women
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>
      <FeaturedProduct />
      <FeatruresSection />
    </div>
  );
};

export default Home;
