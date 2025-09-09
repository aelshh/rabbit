import { Link } from "react-router";

interface ProductGridProps {
  products: Array<{
    _id: number;
    name: string;
    price: number;
    images: { url: string; altText: string }[];
  }>;
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols2 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <Link key={index} to={`products/${product._id}`} className="block">
          <div className="bg-white p-4 rounded-lg">
            <div className="w-full h-96 mb-4">
              <img
                src={product.images[0].url}
                alt={product.images[0].altText}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-sm mb-2">{product.name}</h3>
            <p className="text-sm font-medium tracking-tighter text-gray-500">
              ${product.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
