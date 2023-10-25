const MentorCard = () => {
  const mentors = [
    {
      nama: "Braja Reysandi",
      jabatan: "Master Back End",
      foto: "/src/assets/braja.JPG",
      quote:
        "Ada yang mau jadi back end engineer tapi gatau jalur belajar? santai bro, jaman sekarang banyak bootcamp, kaya pijar pelajar contoh nya. Daftar, belajar, abis itu kerja. Kurang santai apa coba hahaha.",
    },
    {
      nama: "Nadia",
      jabatan: "Master UI/UX",
      foto: "/src/assets/nadia.JPG",
      quote:
        "HA HA HA (ketawa jahat). Mau bootcamp yang berkualitas industri dan terjangkau harganya? Pijar Pelajar dong! modal 300k dapat pake belajar digital yang relevan tentunya",
    },
  ];

  return (
    <ul>
      {mentors.map((mentor, key) => (
        <li key={key} className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-7 h-7 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img
              className="rounded-full shadow-lg"
              src={mentor.foto}
              alt={mentor.nama}
            />
          </span>
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600 ms-2">
            <div className="items-center justify-between mb-3 sm:flex">
              <time className="mb-1 text-sm font-normal text-gray-400 sm:order-last sm:mb-0">
                {mentor.jabatan}
              </time>
              <div className="text-md font-normal text-gray-500 flex dark:text-gray-300">
                {mentor.nama}
              </div>
            </div>
            <div className="p-3 es:text-base italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
              {mentor.quote}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MentorCard;
