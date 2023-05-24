import { signIn } from "next-auth/react";
import { FaHamburger, FaBars } from "react-icons/fa";
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
            <a href="#">About</a>
          </li>
          <li>
            <a onClick={() => signIn()} href="#">
              SignUp
            </a>
          </li>
        </ul>
        <button className="block md:hidden">
          <FaBars />
        </button>
      </nav>
    </header>
  );
};
