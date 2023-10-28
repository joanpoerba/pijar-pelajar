// import { Course } from '../template/course';

const course = () => {
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

  let currentUrl = window.location.href;
  currentUrl = currentUrl.split("/");
  currentUrl = currentUrl[3].split("?");

  if (currentUrl[1] === "frontEnd") {
    const course = Object.keys(courses.frontEnd).find(
      (course) => currentUrl[2] === courses.frontEnd[course].id
    );

    if (course) {
      return <Course/>;
    }
  }

  if (currentUrl[1] === "backEnd") {
    const course = Object.keys(courses.backEnd).find(
      (course) => currentUrl[2] === courses.backEnd[course].id
    );

    if (course) {
      return <Course/>;
    }
  }

  if (currentUrl[1] === "devOps") {
    const course = Object.keys(courses.devOps).find(
      (course) => currentUrl[2] === courses.devOps[course].id
    );

    if (course) {
      return <Course/>;
    }
  }
};

export default course;
