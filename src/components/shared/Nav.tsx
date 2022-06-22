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
import { SearchIcon } from '../../styles/icons.chakra';
import Link from "next/link";
import { ChevronDownIcon } from '@chakra-ui/core'
import { useState } from "react";


export default function Nav(props) {

    const[isActive, setIsActive] = useState(false);

    return (
        <div className="flex flex-row justify-center bg-white">
            <div className="w-40 p-4 rounded-lg">
                <img src="logo.png"/>
            </div>
            <div className="flex justify-end w-full bg-white space-x-10 p-10 text-black text-lg rounded-md">
                <Link 
                    href="/home" 
                    className=" rounded-sm p-1">Home</Link>
                <Link 
                    href="/about_us" 
                    className="rounded-sm p-1">Sobre nós</Link>
                    <Box 
                        onMouseEnter={() => setIsActive(true)} 
                        onMouseLeave={() => setIsActive(false)}>
                        <button className="bg-white list-none text-black text-lg divide-gray-100 inline-flex items-center">
                            Serviços
                        </button>
                        { isActive==true ? 
                            <menu className="absolute bg-white text-base z-50 list-none divide-y divide-gray-100 my-2 rounded-sm p-2 border-spacing-1 border-gray-400 border-1">
                                    <li className='my-3 hover:bg-blue-50 p-2 rounded-sm'>
                                        <Link 
                                            href="/real_state" 
                                            className="text-sm text-gray-700 block px-4 py-2">
                                                Consultoria Imobiliária
                                        </Link>
                                    </li>
                                    <li className='my-3 hover:bg-blue-50 p-2 rounded-sm'>
                                        <Link 
                                            href="/management_consultancy" 
                                            className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">
                                                Consultoria de Gestão
                                        </Link>
                                    </li>
                            </menu> 
                            : 
                            <div></div>
                        }
                    </Box>
                <Link 
                    href="/clients" 
                    className="rounded-sm p-1">Parcerias</Link>
                <Link 
                    href="/contacts" 
                    className="rounded-sm p-1">Contactos</Link>
            </div>
            <div className="flex w-80 p-9 space-x-3">
                <div className="">
                    <SearchIcon size='5em' />
                </div>
                <Input placeholder='Pesquisar...' size='sm' variant="flushed"  _placeholder={{ color: 'gray' }}/>
            </div>
        </div>
    )
}
