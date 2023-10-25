import { useState, useRef, useEffect } from "react";
import Countdown from "react-countdown-simple";

import "../global.css";

import { Carousel } from "flowbite-react";

import { TypeAnimation } from "react-type-animation";
import { FaCubesStacked, FaClipboardList } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { BsX, BsCheck } from "react-icons/bs";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillFacebook,
} from "react-icons/ai";

import Header from "../components/header";
import Tab from "../components/tab";
import ReasonCard from "../components/cards";
import MentorCard from "../components/mentorCard";
import Faq from "../components/faq";

const Home = () => {
  const [scroll, scrollValue] = useState(0);
  const [promoStatus, setPromoStatus] = useState(true);

  window.addEventListener("scroll", function scroll() {
    scrollValue(window.Math.round(scrollY));
  });

  const countupRef = useRef(null);
  const countupRef2 = useRef(null);
  const countupRef3 = useRef(null);

  let countUpAnim;
  let countUpAnim2;
  let countUpAnim3;

  useEffect(() => {
    initCountUp();
  }, []);

  async function initCountUp() {
    const countUpModule = await import("countup.js");
    countUpAnim = new countUpModule.CountUp(countupRef.current, 1000);
    if (!countUpAnim.error) {
      countUpAnim.start();
    } else {
      console.error(countUpAnim.error);
    }

    countUpAnim2 = new countUpModule.CountUp(countupRef2.current, 31500);
    if (!countUpAnim2.error) {
      countUpAnim2.start();
    } else {
      console.error(countUpAnim2.error);
    }

    countUpAnim3 = new countUpModule.CountUp(countupRef3.current, 19000);
    if (!countUpAnim3.error) {
      countUpAnim3.start();
    } else {
      console.error(countUpAnim3.error);
    }
  }

  const oneHour = new Date(
    new Date().setHours(new Date().getHours() + 48)
  ).toISOString();

  const renderer = ({ days, hours, minutes, seconds }) => (
    <div className="text-2xl 2xl:text-7xl flex flex-row items-center gap-x-3">
      <p className="w-9 h-9 lg:w-16 lg:h-16 2xl:w-24 2xl:h-24 flex justify-center items-center bg-white rounded-md text-blue-600 font-semibold">
        {days}
      </p>
      <p className="h-16 2xl:h-24 text-white flex items-center">:</p>
      <p className="w-9 h-9 lg:w-16 lg:h-16 2xl:w-24 2xl:h-24 flex justify-center items-center bg-white rounded-md text-blue-600 font-semibold">
        {hours}
      </p>
      <p className="h-16 2xl:h-24 text-white flex items-center">:</p>
      <p className="w-9 h-9 lg:w-16 lg:h-16 2xl:w-24 2xl:h-24 flex justify-center items-center bg-white rounded-md text-blue-600 font-semibold">
        {minutes}
      </p>
      <p className="h-16 2xl:h-24 text-white flex items-center">:</p>
      <p className="w-9 h-9 lg:w-16 lg:h-16 2xl:w-24 2xl:h-24 flex justify-center items-center bg-white rounded-md text-blue-600 font-semibold">
        {seconds}
      </p>
    </div>
  );

  return (
    <>
      <header
        className={`w-full flex flex-col justify-center items-center fixed z-10 ${
          scroll >= 50 ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        {promoStatus == true ? (
          <div className="w-full bg-gradient-to-r from-blue-500 to-blue-600  py-2 es:px-1 flex flex-row justify-around items-center">
            <div></div>
            <p className="text-white font-normal sm:text-[16px] es:text-[12px]">
              Happy Valentine&apos;s! Dapatkan <b>Diskon 20%</b> dengan code
              <b className="sm:text-[13px] es:text-[10px] text-blue-600 bg-white p-1 rounded-sm ms-1">
                ILOVEMYGF
              </b>
            </p>
            <BsX
              className="text-white text-2xl cursor-pointer"
              onClick={() => setPromoStatus(false)}
            />
          </div>
        ) : (
          <div className="hidden"></div>
        )}
        <Header />
      </header>
      <main
        id="home"
        className="w-full h-[800px] flex flex-col pt-44 items-center gap-y-28 es:px-1"
      >
        <p className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-md py-2 px-3 sm:text-[18px] es:text-[11px] font-semibold text-white shadow-xl shadow-blue-200">
          Diskon 35% buat kamu yang masih pelajar SMP!
        </p>
        <div className="flex flex-col items-center text-center gap-y-5 font-black">
          <TypeAnimation
            className="text-blue-600 font-bold lg:text-[40px] md:text-2xl sm:text-xl text-xl"
            sequence={[
              "Upgrade Kualitas Belajar Bersama Kami...",
              1000,
              "Upgrade Kualitas Belajar Bersama Pijar Pelajar...",
              1000,
              "Upgrade Kualitas Belajar Bersama Indonesia.",
              1000,
              "Tunggu apa lagi? ayo join!",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
          />
          <p className="md:w-[700px] w-[600px] es:w-fit font-medium lg:text-[20px] md:text-xl sm:text-lg es:text-[13px] text text-slate-600">
            Kami hadir untuk membantu banyak{" "}
            <span className="customUnderline">anak bangsa</span>, khususnya di
            bidang <span className="customUnderline">teknologi</span>, agar
            dapat bersaing di dunia{" "}
            <span className="customUnderline">modern</span>.
          </p>
          <div className="flex flex-row justify-center items-center mt-3">
            <button className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-full py-2 px-6 md:text-[18px] es:text-[12px] font-semibold text-white shadow-xl shadow-blue-200">
              Enroll course now
            </button>
          </div>
        </div>
      </main>
      <main className="w-full flex justify-center es:px-1">
        <section className="2xl:w-[1400px] xl:w-[1100px] lg:w-[900px] md:w-[700px] sm:w-[600px] w-[600px] flex flex-row items-center justify-between flex-wrap gap-7 bg-blue-600 sm:p-10 es:p-3 rounded-lg">
          <div className="flex flex-row items-center gap-x-3">
            <FaCubesStacked className="text-6xl p-3 bg-white rounded-md text-red-400 shadow-md shadow-white" />
            <div className="font-semibold sm:text-2xl es:text-base text-white">
              <div className="flex">
                <p
                  ref={countupRef}
                  onClick={() => {
                    countUpAnim.reset();
                    // countupAnim.start();
                  }}
                >
                  0
                </p>
                <p>&nbsp;+</p>
              </div>
              <p>Total Materi</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-x-3">
            <FaUsers className="text-6xl p-3 bg-white rounded-md text-yellow-400 shadow-md shadow-white" />
            <div className="font-semibold sm:text-2xl es:text-base text-white">
              <div className="flex">
                <p
                  ref={countupRef2}
                  onClick={() => {
                    countUpAnim2.reset();
                    // countupAnim.start();
                  }}
                >
                  0
                </p>
                <p>&nbsp;+</p>
              </div>
              <p>Murid Belahan Negara</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-x-3">
            <GiTeacher className="text-6xl p-3 bg-white rounded-md text-green-400 shadow-md shadow-white" />
            <div className="font-semibold sm:text-2xl es:text-base text-white">
              <div className="flex">
                <p
                  ref={countupRef3}
                  onClick={() => {
                    countUpAnim3.reset();
                    // countupAnim.start();
                  }}
                >
                  0
                </p>
                <p>&nbsp;+</p>
              </div>
              <p>Mentor Expert</p>
            </div>
          </div>
        </section>
      </main>
      <main
        id="courses"
        className="w-full flex justify-center items-center pt-44 es:px-1"
      >
        <Tab />
      </main>
      <main className="w-full flex justify-center items-center bg-gradient-to-b from-white to-blue-700 py-52 es:px-1">
        <section className="2xl:w-[1400px] xl:w-[1100px] lg:w-[900px] md:w-[700px] sm:w-[600px] w-[600px] flex flex-col items-center">
          <p className="sm:text-3xl es:text-lg font-bold text-slate-700">
            Mengapa memilih&nbsp;
            <span className="customUnderline5">Pijar Pelajar?</span>{" "}
          </p>
          <div className="w-full flex lg:justify-between justify-center items-center flex-wrap mt-24 gap-5">
            <ReasonCard />
          </div>
        </section>
      </main>
      <main
        id="mentor"
        className="w-full h-[900px] xl:px-96 lg:px-40 es:ps-6 es:px-1 bg-gradient-to-b from-blue-700 to-blue-900 flex justify-center items-center"
      >
        <section className="w-[700px] sm:w-full flex flex-col items-center gap-y-14">
          <p className="text-3xl font-bold text-white text-center">
            Diajar oleh para mentor yang{" "}
            <span className="customUnderline4">berpengalaman</span>
          </p>
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <MentorCard />
          </ol>
        </section>
      </main>
      <main className="w-full pb-52 bg-gradient-to-b from-blue-900 to-blue-950 flex justify-center items-center es:px-1">
        <section className="2xl:w-[1400px] xl:w-[1100px] lg:w-[900px] md:w-[700px] flex lg:flex-row flex-col justify-around items-center">
          <img
            className="2xl:w-[450px] lg:w-[380px] md:w-[470px] w-[430px]"
            src="/assets/model.png"
            alt=""
          />
          <div className="text-white flex flex-col gap-y-6 lg:mt-0 mt-10">
            <p className="sm:text-2xl es:text-lg">Sharing is caring.</p>
            <p className="sm:text-3xl es:text-xl font-bold">
              Ayo bergabung sebagai mentor. <br />
              Bagikan ilmu & pengalamanmu.
            </p>
            <ul className="flex flex-col gap-y-3">
              <li className="text-white flex items-center">
                <BsCheck className="text-2xl bg-white text-blue-600 rounded-full" />
                <p className="ms-2 sm:text-[20px] es:text-base">
                  Meningkatkan personal branding
                </p>
              </li>
              <li className="text-white flex items-center">
                <BsCheck className="text-2xl bg-white text-blue-600 rounded-full" />
                <p className="ms-2 sm:text-[20px] es:text-base">Membuka keran sumber income</p>
              </li>
              <li className="text-white flex items-center">
                <BsCheck className="text-2xl bg-white text-blue-600 rounded-full" />
                <p className="ms-2 sm:text-[20px] es:text-base">Menambah relasi baru</p>
              </li>
              <li className="text-white flex items-center">
                <BsCheck className="text-2xl bg-white text-blue-600 rounded-full" />
                <p className="ms-2 sm:text-[20px] es:text-base">Mendapat project freelance</p>
              </li>
              <li className="text-white flex items-center">
                <BsCheck className="text-2xl bg-white text-blue-600 rounded-full" />
                <p className="ms-2 sm:text-[20px] es:text-base">
                  Privilage menarik mentor lainnya
                </p>
              </li>
              <li className="mt-5">
                <button className="w-full py-2 bg-white text-blue-600 font-bold sm:text-[20px] es:text-base rounded-full">
                  Pelajari selengkapnya
                </button>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <main className="w-full flex justify-center pt-3 bg-gradient-to-r from-blue-500 to-blue-800">
        <section className="promoWrapper 2xl:w-[1400px] xl:w-[1100px] lg:w-[900px] md:w-[750px] w-[750px] flex lg:justify-between sm:flex-row es:flex-col justify-around items-center es:gap-y-10">
          <img
            className="xl:w-[160px] lg:w-[130px] md:w-[140px] w-[100px] sm:block es:hidden"
            src="/assets/promo.png"
            alt=""
          />
          <div className="flex flex-col sm:items-start es:items-center lg:gap-y-5 md:gap-y-2 gap-y-1 text-white">
            <p className="md:text-xl lg:text-2xl 2xl:text-3xl font-medium">
              Happy valentine!🥳🥳
            </p>
            <p className="md:text-xl lg:text-2xl 2xl:text-7xl font-bold">
              Diskon 20%
            </p>
            <p className="md:text-xl lg:text-2xl 2xl:text-2xl font-bold">
              Dapatkan dengan code{" "}
              <span className="text-sm 2xl:text-lg bg-white p-2 text-blue-600 rounded-md">
                ILOVEMYGF
              </span>
            </p>
          </div>
          <Countdown targetDate={oneHour} renderer={renderer} />
        </section>
      </main>
      <main
        id="faq"
        className="w-full h-[900px] flex justify-center items-center es:px-1"
      >
        <section className="md:w-[800px] w-[600px] flex flex-col items-center">
          <p className="text-blue-600 md:text-4xl sm:text-2xl es:text-[16px] font-bold text-center">
            Bagaimana cara kami dapat membantu?
          </p>
          <p className="md:text-xl sm:text-md es:text-sm text-center text-blue-600 font-medium mt-3">
            Mungkin kamu dapat menemukan jawaban dari pertanyaan kamu.
          </p>
          <div className="w-full border-[1px] border-slate-400 rounded-md p-1 px-4 flex flex-row items-center mt-10">
            <FaClipboardList className="text-slate-400" />
            <input
              className="w-full border-0 outline-none focus:ring-0"
              type="text"
              placeholder="Ketik kata kunci untuk menemukan jawaban"
            />
          </div>
          <p className="mt-2 text-gray-500 text-center">
            Anda juga dapat menelusuri topik di bawah untuk menemukan apa yang
            Anda cari.
          </p>
          <Faq />
        </section>
      </main>
      <main className="w-full h-[600px] md:flex hidden justify-center">
        <section className="2xl:w-[1400px] xl:w-[1100px] lg:w-[900px] md:w-[700px] sm:w-[650px] w-full flex justify-center">
          <Carousel className="w-[1200px]">
            <img className="p-3" alt="..." src="/assets/banner1.png" />
            <img className="p-3" alt="..." src="/assets/banner2.png" />
            <img className="p-3" alt="..." src="/assets/banner3.png" />
          </Carousel>
        </section>
      </main>
      <footer className="w-full bg-gradient-to-r from-blue-600 to-blue-900 flex justify-center es:px-1">
        <section className="2xl:w-[1400px] xl:w-[1100px] lg:w-[900px] md:w-[700px] sm:w-[600px] flex flex-col items-center py-6 gap-y-4">
          <p className="lg:text-5xl text-3xl font-bold text-white">
            Pijar Pelajar
          </p>
          <p className="lg:text-xl text-lg font-normal text-white">
            Digital technology school
          </p>
          <div className="w-full grid-cols-12 flex justify-around flex-wrap mt-10 sm:gap-0 gap-y-16">
            <nav className="sm:w-auto w-full">
              <ul className="flex flex-col gap-y-3">
                <strong className="text-2xl text-white">Link</strong>
                <li>
                  <a className="lg:text-xl text-md text-white" href="#courses">
                    Courses
                  </a>
                </li>
                <li>
                  <a className="lg:text-xl text-md text-white" href="">
                    Career support
                  </a>
                </li>
                <li>
                  <a className="lg:text-xl text-md text-white" href="#mentor">
                    Mentor
                  </a>
                </li>
                <li>
                  <a className="lg:text-xl text-md text-white" href="">
                    Vacancy
                  </a>
                </li>
                <li>
                  <a className="lg:text-xl text-md text-white" href="#faq">
                    FAQs
                  </a>
                </li>
              </ul>
            </nav>
            <nav className="sm:w-auto w-full">
              <ul className="flex flex-col gap-y-3">
                <strong className="text-2xl text-white">Program</strong>
                <li>
                  <a className="lg:text-xl text-md text-white" href="#courses">
                    Kolaborasi Kampus Merdeka
                  </a>
                </li>
                <li>
                  <a className="lg:text-xl text-md text-white" href="">
                    Skill Akselebrasi
                  </a>
                </li>
                <li>
                  <a className="lg:text-xl text-md text-white" href="#mentor">
                    Talenta Digital
                  </a>
                </li>
                <li>
                  <a className="lg:text-xl text-md text-white" href="">
                    Pelatihan
                  </a>
                </li>
              </ul>
            </nav>
            <nav className="sm:w-auto w-full">
              <ul className="flex flex-col gap-y-3">
                <strong className="text-2xl text-white">Komunitas</strong>
                <li>
                  <a className="lg:text-xl text-md text-white" href="#courses">
                    Para Pijar Pelajar
                  </a>
                </li>
                <li>
                  <a className="lg:text-xl text-md text-white" href="">
                    Pelatih Talenta Digital
                  </a>
                </li>
              </ul>
            </nav>
            <nav className="sm:w-auto w-full">
              <ul className="flex flex-col gap-y-3">
                <strong className="text-2xl text-white">Cabang</strong>
                <li>
                  <a className="lg:text-xl text-md text-white" href="#courses">
                    Medan
                  </a>
                </li>
                <li>
                  <a className="lg:text-xl text-md text-white" href="">
                    Lampung
                  </a>
                </li>
                <li>
                  <a className="lg:text-xl text-md text-white" href="">
                    Jakarta
                  </a>
                </li>
                <li>
                  <a className="lg:text-xl text-md text-white" href="">
                    Surabaya
                  </a>
                </li>
                <li>
                  <a className="lg:text-xl text-md text-white" href="">
                    Bali
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex gap-x-10">
            <AiFillInstagram className="text-3xl text-white" />
            <AiOutlineTwitter className="text-3xl text-white" />
            <AiFillYoutube className="text-3xl text-white" />
            <AiFillFacebook className="text-3xl text-white" />
          </div>
          <p className="lg:text-lg text-white mt-5 text-center">
            &copy; 2023 Pijar Pelajar Technology School All Rights Reserved
            Owned by Pijar Pelajar
          </p>
        </section>
      </footer>
    </>
  );
};

export default Home;
