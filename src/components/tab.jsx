import { Tabs, Flowbite } from "flowbite-react";
import { Card } from "flowbite-react";
import { BsFillStarFill } from "react-icons/bs";

const Tab = () => {
  const customTheme = {
    tab: {
      tablist: {
        tabitem: {
          base: "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-4 focus:ring-blue-300 focus:outline-none",
          styles: {
            pills: {
              active: {
                on: "bg-blue-600 text-white",
              },
            },
          },
        },
      },
    },
  };

  const courses = {
    frontEnd: {
      card1: {
        title: "Design UI/UX untuk pemula hingga mahir",
        banner: "/assets/figma.webp",
        harga: "Rp150.000",
      },
      card2: {
        title: "HTML, CSS untuk JavaScript DOM untuk pemula",
        banner: "/assets/vsc.webp",
        harga: "Rp75.000",
      },
    },
    backEnd: {
      card1: {
        title: "Membuat fitur login dan register dengan PHP dan MySql",
        banner: "/assets/mysql.webp",
        harga: "Rp200.000",
      },
      card2: {
        title: "Berkenalan dengan NextJs, ChakraUI, ExpressJs, MongoDB",
        banner: "/assets/mongodb.webp",
        harga: "Rp120.000",
      },
      card3: {
        title: "Fullstack WebApp cuaca dengan DJango - Python",
        banner: "/assets/python.webp",
        harga: "Rp250.000",
      },
      card4: {
        title: "Membuat dashboard admin dengan Codeigniter 3",
        banner: "/assets/codeigniter.webp",
        harga: "Rp300.000",
      },
    },
    devOps: {
      card1: {
        title: "Mendeploy project dengan Cloudflare",
        banner: "/assets/cloud.webp",
        harga: "Rp100.000",
      },
      card2: {
        title: "Mendalami Cloud computing dengan Azure",
        banner: "/assets/azure.webp",
        harga: "Rp130.000",
      },
      card3: {
        title: "Setting AWS Laravel 10 untuk Intermidate",
        banner: "/assets/amazon.webp",
        harga: "Rp230.000",
      },
    },
  };

  return (
    <section className="2xl:w-[1400px] xl:w-[1100px] lg:w-[900px] md:w-[700px] sm:w-[600px]">
      <Flowbite theme={{ theme: customTheme }}>
        <Tabs.Group
          className="flex justify-around"
          aria-label="Pills"
          style="pills"
        >
          <Tabs.Item active title="Front End">
            <div className="sm:grid grid-cols-12 gap-5 flex flex-col justify-center">
              {Object.keys(courses.frontEnd).map((element, key) => (
                <Card
                  key={key}
                  imgSrc={courses.frontEnd[element].banner}
                  className="2xl:col-span-3 xl:col-span-4 lg:col-span-5 md:col-span-6 sm:col-span-7 w-96 es:w-full"
                >
                  <a href="#">
                    <h5 className="sm:text-xl es:text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                      <p>{courses.frontEnd[element].title}</p>
                    </h5>
                  </a>
                  <div className="mb-5 mt-2.5 flex items-center gap-x-1">
                    <BsFillStarFill className="text-yellow-300" />
                    <BsFillStarFill className="text-yellow-300" />
                    <BsFillStarFill className="text-yellow-300" />
                    <BsFillStarFill className="text-yellow-300" />
                    <BsFillStarFill className="text-yellow-300" />
                    <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                      <p>5.0</p>
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="sm:text-2xl es:text-lg font-bold text-gray-900 dark:text-white">
                      {courses.frontEnd[element].harga}
                    </span>
                    <a
                      className="rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                      href="#"
                    >
                      <p>Enroll</p>
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </Tabs.Item>
          <Tabs.Item title="Back End">
            <div className="sm:grid grid-cols-12 gap-5 flex flex-col justify-center">
              {Object.keys(courses.backEnd).map((element, key) => (
                <Card
                  key={key}
                  imgSrc={courses.backEnd[element].banner}
                  className="2xl:col-span-3 xl:col-span-4 lg:col-span-5 md:col-span-6 sm:col-span-7 w-96 es:w-full"
                >
                  <a href="#">
                    <h5 className="sm:text-xl es:text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                      <p>{courses.backEnd[element].title}</p>
                    </h5>
                  </a>
                  <div className="mb-5 mt-2.5 flex items-center gap-x-1">
                    <BsFillStarFill className="text-yellow-300" />
                    <BsFillStarFill className="text-yellow-300" />
                    <BsFillStarFill className="text-yellow-300" />
                    <BsFillStarFill className="text-yellow-300" />
                    <BsFillStarFill className="text-yellow-300" />
                    <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                      <p>5.0</p>
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="sm:text-2xl es:text-lg font-bold text-gray-900 dark:text-white">
                      {courses.backEnd[element].harga}
                    </span>
                    <a
                      className="rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                      href="#"
                    >
                      <p>Enroll</p>
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </Tabs.Item>
          <Tabs.Item title="DevOps">
            <div className="sm:grid grid-cols-12 gap-5 flex flex-col justify-center">
              {Object.keys(courses.devOps).map((element, key) => (
                <Card
                  key={key}
                  imgSrc={courses.devOps[element].banner}
                  className="2xl:col-span-3 xl:col-span-4 lg:col-span-5 md:col-span-6 sm:col-span-7 w-96 es:w-full"
                >
                  <a href="#">
                    <h5 className="sm:text-xl es:text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                      <p>{courses.devOps[element].title}</p>
                    </h5>
                  </a>
                  <div className="mb-5 mt-2.5 flex items-center gap-x-1">
                    <BsFillStarFill className="text-yellow-300" />
                    <BsFillStarFill className="text-yellow-300" />
                    <BsFillStarFill className="text-yellow-300" />
                    <BsFillStarFill className="text-yellow-300" />
                    <BsFillStarFill className="text-yellow-300" />
                    <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                      <p>5.0</p>
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="sm:text-2xl es:text-lg font-bold text-gray-900 dark:text-white">
                      {courses.devOps[element].harga}
                    </span>
                    <a
                      className="rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                      href="#"
                    >
                      <p>Enroll</p>
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </Tabs.Item>
        </Tabs.Group>
      </Flowbite>
    </section>
  );
};

export default Tab;
