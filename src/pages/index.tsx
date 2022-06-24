import Nav from "../components/shared/NavBar";
import Link from "next/link";
import Home from "./home";

export default function Index() {
  return (
    <>
          {/* <img src="logo.png"/>
          <div className={`
            flex h-screen justify-center items-center
          `}>
            <h1 className="text-4xl">FIRST ADVISERS</h1>
          </div> */}
      {/* <img src="logo.png"/> */}
      
      <div className="bg-blue-400 min-h-screen">
        <Home></Home>
      </div>
    </>
  )
}
