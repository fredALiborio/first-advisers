import react from 'react'
import {Transition} from "@headlessui/react"; //for smooth transition between tabs
import {Link} from "react-scroll"; // Alternate for a tag. 

interface NavBarProps {

}

export default function Navbar(props: NavBarProps) {
    return (
        <div className="shadow-md w-full fixed z-10">
            <div className="md:flex bg-white py-4 md:px-10 px-7">
                <div>
                        <img src="logo.png"/>
                </div>
                <div className='hidden md:block'>
                    <div className='ml-10 flex items-baseline mx-20 space-x-4'>
                        <Link 
                        activeClass="Home"
                        to="about"
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="cursor-pointer text-blue-900 font-semibold px-3 py-2 text-md hover:font-black"
                        >
                            Home
                        </Link>
                        <Link 
                            activeClass="Home"
                            to="home"
                            smooth={true}
                            offset={50}
                            duration={500}
                            className="cursor-pointer text-blue-900 font-semibold px-3 py-2 text-md hover:font-black"
                        >
                            Sobre nós
                        </Link>
                        <Link 
                            activeClass="Services"
                            to="services"
                            smooth={true}
                            offset={50}
                            duration={500}
                            className="cursor-pointer text-blue-900 font-semibold px-3 py-2 text-md hover:font-black"
                        >
                            Serviços
                        </Link>
                        <Link 
                            activeClass="Clients"
                            to="clients"
                            smooth={true}
                            offset={50}
                            duration={500}
                            className="cursor-pointer text-blue-900 font-semibold px-3 py-2 text-md hover:font-black"
                        >
                            Parcerias
                        </Link>
                        <Link 
                            activeClass="Contacts"
                            to="contacts"
                            smooth={true}
                            offset={50}
                            duration={500}
                            className="cursor-pointer text-blue-900 font-semibold px-3 py-2 text-md hover:font-black"
                        >
                            Contactos
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}