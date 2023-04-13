import Head from "next/head";

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Flex,
  VStack,
  HStack,
  Image,
  Center,
  Square,
  Link,
  Spacer,
} from "@chakra-ui/react";
import NavBar from "@/component/NavBar";

const firstImage = "./images/desktop/image-header.jpg";
const standout = "./images/desktop/image-stand-out.jpg";
const photography = "./images/desktop/image-photography.jpg";
const sugarcubes = "./images/desktop/image-gallery-sugarcubes.jpg";
const orange = "./images/desktop/image-gallery-orange.jpg";
const milkbottles = "./images/desktop/image-gallery-milkbottles.jpg";
const graphic = "./images/desktop/image-graphic-design.jpg";
const transform = "./images/desktop/image-transform.jpg";

export default function Landing() {
  return (
    <>
      <Box>
        <Box bgImage={firstImage} bgPosition="center" bgSize="cover" h="770px">
          <NavBar />

          <Box maxW="800px" mx="auto" pt={20} ml="32%">
            <Heading
              as="h1"
              size="2xl"
              color="white"
              fontFamily={"var(--font-fraunces)"}
            >
              WE ARE CREATIVES
            </Heading>
            <Image
              mt={"2vh"}
              marginStart={"30%"}
              src="images/icon-arrow-down.svg"
              alt="Dan Abramov"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
