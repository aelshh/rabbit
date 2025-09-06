import { RiDeleteBin3Line } from "react-icons/ri";

const CartItems = () => {
  const items = [
    {
      productId: 1,
      name: "T-Shirt",
      size: "M",
      color: "Red",
      quantity: 2,
      price: 13,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "T-Shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 42,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 3,
      name: "T-Shirt",
      size: "M",
      color: "Red",
      quantity: 5,
      price: 64,
      image: "https://picsum.photos/200?random=1",
    },
  ];
  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-start py-4 border-b border-gray-200"
        >
          <div className="flex ">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />

            <div className="flex flex-col justify-center  items-start">
              <h3>{item.name}</h3>
              <p className="text-sm text-gray-500">
                size: {item.size} | color: {item.color}
              </p>
              <div className="flex mt-2 items-center ">
                <button className="border border-gray-400   text-xl font-medium rounded py-1 px-2">
                  -
                </button>
                <span className="mx-4">{item.quantity}</span>
                <button className="border  border-gray-400 text-xl font-medium rounded py-1 px-2">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <p className="font-medium">$ {item.price.toLocaleString()}</p>
            <button>
              <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
