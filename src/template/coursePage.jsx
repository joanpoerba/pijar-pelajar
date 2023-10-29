import { BsX } from "react-icons/bs";
import { ImCalendar } from "react-icons/im";
import { BiCheckCircle } from "react-icons/bi";
import { AiFillPlayCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const CoursePage = ({ title, release, link, deskripsi, tools }) => {
  return (
    <>
      <div className="w-full p-8">
        <header>
          <Link to="/">
            <BsX className="w-10 h-10 text-slate-700" />
          </Link>
        </header>
        <main className="flex justify-center py-10 pb-96">
          <section className="w-[1200px] flex flex-col items-center">
            <p className="text-3xl font-bold text-slate-700 text-center">
              Kelas online : <br />{" "}
              <span className="customUnderline">{title}</span>
            </p>
            <p className="text-xl flex items-center gap-x-3 mt-8">
              <ImCalendar />
              Release date {release} 2023
            </p>
            <div className="w-full flex flex-row justify-evenly items-center mt-16">
              <p className="text-xl flex flex-col items-center gap-y-3">
                Sertifikat
                <span>
                  <BiCheckCircle className="text-blue-600 w-6 h-6" />
                </span>
              </p>
              <p className="text-xl flex flex-col items-center gap-y-3">
                Video Materi
                <span>
                  <BiCheckCircle className="text-blue-600 w-6 h-6" />
                </span>
              </p>
              <p className="text-xl flex flex-col items-center gap-y-3">
                Module
                <span>
                  <BiCheckCircle className="text-blue-600 w-6 h-6" />
                </span>
              </p>
              <p className="text-xl flex flex-col items-center gap-y-3">
                Konsultasi
                <span>
                  <BiCheckCircle className="text-blue-600 w-6 h-6" />
                </span>
              </p>
            </div>
            <div className="w-full grid grid-cols-12 gap-x-10 mt-24">
              <div className="col-span-8">
                <iframe
                  className="w-full h-full rounded-md shadow-md"
                  src={link}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <p className="mt-10 font-bold text-slate-700 text-2xl">
                  {title}?
                </p>
                <p className="mt-3 text-[18px]">{deskripsi}</p>
              </div>
              <div className="col-span-4">
                <div className="bg-blue-600 rounded-md shadow-md flex flex-col justify-between h-full p-5">
                  <div>
                    <p className="text-xl text-white font-medium">
                      57 leassons
                    </p>
                    <ul className="flex flex-col gap-y-4 mt-7">
                      <li className="bg-white rounded-full p-2 pr-3">
                        <a
                          className="flex flex-row justify-between items-center"
                          href=""
                        >
                          <div className="flex items-center gap-x-2">
                            <AiFillPlayCircle className="text-3xl text-blue-600" />
                            <span>Welcome</span>
                          </div>
                          <span>8 mins</span>
                        </a>
                      </li>
                      <li className="bg-white rounded-full p-2 pr-3">
                        <a
                          className="flex flex-row justify-between items-center"
                          href=""
                        >
                          <div className="flex items-center gap-x-2">
                            <AiFillPlayCircle className="text-3xl text-blue-600" />
                            <span>Pengenalan Kelas</span>
                          </div>
                          <span>12 mins</span>
                        </a>
                      </li>
                      <li className="bg-white rounded-full p-2 pr-3">
                        <a
                          className="flex flex-row justify-between items-center"
                          href=""
                        >
                          <div className="flex items-center gap-x-2">
                            <AiFillPlayCircle className="text-3xl text-blue-600" />
                            <span>Prepare Tools</span>
                          </div>
                          <span>22 mins</span>
                        </a>
                      </li>
                      <li className="bg-white rounded-full p-2 pr-3">
                        <a
                          className="flex flex-row justify-between items-center"
                          href=""
                        >
                          <div className="flex items-center gap-x-2">
                            <AiFillPlayCircle className="text-3xl text-blue-600" />
                            <span>54 video lainnya</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <button className="w-full bg-white rounded-md py-3 font-semibold text-blue-600">
                    Gabung Kelas
                  </button>
                </div>
                <div className="mt-10">
                  <p className="font-bold text-slate-700 text-2xl">Tools</p>
                  {/* {Object.keys(tools).map((img, key) => (
                    <img className="" key={key} src={tools[img]} alt="" />
                  ))} */}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default CoursePage;
