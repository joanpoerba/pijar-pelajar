import { Tabs, Flowbite } from "flowbite-react";
import { Card } from "flowbite-react";
import { BsFillStarFill } from "react-icons/bs";

import { Link } from "react-router-dom";

const Tab = () => {
  const customTheme = {
    tab: {
      base: "flex flex-col gap-1",
      tablist: {
        tabitem: {
          base: "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-4 focus:ring-blue-300 focus:outline-none",
          styles: {
            pills: {
              active: {
                on: "bg-blue-600 text-white ring-4 ring-blue-300",
              },
            },
          },
        },
      },
      tabpanel: "p-5 bg-blue-300 rounded-md"
    },
  };

  const courses = {
    frontEnd: {
      design_uiux_untuk_pemula_hingga_mahir: {
        id: "design_uiux_untuk_pemula_hingga_mahir",
        title: "Design UI/UX untuk pemula hingga mahir",
        banner: "/assets/figma.webp",
        harga: "Rp150.000",
      },
      html_css_dan_js_dom_untuk_pemula: {
        id: "html_css_dan_js_dom_untuk_pemula",
        title: "HTML, CSS dan JavaScript DOM untuk pemula",
        banner: "/assets/vsc.webp",
        harga: "Rp75.000",
      },
    },
    backEnd: {
      membuat_fitur_login_dan_register_dengan_php_dan_mysql: {
        id: "membuat_fitur_login_dan_register_dengan_php_dan_mysql",
        title: "Membuat fitur login dan register dengan PHP dan MySql",
        banner: "/assets/mysql.webp",
        harga: "Rp200.000",
      },
      berkenalan_dengan_nextjs_chakraui_expressjs_mongodb: {
        id: "berkenalan_dengan_nextjs_chakraui_expressjs_mongodb",
        title: "Berkenalan dengan NextJs, ChakraUI, ExpressJs, MongoDB",
        banner: "/assets/mongodb.webp",
        harga: "Rp120.000",
      },
      fullstack_webapp_cuaca_dengan_django_python: {
        id: "fullstack_webapp_cuaca_dengan_django_python",
        title: "Fullstack WebApp cuaca dengan DJango - Python",
        banner: "/assets/python.webp",
        harga: "Rp250.000",
      },
      membuat_dashboard_admin_dengan_codeigniter_3: {
        id: "membuat_dashboard_admin_dengan_codeigniter_3",
        title: "Membuat dashboard admin dengan Codeigniter 3",
        banner: "/assets/codeigniter.webp",
        harga: "Rp300.000",
      },
    },
    devOps: {
      mendeploy_project_dengan_cloudflare: {
        id: "mendeploy_project_dengan_cloudflare",
        title: "Mendeploy project dengan Cloudflare",
        banner: "/assets/cloud.webp",
        harga: "Rp100.000",
      },
      mendalami_cloud_computing_dengan_azure: {
        id: "mendalami_cloud_computing_dengan_azure",
        title: "Mendalami Cloud computing dengan Azure",
        banner: "/assets/azure.webp",
        harga: "Rp130.000",
      },
      setting_aws_laravel_10_untuk_intermidate: {
        id: "setting_aws_laravel_10_untuk_intermidate",
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
                  className="2xl:col-span-3 xl:col-span-4 lg:col-span-5 md:col-span-6 sm:col-span-7 w-96 es:w-full border-0"
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
                    <Link
                      className="rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                      to={`/course?frontEnd?${courses.frontEnd[element].id}`}
                    >
                      <p>Lihat</p>
                    </Link>
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
                  className="2xl:col-span-3 xl:col-span-4 lg:col-span-5 md:col-span-6 sm:col-span-7 w-96 es:w-full border-0"
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
                    <Link
                      className="rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                      to={`/course?backEnd?${courses.backEnd[element].id}`}
                    >
                      <p>Lihat</p>
                    </Link>
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
                  className="2xl:col-span-3 xl:col-span-4 lg:col-span-5 md:col-span-6 sm:col-span-7 w-96 es:w-full border-0"
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
                    <Link
                      className="rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                      to={`/course?devOps?${courses.devOps[element].id}`}
                    >
                      <p>Lihat</p>
                    </Link>
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
