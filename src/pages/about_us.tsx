import Nav from "../components/shared/NavBar";
import {
  Box,
  Button,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";

export default function AboutUs(props) {
  return (
    <div>
      <div>
        <Nav></Nav>
      </div>
      <div className="flex flex-row justify-center w-full h-96">
        <div className="bg-blue-400 w-screen">
          <h1 className="flex justify-center text-9xl">Sobre nós</h1>
        </div>
        <div className="bg-red-300 w-full"></div>
      </div>
      <div className="flex flex-row justify-center h-96">
        <div className="bg-yellow-600 w-screen">
          <h1 className="flex justify-center text-9xl">Sobre nós</h1>
        </div>
      </div>
      <div className="flex flex-row justify-center h-96">
        <div className="bg-gray-800 w-screen">
          <h1 className="flex justify-center text-9xl">Sobre nós</h1>
        </div>
      </div>
    </div>
  );
}
