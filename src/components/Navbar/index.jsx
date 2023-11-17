import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const [showSidebar, setShowSidebar] = useState(false);
  const menuClick = (item) => {
    setMenu(item);
  };
  return (
    <>
      <div className="flex flex-row items-center justify-between lg:justify-evenly w-full p-5">
        <img src={logo} />
        <div className="hidden lg:flex  flex-row items-center gap-5 border-2 border-[#E3E3E3] rounded-md p-2 bg-[#EEEEEE] w-[40%]">
          <FaSearch />
          <input
            className="bg-transparent w-full outline-none"
            placeholder="Search For brand, category, coupon"
          />
        </div>
        <button className="hidden lg:block bg-[#F01C21] rounded-md p-2 text-white">
          Login/Signup
        </button>
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="block lg:hidden rounded-md p-2 text-black"
        >
          <IoMdMenu className="text-3xl" />
        </button>
      </div>
      <div
        className={`block lg:hidden top-0 right-0 w-screen bg-[#091431] overflow-auto p-5 pt-20 fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
        <div className="flex flex-row items-center gap-5 border-2 border-[#E3E3E3] rounded-md p-2 bg-[#EEEEEE] w-full">
          <FaSearch />
          <input
            className="bg-transparent w-full outline-none"
            placeholder="Search For brand, category, coupon"
          />
        </div>
        <div className="bg-[#091431] flex w-full mt-5  flex-col items-center justify-center gap-5">
          <button
            onClick={() => menuClick("Home")}
            className={
              menu == "Home"
                ? "text-red-600 border-b-4 border-red-600 p-3 "
                : "text-white p-3"
            }
          >
            Home
          </button>
          <button
            onClick={() => menuClick("Deal")}
            className={
              menu == "Deal"
                ? "text-red-600 border-b-4 border-red-600 p-3"
                : "text-white p-3"
            }
          >
            Deal
          </button>
          <button
            onClick={() => menuClick("Coupon")}
            className={
              menu == "Coupon"
                ? "text-red-600 border-b-4 border-red-600 p-3"
                : "text-white p-3"
            }
          >
            Coupon
          </button>
          <button
            onClick={() => menuClick("Store")}
            className={
              menu == "Store"
                ? "text-red-600 border-b-4 border-red-600 p-3"
                : "text-white p-3"
            }
          >
            Stores
          </button>
          <button
            onClick={() => menuClick("Contact Us")}
            className={
              menu == "Contact Us"
                ? "text-red-600 border-b-4 border-red-600 p-3"
                : "text-white p-3"
            }
          >
            Contact Us
          </button>
          <button className=" bg-[#F01C21] rounded-md p-2 text-white">
            Login/Signup
          </button>
        </div>
      </div>
      <div className="bg-[#091431] hidden lg:flex w-full  flex-row items-center justify-center gap-5">
        <button
          onClick={() => menuClick("Home")}
          className={
            menu == "Home"
              ? "text-red-600 border-b-4 border-red-600 p-3 "
              : "text-white p-3"
          }
        >
          Home
        </button>
        <button
          onClick={() => menuClick("Deal")}
          className={
            menu == "Deal"
              ? "text-red-600 border-b-4 border-red-600 p-3"
              : "text-white p-3"
          }
        >
          Deal
        </button>
        <button
          onClick={() => menuClick("Coupon")}
          className={
            menu == "Coupon"
              ? "text-red-600 border-b-4 border-red-600 p-3"
              : "text-white p-3"
          }
        >
          Coupon
        </button>
        <button
          onClick={() => menuClick("Store")}
          className={
            menu == "Store"
              ? "text-red-600 border-b-4 border-red-600 p-3"
              : "text-white p-3"
          }
        >
          Stores
        </button>
        <button
          onClick={() => menuClick("Contact Us")}
          className={
            menu == "Contact Us"
              ? "text-red-600 border-b-4 border-red-600 p-3"
              : "text-white p-3"
          }
        >
          Contact Us
        </button>
      </div>
    </>
  );
};

export default Navbar;
