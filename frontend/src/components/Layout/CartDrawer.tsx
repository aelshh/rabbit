import { IoMdClose } from "react-icons/io";
import CartItems from "../Cart/CartItems";

const CartDrawer = ({
  drawerOpen,
  setDrawerOpen,
}: {
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] bg-white h-full flex flex-col shadow-lg transform transition-transform z-50 duration-300 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <button onClick={() => setDrawerOpen(false)}>
          <IoMdClose className="h-6 w-6" />
        </button>
      </div>

      <div className="flex-grow p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        {/* cart items  */}
        <CartItems />
      </div>

      <div className="sticky bottom-0 p-4 bg-white">
        <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
          Shipping, taxes and discount codes calculated at checkout.
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
