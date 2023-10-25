import { Card } from "flowbite-react";

const ReasonCard = () => {
  return (
    <>
      <Card imgSrc="/src/assets/sustainable.jpg" className="2xl:w-96 xl:w-80 lg:w-96 md:w-96 sm:w-96 w-96 es:w-full sm:h-[460px] es:h-auto border-0">
        <h5 className="sm:text-2xl es:text-lg font-bold tracking-tight text-slate-700 dark:text-white">
          Relevan dengan apa yang dibutuhkan dunia{" "}
          <span className="customUnderline3">industri</span>
        </h5>
        <p className="es:text-sm font-normal text-gray-700 dark:text-gray-400">
          Bukan sekedar bootcamp biasa, materi yang disajikan tentu
          berkesinambungan dengan apa yang di cari oleh{" "}
          <span className="customUnderline3">industri</span>
        </p>
      </Card>
      <Card imgSrc="/src/assets/hired.jpg" className="2xl:w-96 xl:w-80 lg:w-96 md:w-96 sm:w-96 w-96 es:w-full sm:h-[460px] es:h-auto border-0">
        <h5 className="sm:text-2xl es:text-lg font-bold tracking-tight text-slate-700 dark:text-white">
          Dijamin mendapat pekerjaan ketika sudah lulus
        </h5>
        <p className="es:text-sm font-normal text-gray-700 dark:text-gray-400">
          Membantu para talenta digital&nbsp;
          <span className="customUnderline3">Pijar Pelajar?</span> agar dapat menempu dunia industri secepat-cepatnya.
        </p>
      </Card>
      <Card imgSrc="/src/assets/seekingJob.jpg" className="2xl:w-96 xl:w-80 lg:w-96 md:w-96 sm:w-96 w-96 es:w-full sm:h-[460px] es:h-auto border-0">
        <h5 className="sm:text-2xl es:text-lg font-bold tracking-tight text-slate-700 dark:text-white">
          Mendapat dukungan karir{" "}
          <span className="customUnderline3">seumur hidup</span>
        </h5>
        <p className="es:text-sm font-normal text-gray-700 dark:text-gray-400">
          Dengan hanya mendaftar, belajar, membuat CV, kami akan mendukung{" "}
          <span className="customUnderline3"> talenta digital</span> untuk lebih
          unggul.
        </p>
      </Card>
    </>
  );
};

export default ReasonCard;
