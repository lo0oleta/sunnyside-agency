import Footer from "@/component/Footer";
import NavBar from "@/component/NavBar";
import { chakra } from "@chakra-ui/react";
import Image from "next/image";
import Landing from "@/component/Landing";

export default function Index() {
  return (
    <chakra.main>
      {/* <NavBar /> */}
      <Landing />
      <Footer />
    </chakra.main>
  );
}
