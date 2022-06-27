import Link from "next/link";
import { useState } from "react";

export default function Login(props) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div >
      <div className="flex h-screen justify-center">
        <img className="flex w-full relative" src="bench.jpg" />
        {isActive == true ? (
          <div className="flex absolute bg-white bg-opacity-30 hover:bg-opacity-60 flex-col items-center justify-center w-80 h-96 border-2 border-blue-800 rounded-xl top-10">
            <div className="flex bg-transparent items-center justify-center w-full h-16 border-blue-800 rounded-lg">
              <h1 className="flex text-2xl font-semibold text-blue-800">
                Iniciar Sessão
              </h1>
            </div>
            <div className="flex">
              <form action="">
                <br />
                <label htmlFor="" className="font-semibold text-blue-900">
                  E-mail
                </label>
                <br />
                <input
                  type="text"
                  id="fmail"
                  name="fmail"
                  className="mt-2 border-blue-800 border-2 rounded-md w-48 focus:outline-blue-900 text-blue-900"
                />
                <br />
                <br />
                <label htmlFor="" className="font-semibold text-blue-900">
                  Palavra-Passe
                </label>
                <br />
                <input
                  type="text"
                  id="fpassword"
                  name="fpassword"
                  className="mt-2 border-blue-800 border-2 rounded-md w-48 focus:outline-blue-900 text-blue-900"
                />
                <br />
                <br />
              </form>
            </div>
            <div>
              <button className="bg-transparent text-blue-800 font-semibold border-blue-800 border-2 rounded-md p-1 w-48 mb-5 hover:bg-blue-900 hover:text-white">
                Entrar
              </button>
            </div>
            <div className="flex justify-center">
              <Link href="/forgot_password" className="">
                <a className="text-xs items-center text-blue-800 hover:underline underline-offset-4">
                  Esqueci-me da palavra-passe
                </a>
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex absolute items-center h-80">
            <button
              className="text-blue-900 text-4xl bg-transparent border-2 p-4 border-blue-900 rounded-lg w-80 hover:bg-blue-900 hover:text-white"
              onClick={() => {
                setIsActive(true);
              }}
            >
              Fazer Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
