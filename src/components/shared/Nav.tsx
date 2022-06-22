import { Input } from "@chakra-ui/react";
import { ContactIcon, SearchIcon } from '../../styles/icons.chakra'

export default function Nav(props) {
    return (
        <div className="flex flex-row justify-center bg-white">
            <div className="w-40  rounded-lg">
                <img src="logo.png"/>
            </div>
            <div className="flex justify-end w-full bg-white space-x-10 p-9 text-black text-md rounded-md">
                <button className=" rounded-sm p-1">Home</button>
                <button className=" rounded-sm p-1">Sobre nós</button>
                <button className=" rounded-sm p-1">Serviços</button>
                <button className=" rounded-sm p-1">Parcerias</button>
                <button className=" rounded-sm p-1">Contactos</button>
            </div>
            <div className="flex w-80 p-9 ">
                <SearchIcon size='md'/>
                <Input placeholder='Pesquisar...' size='sm' />
            </div>
        </div>
    )
}