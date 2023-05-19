import { FaHamburger, FaBars } from "react-icons/fa";
type Navbar = {
  title: string;
};

export const Navbar = () => {
  return (
    <nav className="flex justify-around bg-blue-500 p-3 text-white ">
      <header>
        <h1 className="font-bold uppercase">
          <a href="#">Logo</a>
        </h1>
      </header>
      <ul className="hidden w-1/3  items-center justify-around md:flex">
        <li>
          <a href="#">Link 1</a>
        </li>
        <li>
          <a href="#">Link 2</a>
        </li>
        <li>
          <a href="#">Link 3</a>
        </li>
        <li>
          <a href="#">Link 4</a>
        </li>
      </ul>

      <button className="block md:hidden">
        <FaBars />
      </button>
    </nav>
  );
};
