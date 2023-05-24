import { signIn } from "next-auth/react";
import {
  FaHamburger,
  FaBars,
  RxAvatar,
  FaUser,
  FaSearch,
} from "react-icons/fa";
type Navbar = {
  title: string;
};

export const Navbar = () => {
  return (
    <header className="flex justify-around border p-3 ">
      <h1 className="font-bold uppercase">
        <a href="#">FiReddit</a>
      </h1>
      <nav>
        <ul className="hidden items-center  justify-around gap-8 md:flex">
          <li>
            <div className="flex items-center rounded-full border bg-white p-2 px-4 text-gray-500 shadow">
              <input
                className="w-full rounded-lg focus:outline-none "
                type="text"
              />
              <FaSearch />
            </div>
          </li>
          <li className="flex h-8 w-8 items-center rounded-full shadow-md ">
            <FaUser className="mx-auto block  text-gray-500" />
          </li>
        </ul>
        <button className="block md:hidden">
          <FaBars />
        </button>
      </nav>
    </header>
  );
};
