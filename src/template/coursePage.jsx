import { BsX } from "react-icons/bs";
import { ImCalendar } from "react-icons/im";
import { BiCheckCircle } from "react-icons/bi";
import { AiFillPlayCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const CoursePage = ({ title, release, link, deskripsi, tools }) => {
  // const driverObj = driver({
  //   showProgress: true,
  //   steps: [
  //     {
  //       popover: {
  //         title: "Mohon dipahami",
  //       },
  //     },
  //     {
  //       element: "#releaseDate",
  //       popover: {
  //         title: "Release date",
  //         description: "Bulan rilis nya course ini",
  //         side: "left",
  //         align: "start",
  //       },
  //     },
  //     {
  //       element: "#benefit",
  //       popover: {
  //         title: "Benefit",
  //         description:
  //           "Sertifikat, Video materi, Module, Konsultasi, merupakan benefit yang akan kamu dapatkan",
  //         side: "bottom",
  //         align: "start",
  //       },
  //     },
  //     {
  //       element: "#video",
  //       popover: {
  //         title: "Video Trailer",
  //         description:
  //           "Tonton video trailer untuk course ini sebagai perkenalan",
  //         side: "bottom",
  //         align: "start",
  //       },
  //     },
  //     {
  //       element: "#materi",
  //       popover: {
  //         title: "Materi",
  //         description:
  //           "Merupakan video materi yang akan kamu pelajari selama mengambil course",
  //         side: "left",
  //         align: "start",
  //       },
  //     },
  //     {
  //       popover: {
  //         title: "Terimakasih, selamat belajar",
  //       },
  //     },
  //   ],
  // });

  // driverObj.drive();

  return (
    <>
      <div className="w-full sm:p-8 p-2">
        <Link className="absolute" to="/">
          <BsX className="w-10 h-10 text-slate-700" />
        </Link>
        <main className="flex justify-center py-20 sm:pb-96">
          <section className="w-[1200px] flex flex-col items-center">
            <p className="sm:text-3xl text-xl font-bold text-slate-700 text-center">
              Kelas online : <br />{" "}
              <span className="customUnderline">{title}</span>
            </p>
            <p
              id="releaseDate"
              className="sm:text-xl text-md flex items-center gap-x-3 mt-8"
            >
              <ImCalendar />
              Release date {release} 2023
            </p>
            <div
              id="benefit"
              className="w-full md:flex hidden flex-row justify-evenly items-center mt-16"
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
            <div className="w-full grid grid-cols-12 lg:gap-x-10 gap-y-16 md:mt-24 mt-10">
              <div className="lg:col-span-8 col-span-12">
                <iframe
                  id="video"
                  className="w-full lg:h-[500px] md:h-[500px] sm:h-[400px] es:h-[230px] rounded-md shadow-md"
                  src={link}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <p className="mt-10 font-bold text-slate-700 sm:text-2xl text-lg">
                  {title}?
                </p>
                <p className="mt-3 sm:text-[18px] text-md">{deskripsi}</p>
              </div>
              <div className="lg:col-span-4 md:col-span-7 col-span-12">
                <div
                  id="materi"
                  className="h-[500px] bg-blue-600 rounded-md shadow-md flex flex-col justify-between p-5"
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
                            <span className="lg:text-md text-sm">Welcome</span>
                          </div>
                          <span className="lg:text-md text-sm">8 mins</span>
                        </a>
                      </li>
                      <li className="bg-white rounded-full p-2 pr-3">
                        <a
                          className="flex flex-row justify-between items-center"
                          href=""
                        >
                          <div className="flex items-center gap-x-2">
                            <AiFillPlayCircle className="text-3xl text-blue-600" />
                            <span className="lg:text-md text-sm">Pengenalan Kelas</span>
                          </div>
                          <span className="lg:text-md text-sm">12 mins</span>
                        </a>
                      </li>
                      <li className="bg-white rounded-full p-2 pr-3">
                        <a
                          className="flex flex-row justify-between items-center"
                          href=""
                        >
                          <div className="flex items-center gap-x-2">
                            <AiFillPlayCircle className="text-3xl text-blue-600" />
                            <span className="lg:text-md text-sm">Prepare Tools</span>
                          </div>
                          <span className="lg:text-md text-sm">22 mins</span>
                        </a>
                      </li>
                      <li className="bg-white rounded-full p-2 pr-3">
                        <a
                          className="flex flex-row justify-between items-center"
                          href=""
                        >
                          <div className="flex items-center gap-x-2">
                            <AiFillPlayCircle className="text-3xl text-blue-600" />
                            <span className="lg:text-md text-sm">54 video lainnya</span>
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
                        className="sm:w-12 w-9 sm:h-12 h-9 drop-shadow-lg object-contain"
                        src={tools[img][1]}
                        alt=""
                      />
                      <p className="sm:text-xl text-md font-medium text-slate-900">
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
