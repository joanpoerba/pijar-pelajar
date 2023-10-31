import { useState } from "react";
import { Button, Modal, Textarea, Label, TextInput } from "flowbite-react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

const Header = () => {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  const [isOpen, setOpen] = useState(false);
  const [navbarStatus, setNavbarStatus] = useState(false);

  const notify = () => toast.success("Pesan anda sudah terkirim!");

  return (
    <>
      <section className="2xl:w-[1400px] xl:w-[1100px] lg:w-[900px] hidden lg:flex flex-row justify-between items-center py-4">
        <a
          href="#home"
          className="text-3xl text-blue-600 font-bold flex flex-col"
        >
          Pijar Pelajar
          <span className="text-[16px] text-slate-800 font-normal">
            Upgrade cara belajar mu
          </span>
        </a>
        <nav>
          <ul className="flex items-center gap-x-20">
            <li>
              <a
                href="#courses"
                className="text-[17px] font-medium text-slate-800 hover:text-blue-600"
              >
                Courses{" "}
                <span className="py-1 px-2 bg-blue-600 rounded-sm text-white font-semibold text-[13px]">
                  NEW
                </span>
              </a>
            </li>
            <li>
              <a
                href="#mentor"
                className="text-[17px] font-medium text-slate-800 hover:text-blue-600 transition-all"
              >
                Mentor
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-[17px] font-medium text-slate-800 hover:text-blue-600 transition-all"
              >
                FAQ
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-x-5">
          <button
            onClick={() => props.setOpenModal("default")}
            className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-600 px-4 rounded-full font-medium text-white border-0 focus:ring-0 py-2"
          >
            Get In Touch
          </button>
          <Link
            to="/login"
            className="bg-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 px-4 rounded-full font-medium text-blue-600 hover:text-white border-[1px] border-blue-600 hover:border-white focus:ring-0 py-2"
          >
            Masuk
          </Link>
        </div>
      </section>
      <div
        className={`w-full lg:hidden flex flex-row justify-between items-center py-2 bg-white z-10 px-8 es:px-3 ${
          navbarStatus ? "shadow-none" : "shadow-lg"
        }`}
      >
        <a
          href="#home"
          className="md:text-3xl text-2xl es:text-[20px] text-blue-600 font-bold flex flex-col"
        >
          Pijar Pelajar
          <span className="md:text-[16px] text-sm text-slate-800 font-normal">
            Upgrade cara belajar mu
          </span>
        </a>
        <Hamburger
          size={26}
          onToggle={(toggled) => {
            if (toggled) {
              setNavbarStatus(true);
            } else {
              setNavbarStatus(false);
            }
          }}
          toggled={isOpen}
          toggle={setOpen}
          color="#2563eb"
        />
      </div>
      <section
        className={`w-full ${
          navbarStatus ? "flex" : "hidden"
        } justify-center items-center bg-white py-5 shadow-lg`}
      >
        <div></div>
        <nav className="w-full px-10">
          <ul className="flex flex-col items-center gap-y-4">
            <li className="">
              <a
                href="#courses"
                className="text-[17px] font-medium text-slate-800 hover:text-blue-600"
              >
                Courses{" "}
                <span className="py-1 px-2 bg-blue-600 rounded-sm text-white font-semibold text-[13px]">
                  NEW
                </span>
              </a>
            </li>
            <li className="">
              <a
                href="#mentor"
                className="text-[17px] font-medium text-slate-800 hover:text-blue-600 transition-all"
              >
                Mentor
              </a>
            </li>
            <li className="">
              <a
                href="#faq"
                className="text-[17px] font-medium text-slate-800 hover:text-blue-600 transition-all"
              >
                FAQ
              </a>
            </li>
            <li className="w-full">
              <Button
                onClick={() => props.setOpenModal("default")}
                className="w-full bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-600 px-4 rounded-full font-semibold text-white border-0 focus:ring-0"
              >
                Get In Touch
              </Button>
            </li>
            <li className="w-full">
              <Link to="/login">
                <Button className="w-full bg-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 px-4 rounded-full font-medium text-blue-600 hover:text-white border-[1px] border-blue-600 hover:border-white focus:ring-0">
                  Masuk
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <Modal
        show={props.openModal === "default"}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>Get in touch with us</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <form className="flex w-full flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email2" value="Email" />
                </div>
                <TextInput
                  id="email2"
                  placeholder="example@gmail.com"
                  shadow
                  type="email"
                  autoComplete="off"
                />
              </div>
              <div id="textarea">
                <div className="mb-2 block">
                  <Label htmlFor="comment" value="Your message" />
                </div>
                <Textarea
                  className="resize-none focus:border-blue-600"
                  id="comment"
                  placeholder="Leave a comment..."
                  rows={4}
                />
              </div>
              <a
                className="mt-5 bg-blue-600 enabled:hover:bg-blue-700 text-white py-2 rounded-md text-center"
                type="submit"
                onClick={notify}
              >
                Kirim
                <ToastContainer />
              </a>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
