import React from "react";
import { HiOutlineCreditCard, HiShoppingBag } from "react-icons/hi";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";

const FeatruresSection = () => {
  return (
    <section className=" py-16 px-4 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3  gap-8 text-center">
        <div className="flex flex-col items-center">
          <div className="rounded-full p-4 mb-4 ">
            <HiShoppingBag className="text-xl" />
          </div>
          <p className=" tracking-tighter mb-2">FREE INTERNATIONAL SHIPPING</p>
          <p className="text-sm tracking-tighter text-gray-600 ">
            On all orders above $100.00
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full p-4 mb-4 ">
            <HiArrowPathRoundedSquare className="text-xl" />
          </div>
          <p className=" tracking-tighter mb-2">45 DAYS RETURN</p>
          <p className="text-sm tracking-tighter text-gray-600 ">
            Money back gurantee
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full p-4 mb-4 ">
            <HiOutlineCreditCard className="text-xl" />
          </div>
          <p className=" tracking-tighter mb-2">SECURE CHECKOUT</p>
          <p className="text-sm tracking-tighter text-gray-600 ">
            100% secure checout process
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatruresSection;
