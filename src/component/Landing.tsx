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
      {/* <Container maxW={"7xl"}> */}

      <Flex direction="column">
        <Box
          w="100%"
          h="100vh"
          // mb={4}
          bgImage={firstImage}
          bgSize="cover"
          bgAttachment="semi-fixed"
          bgPos="50% 100%"
          pos="relative"
          bgRepeat="no-repeat"
        >
          <NavBar />

          <Text
            marginStart={"30%"}
            fontSize="6xl"
            mt={"10vh"}
            fontWeight="bold"
            fontFamily={"var(--font-fraunces)"}
            color="white"
          >
            WE ARE CREATIVES
          </Text>

          <Image
            mt={"5vh"}
            marginStart={"50%"}
            src="images/icon-arrow-down.svg"
            alt="Dan Abramov"
          />
        </Box>

        <VStack align="stretch">
          <HStack>
            <Box
              w="50%"
              h="100vh"
              justifyContent={"center"}
              alignItems="center"
            >
              <Text
                fontSize="6xl"
                mt={"20vh"}
                marginInline={"20vh"}
                fontWeight="bold"
                fontFamily={"var(--font-fraunces)"}
              >
                Trasform your brand
              </Text>
              <Text
                fontSize="1xl"
                fontWeight="bold"
                mt={"5vh"}
                marginInline={"20vh"}
                fontFamily={"var(--font-barlow)"}
                noOfLines={3}
              >
                We are a full-service creative agency specializing in helping{" "}
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you.
              </Text>
              <Button
                fontSize="2xl"
                mt={5}
                marginInline={"20vh"}
                fontWeight="bold"
              >
                Learn More
              </Button>
            </Box>
            <Box
              w="50%"
              h="100vh"
              bgImage={transform}
              bgSize="cover"
              bgAttachment="semi-fixed"
              bgPos="50% 100%"
              pos="relative"
              bgRepeat="no-repeat"
            ></Box>
          </HStack>

          <HStack>
            <Box
              w="50%"
              h="100vh"
              bgImage={standout}
              bgSize="cover"
              bgAttachment="semi-fixed"
              bgPos="50% 100%"
              pos="relative"
              bgRepeat="no-repeat"
            ></Box>
            <Box
              w="50%"
              h="100vh"
              justifyContent={"center"}
              alignItems="center"
            >
              <Text
                fontSize="6xl"
                mt={"20vh"}
                marginInline={"20vh"}
                fontWeight="bold"
                fontFamily={"var(--font-fraunces)"}
              >
                Stand out to the right audience
              </Text>
              <Text
                fontSize="1xl"
                fontWeight="bold"
                mt={"5vh"}
                marginInline={"20vh"}
                noOfLines={3}
                fontFamily={"var(--font-barlow)"}
              >
                Using a collaborative formula of designers, researchers,{" "}
                photographers, videographers, and copywriters, well build and
                extend your brand in digital places.
              </Text>
              <Button
                fontSize="2xl"
                marginInline={"20vh"}
                mt={5}
                fontWeight="bold"
              >
                Learn More
              </Button>
            </Box>
          </HStack>
          <HStack>
            <Box
              w="50%"
              h="100vh"
              bgImage={graphic}
              bgSize="cover"
              bgAttachment="semi-fixed"
              bgPos="50% 100%"
              pos="relative"
              bgRepeat="no-repeat"
            >
              <Text
                fontSize="6xl"
                mt={"60vh"}
                marginInline={"15vh"}
                fontWeight="bold"
                fontFamily={"var(--font-fraunces)"}
              >
                Graphic design
              </Text>

              <Text
                fontSize="1xl"
                fontWeight="bold"
                mt={"5vh"}
                marginInline={"20vh"}
                noOfLines={3}
                fontFamily={"var(--font-barlow)"}
              >
                Using a collaborative formula of designers, researchers,{" "}
                photographers, videographers, and copywriters, well build and
                extend your brand in digital places.
              </Text>
            </Box>
            <Box
              w="50%"
              h="100vh"
              bgImage={photography}
              bgSize="cover"
              bgAttachment="semi-fixed"
              bgPos="50% 100%"
              pos="relative"
              bgRepeat="no-repeat"
              alignItems="center"
            >
              <Text
                fontSize="6xl"
                mt={"60vh"}
                fontFamily={"var(--font-fraunces)"}
                marginInline={"20vh"}
                fontWeight="bold"
              >
                Photography
              </Text>
              <Text
                fontSize="1xl"
                fontFamily={"var(--font-barlow)"}
                mt={"10vh"}
                marginInline={"20vh"}
              >
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business
              </Text>
            </Box>
          </HStack>
        </VStack>

        <Box
          w="100%"
          h="60vh"
          bgSize="cover"
          bgAttachment="semi-fixed"
          bgPos="50% 100%"
          pos="relative"
          bgRepeat="no-repeat"
          justifyContent="center"
        >
          <Center
            fontSize="6xl"
            marginInline={"20vh"}
            color={"grayishBlue"}
            fontWeight="bold"
          >
            CLIENT TESTIMONIALS
          </Center>
        </Box>
      </Flex>
      {/* </Container> */}
    </>
  );
}
