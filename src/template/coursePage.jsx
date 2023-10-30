import { BsX } from "react-icons/bs";
import { ImCalendar } from "react-icons/im";
import { BiCheckCircle } from "react-icons/bi";
import { AiFillPlayCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const CoursePage = ({ title, release, link, deskripsi, tools }) => {
  const driverObj = driver({
    showProgress: true,
    steps: [
      {
        element: "#releaseDate",
        popover: {
          title: "Release date",
          description: "Bulan rilis nya course ini",
          side: "left",
          align: "start",
        },
      },
      {
        element: "#benefit",
        popover: {
          title: "Benefit",
          description:
            "Sertifikat, Video materi, Module, Konsultasi, merupakan benefit yang akan kamu dapatkan",
          side: "bottom",
          align: "start",
        },
      },
      {
        element: "#video",
        popover: {
          title: "Video Trailer",
          description:
            "Tonton video trailer untuk course ini sebagai perkenalan",
          side: "bottom",
          align: "start",
        },
      },
      {
        element: "#materi",
        popover: {
          title: "Materi",
          description:
            "Merupakan video materi yang akan kamu pelajari selama mengambil course",
          side: "left",
          align: "start",
        },
      },
    ],
  });

  driverObj.drive();

  return (
    <>
      <div className="w-full p-8">
        <Link className="fixed" to="/">
          <BsX className="w-10 h-10 text-slate-700" />
        </Link>
        <main className="flex justify-center py-20 pb-96">
          <section className="w-[1200px] flex flex-col items-center">
            <p className="text-3xl font-bold text-slate-700 text-center">
              Kelas online : <br />{" "}
              <span className="customUnderline">{title}</span>
            </p>
            <p
              id="releaseDate"
              className="text-xl flex items-center gap-x-3 mt-8"
            >
              <ImCalendar />
              Release date {release} 2023
            </p>
            <div
              id="benefit"
              className="w-full flex flex-row justify-evenly items-center mt-16"
            >
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
              <div className="col-span-8 h-[500px]">
                <iframe
                  id="video"
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
              <div className="col-span-4 h-[500px]">
                <div
                  id="materi"
                  className="h-full bg-blue-600 rounded-md shadow-md flex flex-col justify-between p-5"
                >
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
                  {Object.keys(tools).map((img, key) => (
                    <div
                      key={key}
                      className="flex items-center gap-x-5 bg-blue-200 p-5 rounded-md mt-3"
                    >
                      <img
                        className="w-12 drop-shadow-lg"
                        src={tools[img][1]}
                        alt=""
                      />
                      <p className="text-xl font-medium text-slate-900">
                        {tools[img][0]}
                      </p>
                    </div>
                  ))}
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
