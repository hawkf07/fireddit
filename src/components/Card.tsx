import { FaArrowDown, FaArrowUp, FaComment } from "react-icons/fa";

export const Card = () => {
  return (
    <>
      <div className="flex  gap-1 rounded-md border bg-white shadow">
        <div className="flex   flex-col items-center justify-center gap-5 bg-gray-200 p-2 text-xl text-gray-600">
          <FaArrowUp />
          <div>0</div>
          <FaArrowDown />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-4 md:p-3">
          <header>
            <h1>Hello World From Post 1</h1>
          </header>

          <div className="flex flex-col gap-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, nobis minima? Animi maiores sunt deleniti praesentium
              iusto, consequatur nam aspernatur.
            </p>
            <div className="flex gap-1">
              <FaComment className="text-xl" />
              <p>32</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
