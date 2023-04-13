import Footer from "@/component/Footer";
import NavBar from "@/component/NavBar";
import { chakra } from "@chakra-ui/react";
import Image from "next/image";
import Landing from "@/component/Landing";
import About from "@/component/About";
import Testimonials from "@/component/Testimonials";
import Projects from "@/component/Projects";

export default function Index() {
  return (
    <chakra.main>
      <Landing />
      <About />
      <Testimonials />
      <Projects />
    </chakra.main>
  );
}
