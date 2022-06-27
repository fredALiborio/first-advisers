import Nav from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";

import {
  Box,
  Button,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";

export default function Home(props) {
  return (
    <div className="">
      <div className="sticky z-40 shadow-md shadow-blue-200 top-0 border-b-2 border-blue-400">
        <Nav></Nav>
      </div>
      <div className="flex h-1/3 max-h-screen">
        <img className="w-full relative" src="history.png" />
        <div className="absolute right-44 top-52">
          <div className="w-72">
            <p className="leading-10 text-2xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
      <div className="flex relative bg-white h-screen">
        <div className="flex absolute right-60 h-96 w-96 -top-0 bg-gradient-to-t from-slate-300 to-white" />
        <div className="flex absolute right-60 h-80 w-96 top-28 items-center">
          <p className="flex leading-10 text-white text-2xl m-2 p-4 bg-sky-800">
            A Empresa distingue-se pelo reconhecido elevado nível de serviço ao
            cliente, pelas suas competências e experiencia no mercado onde se
            encontra posicionado.
          </p>
        </div>
        <div className="flex absolute left-60 h-80 w-96 top-20 bg-gradient-to-t from-slate-300  to-gray-100" />
        <div className="flex absolute p-60 h-40 w-40">
          <img className="flex absolute left-72 top-28 " src="home.png" />
        </div>

        {/* <div className="static h-32 w-32 bg-green-600 p-10">
                        <h1>TESTE2</h1>
                    </div>
                    <div className="static h-48 w-48 -left-4 bottom-4 bg-yellow-600">
                        <h1>TESTE3</h1>
                    </div> */}
        <div className="flex flex-col absolute items-center bg-slate-400 m-10 -bottom-80 h-98 w-3/4 left-36 ">
          <div className="flex m-4 uppercase">
            <h1>Objeto da Empresa</h1>
          </div>
          <div className="flex">
            <h1 className="text-2xl font-semibold">
              Disponibilizar serviços de Consultoria de Negócios
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-2 bg-slate-400 m-6 w-3/4">
            <div className="flex flex-col w-full hover:scale-105 h-28 border-2 justify-end text-base text-center items-center border-slate-500 bg-slate-400">
              <img className="w-10" src="assessorar.png" />
              <p className="p-2">Acessorar transações de venda e aquisição</p>
            </div>
            <div className="flex flex-col w-full hover:scale-105 h-28 border-2 justify-end items-center border-slate-500 bg-slate-400 pb-3">
              <img className="w-10" src="property.png" />
              <p className="p-2">Consultoria Imobiliária</p>
            </div>
            <div className="flex flex-col w-full hover:scale-105 h-28 border-2 justify-end items-center text-center border-slate-500 bg-slate-400 pb-3">
              <img className="w-10" src="consultoria.png" />
              <p className="p-2">Consultoria de Gestão</p>
            </div>
            <div className="flex flex-col w-full hover:scale-105 h-28 border-2 justify-end items-center text-center border-slate-500 bg-slate-400">
              <img className="w-10" src="administrator.png" />
              <p className="p-2">Contabilidade e apoio administrativo</p>
            </div>
            <div className="flex flex-col w-full hover:scale-105 h-28 border-2 justify-end items-center border-slate-500 bg-slate-400 pb-3">
              <img className="w-10" src="fiscalidade.png" />
              <p className="p-2">Fiscalidade</p> 
            </div>
            <div className="flex flex-col w-full hover:scale-105 h-28 border-2 justify-end items-center text-center border-slate-500 bg-slate-400">
              <img className="w-10" src="procesamento.png" />
              <p className="p-2">Processamento de Salários e Faturação</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center bg-slate-200 h-screen w-full">
        <div className="flex relative  h-96 w-full top-48 -right-32 left-0">
          <div className="grid grid-rows-3 w-full justify-center h-60">
            <div className="flex justify-center h-10 w-96 p-5">
              <h1 className="flex font-semibold text-2xl text-sky-900">
                EQUIPA
              </h1>
            </div>
            <div className="grid grid-cols-2 h-24 gap-10">
              <div className="flex justify-center  items-center">
                <img
                  className="inline object-cover w-32 mr-2 rounded-full"
                  src="fred.jpeg"
                  alt="Profile image"
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  className="inline object-cover w-32 mr-2 rounded-full"
                  src="fred.jpeg"
                  alt="Profile image"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 justify-center gap-10">
              <div className="flex justify-center items-end">
                <h1 className="font-semibold text-sky-900">
                  Financial Advisor
                </h1>
              </div>
              <div className="flex justify-center items-end">
                <h1 className="font-semibold text-sky-900">
                  Capital Market Diretor
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
