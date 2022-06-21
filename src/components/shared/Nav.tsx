
export default function Nav(props) {
    return (
        <div className="flex flex-row">
            <img src="logo.png"/>
            <div className="flex flex-row">
                <menu className="flex space-x-3 flex-row mx-2 my-2 p-4 text-black text-xl rounded-md">
                    <li><h1 className="bg-white rounded-sm p-1">TESTE 1</h1></li>
                    <li><h1 className="bg-white rounded-sm p-1">TESTE 2</h1></li>
                    <li><h1 className="bg-white rounded-sm p-1">TESTE 3</h1></li>
                </menu> 
            </div>
        </div>
    )
}