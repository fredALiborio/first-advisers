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
        <div className="flex flex-row w-screen bg-white">
            <div className="w-48 ml-10 p-4">
                <img src="logo.png"/>
            </div>
            <div className="flex justify-end w-full items-center bg-white space-x-10 p-10 text-black text-base rounded-md">
                <Link 
                    href="/home"><a className='hover:text-blue-400'>Home</a></Link>
                <Link 
                    href="/about_us" 
                    className=""><a className='hover:text-blue-400'>Sobre Nós</a></Link>
                    <Box 
                        onMouseEnter={() => setIsActive(true)} 
                        onMouseLeave={() => setIsActive(false)}>
                        <button className="bg-white list-none text-black text-base divide-gray-100 inline-flex items-center">
                            <a className='hover:text-blue-400'>Serviços</a>
                        </button>
                        { isActive==true ? 
                            <menu className="absolute bg-white text-base list-none divide-y divide-gray-200 shadow-lg my-2 rounded-sm p-2 border-spacing-1 border-gray-400 border-1 -bottom-24">
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
                                            className="text-sm hover:bg-gray-100 text-gray-700 blocks px-4 py-2">
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
                    className=""><a className='hover:text-blue-400'>Parcerias</a></Link>
                <Link 
                    href="/contacts" 
                    className=""><a className='hover:text-blue-400'>Contactos</a></Link>
            </div>
            <div className="flex w-80 items-center mr-20 ml-20 space-x-3">
                <div>
                    <SearchIcon size='5em' />
                </div>
                <Input placeholder='Pesquisar...' size='sm' variant="flushed"  _placeholder={{ color: 'gray' }}/>
            </div>
        </div>
    )
}
