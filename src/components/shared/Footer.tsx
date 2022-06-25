import Link from "../../../node_modules/next/link"

export default function Footer(props) {
    return (
        <div className="flex h-64 shadow-blue-200 top-0 border-t-2 border-blue-400">
            <div className="flex justify-center bg-slate-300 w-1/3 m-10 items-center">
                <h1 className="flex font-bold text-4xl text-transparent bg-clip-text bg-sky-900">FIRST ADVISERS</h1>
            </div>
            <div className="justify-start p-4 bg-slate-300 w-1/3 m-10">
                <div>
                    <h1 className="text-xl h-10 underline underline-offset-8 font-semibold text-sky-900 decoration-4">CONTACTOS</h1>
                </div>
                <div className="flex space-x-10">
                    <div className="flex">
                        <ul>
                            <li className="text-lg m-6 font-semibold text-sky-900">Rua Fernando Pedroso, 23 1000-130 Lisboa</li>
                            <li className="text-lg m-6 font-semibold text-sky-900">Telef.: +351 91 364 25  46</li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className="justify-start p-4 bg-slate-300 w-1/3 m-10">
                <div>
                    <h1 className="h-10 text-xl font-semibold underline underline-offset-8 text-sky-900 decoration-4">MENU</h1>
                </div>
                <div className="flex space-x-10">
                    <div className="flex">
                        <ul>
                            <li className="text-lg m-6 font-semibold text-sky-900 underline"><Link href="/clients">Sobre Nós</Link></li>
                            <li className="text-lg m-6 font-semibold text-sky-900 underline"><Link href="/clients">Serviços</Link></li>
                        </ul>
                    </div>
                    <div className="flex">
                        <ul>
                            <li className="text-lg m-6 font-semibold text-sky-900 underline"><Link href="/clients" >Parcerias</Link></li>
                            <li className="text-lg m-6 font-semibold text-sky-900 underline"><Link href="/clients" >Contactos</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}