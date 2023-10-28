import "../global.css";
import { Flowbite, TextInput, Checkbox, Label, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const customTheme = {
    textInput: {
      field: {
        rightIcon: {
          base: "cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3",
          svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
        },
        input: {
          sizes: {
            sm: "p-2 sm:text-xs",
            md: "p-3 text-sm",
          },
          colors: {
            gray: "bg-gray-50 text-gray-900 focus:border-blue-400 focus:ring-[2px] focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-red-500 dark:focus:ring-red-50",
          },
        },
      },
    },
    checkbox: {
      root: {
        base: "h-4 w-4 rounded focus:ring-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 bg-gray-100",
        color: {
          default:
            "cursor-pointer focus:ring-blue-500 dark:ring-offset-blue-500 dark:focus:ring-blue-500 text-blue-500",
        },
      },
    },
    button: {
      color: {
        blue: "text-white bg-gradient-to-r from-blue-500 to-blue-700",
      },
    },
  };

  return (
    <div id="login" className="w-full h-screen grid grid-cols-12">
      <div className="col-span-5 h-screen bg-[url('/assets/loginBanner.png')] bg-cover bg-center bg-no-repeat hidden md:block"></div>
      <div className="col-span-12 md:col-span-7 h-screen bg-gradient-to-br from-blue-500 to-blue-950 flex justify-center items-center">
        <div className="w-full md:w-96 lg:w-1/2 flex flex-col gap-y-10 px-3">
          <div className="flex flex-col gap-y-2">
            <p className="text-3xl md:text-4xl text-white font-bold">Pijar Pelajar</p>
            <p className="text-md text-white font-normal">
              Selamat datang kembali, silahkan login terlebih dahulu
            </p>
          </div>
          <form className="w-full" action="">
            <ul className="w-full flex flex-col gap-y-6">
              <li>
                <Flowbite theme={{ theme: customTheme }}>
                  <TextInput
                    className="w-full"
                    type="text"
                    placeholder="Username"
                    autoComplete="off"
                    autoFocus
                  />
                </Flowbite>
              </li>
              <li>
                <Flowbite theme={{ theme: customTheme }}>
                  <TextInput
                    className="w-full"
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                    rightIcon={AiFillEyeInvisible}
                  />
                </Flowbite>
              </li>
              <li className="flex items-center gap-2">
                <Flowbite theme={{ theme: customTheme }}>
                  <Checkbox id="rememberMe" />
                  <Label className="text-white" htmlFor="rememberMe">
                    <p>ingat saya</p>
                  </Label>
                </Flowbite>
              </li>
              <li>
                <Flowbite theme={{ theme: customTheme }}>
                  <Link to="/">
                    <Button className="w-full" color="blue">
                      Sign in
                    </Button>
                  </Link>
                </Flowbite>
              </li>
              <li>
                <p className="text-white">
                  Belum punya akun?{" "}
                  <Link to="/register" className="font-medium">
                    Daftar
                  </Link>
                </p>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
