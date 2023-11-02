import { Link } from "react-router-dom";
import { BsX } from "react-icons/bs";

import { Flowbite, TextInput, Dropdown, Table } from "flowbite-react";
import { BsSearch } from "react-icons/bs";

const Career = () => {
  const customTheme = {
    button: {
      color: {
        white: "text-blue-600 bg-white border border-transparent",
      },
    },
  };

  return (
    <>
      <div className="w-full flex justify-center bg-gradient-to-b from-blue-500 to-blue-800 md:p-0 sm:p-8 p-4">
        <main className="lg:w-[1000px] md:w-[700px] w-full md:pt-14 p-0 pb-44">
          <Link className="relative" to="/">
            <BsX className="w-10 h-10 text-white" />
          </Link>
          <div className="mt-14">
            <div className="flex items-center gap-x-6">
              <img
                className="sm:block rounded-full md:w-40 sm:w-32 hidden"
                src="/assets/joan.jpg"
                alt=""
              />
              <div>
                <p className="md:text-4xl sm:text-2xl text-3xl text-white font-bold">
                  <q>
                    Lingkup kerja yang baik, <br /> menciptakan pekerja yang
                    baik juga.
                  </q>
                </p>
                <p className="text-white italic mt-3">- Joan Purba</p>
              </div>
            </div>
            <div className="flex flex-wrap lg:justify-between md:justify-start my-14 lg:gap-0 gap-5">
              <TextInput
                className="w-[500px]"
                id="email4"
                type="email"
                icon={BsSearch}
                placeholder="Cari berdasarkan posisi"
                required
              />
              <Flowbite theme={{ theme: customTheme }}>
                <Dropdown
                  label="Dapartemen (ODS / HoldCo)"
                  color="white"
                  dismissOnClick={false}
                >
                  <Dropdown.Item>ODS Technology</Dropdown.Item>
                  <Dropdown.Item>ODS Finance</Dropdown.Item>
                  <Dropdown.Item>HoldCo UI/UX</Dropdown.Item>
                  <Dropdown.Item>HoldCo Data Structure</Dropdown.Item>
                </Dropdown>
              </Flowbite>
              <Flowbite theme={{ theme: customTheme }}>
                <Dropdown
                  label="Lokasi (cabang)"
                  color="white"
                  dismissOnClick={false}
                >
                  <Dropdown.Item>Medan</Dropdown.Item>
                  <Dropdown.Item>Jakarta</Dropdown.Item>
                  <Dropdown.Item>Bandung</Dropdown.Item>
                  <Dropdown.Item>Surabaya</Dropdown.Item>
                  <Dropdown.Item>Bali</Dropdown.Item>
                </Dropdown>
              </Flowbite>
            </div>
          </div>
        </main>
      </div>
      <div className="flex justify-center md:pb-20 sm:p-8 p-4">
        <div className="lg:w-[1000px] md:w-[700px] w-full md:-mt-44 -mt-60">
          <p className="md:text-3xl sm:text-xl text-lg text-white font-medium">
            Lowongan yang tersedia saat ini
          </p>
          <p className="text-white mt-3">5 Lowongan tersedia</p>
          <div className="md:overflow-hidden overflow-x-auto overflow-y-hidden md:mt-0 mt-10">
            <section className="md:w-full w-[800px]">
              <Table className="mt-7" hoverable striped>
                <Table.Head>
                  <Table.HeadCell>Posisi</Table.HeadCell>
                  <Table.HeadCell>Dapartemen</Table.HeadCell>
                  <Table.HeadCell>Lokasi</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {"Account Executive"}
                    </Table.Cell>
                    <Table.Cell>ODS - Technology</Table.Cell>
                    <Table.Cell>Jakarta</Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Senior Engineer - Web Platform
                    </Table.Cell>
                    <Table.Cell>HoldCo - Finance</Table.Cell>
                    <Table.Cell>Medan</Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      UI/UX - Mobile Platform
                    </Table.Cell>
                    <Table.Cell>HoldCo - UI/UX</Table.Cell>
                    <Table.Cell>Bali</Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      UI/UX - Web Platform
                    </Table.Cell>
                    <Table.Cell>ODS - Finance</Table.Cell>
                    <Table.Cell>Jakarta</Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Data Analyst
                    </Table.Cell>
                    <Table.Cell>HoldCo - Finance</Table.Cell>
                    <Table.Cell>Surabaya</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
