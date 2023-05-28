import { signIn } from "next-auth/react";
import {
  FaHamburger,
  FaBars,
  RxAvatar,
  FaUser,
  FaSearch,
  FaPlus,
  FaPlusCircle,
} from "react-icons/fa";
import { PrimaryButton, TersierButton } from "./Button";
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
                className="w-full rounded-lg text-gray-500 focus:text-gray-700 focus:outline-none "
                type="text"
                placeholder="search posts"
              />
              <FaSearch />
            </div>
          </li>
          <div className="flex cursor-pointer items-center gap-3 text-lg">
            <TersierButton>
              <FaPlusCircle />
              <p className="text-sm">Add post</p>
            </TersierButton>
            <li className="flex h-8 w-8 items-center rounded-full shadow-md ">
              <FaUser className="mx-auto block  text-gray-500" />
            </li>
          </div>
        </ul>
        <button className="block md:hidden">
          <FaBars />
        </button>
      </nav>
    </header>
  );
};
