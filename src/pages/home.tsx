import Nav from "../components/shared/Nav";
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
  } from '@chakra-ui/react'

export default function Home(props) {
    return(
        <div className="">
            <div className="sticky z-40 shadow-md shadow-blue-200 top-0 border-b-2 border-blue-300">
                <Nav></Nav>
            </div>
                <div className="flex relative bg-white h-screen">
                    <div className="flex absolute right-60 h-96 w-64 top-24 items-center bg-blue-200">
                        <p className="flex text-white text-lg p-10">A Empresa distingue-se pelo reconhecido elevado nível de serviço ao cliente, pelas suas
                            competências e experiencia no mercado onde se encontra posicionado.
                        </p>
                    </div>
                    <div className="flex absolute left-60 h-80 w-96 top-20 bg-gray-200">
                    </div>
                    <div className="flex absolute p-60 h-40 w-40">
                        <img className="flex absolute left-80 top-28 " src="home.png"/>
                    </div>
                    
                    {/* <div className="static h-32 w-32 bg-green-600 p-10">
                        <h1>TESTE2</h1>
                    </div>
                    <div className="static h-48 w-48 -left-4 bottom-4 bg-yellow-600">
                        <h1>TESTE3</h1>
                    </div> */}
                </div>
            <div className="flex bg-gray-200 h-screen">

            </div>
            <Footer></Footer>
        </div>
    )
}