// Icons
import { useRef } from "react";
import { useStateContext } from "../context/StateProvider";
import { IoNotificationsOutline, AiOutlineMessage } from "../data/icons";
import { useEffect } from "react";

const Nav = () => {
  const { isOpen, ref } = useStateContext();

  return (
    <nav
      className={`flex ${isOpen ? "sm:left-[234px]" : "sm:left-[110px]"} ${
        ref && "fixed top-0 right-0 bg-white shadow-sm"
      } z-10 bg-red-50 px-3 p-2 items-center justify-between overflow-hidden mr-2`}
    >
      <h2 className="flex items-center gap-2 sm:text-lg lg:text-2xl font-extrabold">
        Hello, Sara!
        <img src="/img/hand.png" alt="hand" className="w-6 sm:w-8" />
      </h2>
      <div className="flex items-center gap-3">
        <IoNotificationsOutline className="cursor-pointer text-lg sm:text-2xl" />
        <AiOutlineMessage className="cursor-pointer text-lg sm:text-2xl" />
        <button className="bg-red-600 text-white px-2 py-1.5 rounded-lg my-1 shadow-red-300 shadow-md">
          Go To Premium
        </button>
      </div>
    </nav>
  );
};

export default Nav;
