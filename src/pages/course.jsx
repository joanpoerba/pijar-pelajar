import CoursePage from "../template/coursePage";

const course = () => {
  const courses = {
    frontEnd: {
      design_uiux_untuk_pemula_hingga_mahir: {
        id: "design_uiux_untuk_pemula_hingga_mahir",
        release: "Maret",
        title: "Design UI/UX untuk pemula hingga mahir",
        link: "https://www.youtube.com/embed/OvNu8BdS9l8?si=Rw5G02exn2GiBTUo",
        deskripsi:
          "Desain UI/UX untuk Pemula hingga Mahir adalah panduan komprehensif yang mengajarkan prinsip-prinsip dasar dan teknik canggih dalam desain antarmuka pengguna (UI) dan pengalaman pengguna (UX). Bagi pemula, kursus ini memberikan dasar-dasar desain grafis dan interaksi pengguna, sementara bagi para profesional berpengalaman, kursus ini akan membantu meningkatkan keterampilan dalam merancang pengalaman pengguna yang menarik dan intuitif. Anda akan belajar tentang pemilihan warna, tipografi, hierarki informasi, dan pengujian pengguna, semua yang diperlukan untuk menciptakan desain UI/UX yang luar biasa.",
        tools: [["Figma", "/assets/figma.png"]],
      },
      html_css_dan_js_dom_untuk_pemula: {
        id: "html_css_dan_js_dom_untuk_pemula",
        release: "Januari",
        title: "HTML, CSS dan JavaScript DOM untuk pemula",
        link: "https://www.youtube.com/embed/ZS3wUnyYTQ0?si=4b-jFuuj4wdmzSw3",
        deskripsi:
          "Panduan HTML, CSS, dan JavaScript DOM untuk Pemula menghadirkan landasan penting bagi mereka yang baru memulai perjalanan dalam pengembangan web. Dalam panduan ini, Anda akan memahami dasar-dasar HTML untuk membuat struktur halaman web, CSS untuk mengatur tampilan dan tata letak, serta JavaScript DOM (Document Object Model) untuk membuat halaman web interaktif. Mulai dari yang sederhana hingga pemahaman yang lebih mendalam, kursus ini membantu pemula membangun dasar yang kuat dalam teknologi web yang penting dalam pengembangan situs web modern.",
        tools: [
          ["Visual Studio Code", "/assets/vsc.png"],
          ["Node Js", "/assets/nodejs.png"],
        ],
      },
    },
    backEnd: {
      membuat_fitur_login_dan_register_dengan_php_dan_mysql: {
        id: "membuat_fitur_login_dan_register_dengan_php_dan_mysql",
        release: "Desember",
        title: "Membuat fitur login dan register dengan PHP dan MySql",
        link: "https://www.youtube.com/embed/DVAS6mzMGrw?si=fz6iNVwub-7oYifH",
        deskripsi:
          "Membuat fitur login dan register dengan PHP dan MySQL adalah langkah penting dalam pengembangan aplikasi web yang membutuhkan otentikasi pengguna. Dengan menggunakan PHP sebagai bahasa pemrograman server-side dan MySQL sebagai basis data, Anda dapat menciptakan sistem yang memungkinkan pengguna untuk mendaftar (register) dengan informasi pribadi mereka, dan kemudian login ke akun mereka dengan keamanan yang kuat. Proses ini melibatkan penanganan formulir, validasi data, enkripsi password, serta penyimpanan dan pengambilan data pengguna dari basis data MySQL. Dengan implementasi yang benar, Anda dapat memastikan keamanan dan fungsionalitas yang solid dalam sistem otentikasi ini.",
        tools: [
          ["Visual Studio Code", "/assets/vsc.png"],
          ["MySql", "/assets/mysql.png"],
          ["XAMPP", "/assets/xampp.png"],
        ],
      },
      berkenalan_dengan_nextjs_chakraui_expressjs_mongodb: {
        id: "berkenalan_dengan_nextjs_chakraui_expressjs_mongodb",
        release: "Mei",
        title: "Berkenalan dengan NextJs, ChakraUI, ExpressJs, MongoDB",
        link: "https://www.youtube.com/embed/ZS3wUnyYTQ0?si=4b-jFuuj4wdmzSw3",
        deskripsi:
          "Berkenalan dengan Next.js, Chakra UI, Express.js, dan MongoDB adalah langkah awal yang menarik dalam dunia pengembangan web modern. Next.js adalah framework React yang mempermudah pembuatan aplikasi web yang responsif dan cepat. Chakra UI adalah library komponen desain untuk React yang memungkinkan Anda membangun tampilan yang menarik dan user-friendly dengan mudah. Express.js adalah framework Node.js yang digunakan untuk membuat server HTTP dan API dengan cepat. MongoDB adalah basis data NoSQL yang memungkinkan penyimpanan data yang fleksibel.",
        tools: [
          ["Visual Studio Code", "/assets/vsc.png"],
          ["Express Js", "/assets/expressjs.png"],
          ["Mongo DB", "/assets/mongodb.png"],
        ],
      },
      fullstack_webapp_cuaca_dengan_django_python: {
        id: "fullstack_webapp_cuaca_dengan_django_python",
        release: "April",
        title: "Fullstack WebApp cuaca dengan DJango - Python",
        link: "https://www.youtube.com/embed/DVAS6mzMGrw?si=fz6iNVwub-7oYifH",
        deskripsi:
          "Fullstack WebApp cuaca dengan Django - Python adalah sebuah proyek pengembangan perangkat lunak yang bertujuan untuk memberikan informasi cuaca yang komprehensif kepada pengguna melalui platform web. Dibangun menggunakan Django, sebuah framework Python yang kuat, proyek ini mencakup komponen-komponen front-end dan back-end yang kuat. Pada sisi depan, pengguna dapat dengan mudah mengakses informasi cuaca terkini dan perkiraan jangka panjang dalam tampilan yang intuitif dan ramah pengguna. Sementara itu, di balik layar, Django digunakan untuk mengelola data cuaca, memproses permintaan pengguna, dan memberikan respons yang cepat dan akurat. Ini adalah contoh yang menarik tentang bagaimana teknologi Python, khususnya Django, dapat digunakan untuk mengembangkan aplikasi web yang bermanfaat dan efisien bagi pengguna.",
        tools: [
          ["Visual Studio Code", "/assets/vsc.png"],
          ["DJango", "/assets/django.png"],
        ],
      },
      membuat_dashboard_admin_dengan_codeigniter_3: {
        id: "membuat_dashboard_admin_dengan_codeigniter_3",
        release: "Februari",
        title: "Membuat dashboard admin dengan Codeigniter 3",
        link: "https://www.youtube.com/embed/DVAS6mzMGrw?si=fz6iNVwub-7oYifH",
        deskripsi:
          "Membuat dashboard admin dengan CodeIgniter 3 merupakan sebuah proyek pengembangan web yang bertujuan untuk menciptakan sebuah panel administrasi yang efisien dan mudah digunakan menggunakan framework PHP CodeIgniter versi 3. Dashboard ini dirancang khusus untuk memudahkan pengelolaan konten, manajemen pengguna, dan pemantauan berbagai aspek penting dari sebuah aplikasi atau situs web. Dengan memanfaatkan fitur-fitur canggih yang ditawarkan oleh CodeIgniter 3, proyek ini bertujuan untuk memberikan alat yang kuat bagi para administrator untuk mengelola dan mengawasi berbagai aspek dari situs web atau aplikasi mereka dengan efektif, membuat proses administrasi menjadi lebih efisien dan terorganisir.",
        tools: [
          ["Visual Studio Code", "/assets/vsc.png"],
          ["Composer", "/assets/composer.png"],
          ["Codeigniter", "/assets/codeigniter.png"],
        ],
      },
    },
    devOps: {
      mendeploy_project_dengan_cloudflare: {
        id: "mendeploy_project_dengan_cloudflare",
        release: "Oktober",
        title: "Mendeploy project dengan Cloudflare",
        link: "https://www.youtube.com/embed/J59a-IECfe8?si=A5sZYs0H4l-__zDQ",
        deskripsi:
          "Mendeploy proyek dengan Cloudflare adalah suatu proses penting dalam menghadirkan aplikasi atau situs web secara online. Cloudflare adalah layanan Content Delivery Network (CDN) dan keamanan web yang memungkinkan pengguna untuk mempercepat pengiriman konten mereka ke pengguna di seluruh dunia, serta memberikan lapisan keamanan tambahan untuk melindungi proyek dari ancaman cyber. Dengan mendeploy proyek menggunakan Cloudflare, pengguna dapat meningkatkan kinerja, kecepatan, serta keamanan aplikasi mereka. Cloudflare menyediakan berbagai fitur termasuk caching, optimisasi gambar, perlindungan DDoS, dan manajemen DNS yang dapat membantu meningkatkan pengalaman pengguna dan menjaga proyek tetap aman dari serangan online. Ini adalah langkah penting dalam memastikan bahwa proyek berjalan lancar, aman, dan dapat diakses dengan cepat oleh pengguna di seluruh dunia.",
        tools: [["Cloud Flare", "/assets/cloudflare.png"]],
      },
      mendalami_cloud_computing_dengan_azure: {
        id: "mendalami_cloud_computing_dengan_azure",
        release: "Maret",
        title: "Mendalami Cloud computing dengan Azure",
        link: "https://www.youtube.com/embed/OvNu8BdS9l8?si=Rw5G02exn2GiBTUo",
        deskripsi:
          "Mendalami Cloud Computing dengan Azure adalah langkah yang penting dan menarik dalam memahami dan menguasai layanan komputasi awan yang disediakan oleh Microsoft Azure. Azure adalah platform komputasi awan yang menyediakan berbagai layanan untuk hosting, pengelolaan, dan skalabilitas aplikasi dan layanan di lingkungan cloud. Melalui eksplorasi lebih mendalam, individu dapat memahami konsep dasar cloud computing, termasuk infrastruktur sebagai layanan (IaaS), platform sebagai layanan (PaaS), dan perangkat lunak sebagai layanan (SaaS), serta bagaimana Azure menyediakan solusi untuk kebutuhan komputasi, penyimpanan, dan pengelolaan data. Dengan memahami dan menguasai Azure, seseorang dapat membangun, mengelola, dan mengoptimalkan solusi cloud yang efisien untuk berbagai kebutuhan bisnis dan proyek teknologi.",
        tools: [["Azure", "/assets/azure.png"]],
      },
      setting_aws_laravel_10_untuk_intermidate: {
        id: "setting_aws_laravel_10_untuk_intermidate",
        release: "November",
        title: "Setting AWS Laravel 10 untuk Intermidate",
        link: "https://www.youtube.com/embed/OvNu8BdS9l8?si=Rw5G02exn2GiBTUo",
        deskripsi:
          "Setting AWS Laravel 10 untuk Intermediate adalah langkah penting dalam pengembangan aplikasi web yang kompleks. Dalam tahap intermediate, pengembang akan mengeksplorasi integrasi yang lebih dalam antara framework Laravel dan layanan cloud Amazon Web Services (AWS). Ini termasuk mengelola infrastruktur dengan EC2, menyimpan data di S3, dan memanfaatkan layanan seperti RDS untuk basis data yang skalabel. Dengan pemahaman yang lebih mendalam tentang keduanya, pengembang dapat menciptakan aplikasi web yang efisien, andal, dan siap berskala di lingkungan cloud AWS.",
        tools: [
          ["Visual Studio Code", "/assets/vsc.png"],
          ["AWS", "/assets/aws.png"],
          ["Laravel", "/assets/laravel.png"],
        ],
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
      return (
        <CoursePage
          title={courses.frontEnd[course].title}
          release={courses.frontEnd[course].release}
          link={courses.frontEnd[course].link}
          deskripsi={courses.frontEnd[course].deskripsi}
          tools={courses.frontEnd[course].tools}
        />
      );
    }
  }

  if (currentUrl[1] === "backEnd") {
    const course = Object.keys(courses.backEnd).find(
      (course) => currentUrl[2] === courses.backEnd[course].id
    );

    if (course) {
      return (
        <CoursePage
          title={courses.backEnd[course].title}
          release={courses.backEnd[course].release}
          link={courses.backEnd[course].link}
          deskripsi={courses.backEnd[course].deskripsi}
          tools={courses.backEnd[course].tools}
        />
      );
    }
  }

  if (currentUrl[1] === "devOps") {
    const course = Object.keys(courses.devOps).find(
      (course) => currentUrl[2] === courses.devOps[course].id
    );

    if (course) {
      return (
        <CoursePage
          title={courses.devOps[course].title}
          release={courses.devOps[course].release}
          link={courses.devOps[course].link}
          deskripsi={courses.devOps[course].deskripsi}
          tools={courses.devOps[course].tools}
        />
      );
    }
  }

  window.location.href = "/";
};

export default course;
