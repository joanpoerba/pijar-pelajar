import { Accordion } from "flowbite-react";

const Faq = () => {
  return (
    <Accordion className="w-full mt-20" collapseAll>
      <Accordion.Panel>
        <Accordion.Title className="bg-blue-600 hover:bg-blue-700 focus:ring-0 text-white">
          Apa itu Pijar Pelajar?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <span className="customUnderline">Pijar pelajar</span> merupakan
            platform belajar secara online khususnya skill bidang digital
            seperti coding, editing, data science, designing, dan banyak course
            digital lainnya.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="bg-blue-600 hover:bg-blue-700 focus:ring-0 text-white">
          Tujuan Pijar Pelajar?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Kami hadir untuk membantu banyak{" "}
            <span className="customUnderline">anak bangsa</span>, khususnya di
            bidang <span className="customUnderline">teknologi</span>, agar
            dapat bersaing di dunia{" "}
            <span className="customUnderline">modern</span>.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="bg-blue-600 hover:bg-blue-700 focus:ring-0 text-white">
          Benefit setelah belajar?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Buat kamu yang belajar di{" "}
            <span className="customUnderline">Pijar Pelajar</span>, selain
            mendapat skill, dan relasi baru, kamu juga bakal dapat sertifikat
            kelulusan, dan bagi murid terbaik, maka secara otomatis akan
            mendapat pekerjaan di Start Up ini.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default Faq;
