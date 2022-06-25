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


export default function NavBar(props) {

    const[isActive, setIsActive] = useState(false);

    return (
        <div className="flex flex-row w-screen bg-slate-50">
            <div className="w-48 ml-10 p-4">
                <a href='/home'>
                    <img src="logo.png"/>
                </a>
            </div>
            <div className="flex justify-end w-full items-center bg-slate-50 space-x-10 p-10 text-sky-900 text-lg font-semibold rounded-md">
                <Link 
                    href="/home"><a className='hover:opacity-60'>Home</a></Link>
                <Link 
                    href="/about_us" 
                    className=""><a className='hover:opacity-60'>Sobre Nós</a></Link>
                    <Box 
                        onMouseEnter={() => setIsActive(true)} 
                        onMouseLeave={() => setIsActive(false)}>
                        <button className="bg-slate-50 list-none text-sky-900 text-lg divide-gray-100 inline-flex items-center">
                            <a className='hover:opacity-60'>Serviços</a>
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
                    className=""><a className='hover:opacity-60'>Parcerias</a></Link>
                <Link 
                    href="/contacts" 
                    className=""><a className='hover:opacity-60'>Contactos</a></Link>
            </div>
            <div className="flex w-80 items-center mr-20 ml-20 space-x-3">
                <div>
                    <SearchIcon size='5em' />
                </div>
                <Input placeholder='Pesquisar...' size='md' variant="flushed"  _placeholder={{ color: 'gray' }}/>
            </div>
        </div>
    )
}
