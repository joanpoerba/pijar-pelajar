import { Link } from "react-router-dom";
import { BsX } from "react-icons/bs";

const Career = () => {
  return (
    <>
      <div className="w-full flex justify-center bg-blue-600">
        <main className="w-[1000px] py-14">
          <Link className="relative" to="/">
            <BsX className="w-10 h-10 text-white" />
          </Link>
          <div className="mt-14">
            <p className="text-4xl text-white font-bold">
              Lingkup kerja yang baik, <br /> menciptakan pekerja yang baik
              juga.
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default Career;
