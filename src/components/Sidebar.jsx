// Icons
import {
  BiCart,
  FiSettings,
  FiUser,
  IoAnalyticsSharp,
  RxDashboard,
  FiChevronRight,
  FiChevronLeft,
} from "../data/icons";
import { useStateContext } from "../context/StateProvider";

const data = [
  { name: "Dashboard", icon: <RxDashboard /> },
  { name: "Analytics", icon: <IoAnalyticsSharp /> },
  { name: "Customers", icon: <FiUser /> },
  { name: "Products", icon: <BiCart /> },
  { name: "Settings", icon: <FiSettings /> },
];

const Sidebar = () => {
  const { isOpen, setIsOpen, ref } = useStateContext();

  return (
    <aside
      className={`${isOpen ? "w-52" : "w-20"} my-4 rounded-3xl ${
        ref && "top-0 bg-white shadow-sm my-0 rounded-none rounded-b-3xl"
      } hidden sm:block bg-white sm:mx-2 fixed h-[95%] shadow-2xl transition-all duration-150`}
    >
      {isOpen && (
        <div className="flex flex-col gap-2 justify-center items-center mt-10">
          <img
            src="/img/persons/girl.jpg"
            className="w-24 h-24 rounded-full object-cover border-4 border-r-4 border-r-red-600 p-1.5"
          />
          <h4 className="text-xl font-semibold font-secondary">Sara Rider</h4>
        </div>
      )}
      <span
        onClick={() => setIsOpen(!isOpen)}
        className="absolute right-[-13px] cursor-pointer top-10 px-2 py-1.5 bg-gray-100 shadow-md text-black rounded-full"
      >
        {isOpen ? <FiChevronLeft size={18} /> : <FiChevronRight size={18} />}
      </span>
      <ul
        className={`flex flex-col items-center gap-4 lg:gap-6 mt-8 ${
          isOpen ? "lg:mt-8" : "lg:mt-24"
        }`}
      >
        {data.map((item, index) => (
          <li
            key={index}
            className="flex justify-center items-center font-semibold cursor-pointer text-gray-400 hover:border-l-4 hover:text-black border-black w-full py-2 transition-all duration-100"
          >
            <div className={`flex ${isOpen && "ml-8 w-40"}`}>
              <span className="text-2xl">{item.icon}</span>
              <span className={`${isOpen ? "block ml-3" : "hidden"}`}>
                {item.name}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
