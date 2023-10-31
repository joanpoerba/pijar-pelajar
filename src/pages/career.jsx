import { Link } from "react-router-dom";
import { BsX } from "react-icons/bs";

const Career = () => {
  return (
    <>
      <div className="w-full flex justify-center bg-blue-600">
        <main className="w-[1000px] py-14">
          <Link className="absolute" to="/">
            <BsX className="w-10 h-10 text-white" />
          </Link>
        </main>
      </div>
    </>
  );
};

export default Career;
