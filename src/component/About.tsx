import {
  Container,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  useBreakpointValue,
  Box,
  HStack,
} from "@chakra-ui/react";

const standout = "./images/desktop/image-stand-out.jpg";
const photography = "./images/desktop/image-photography.jpg";
const graphic = "./images/desktop/image-graphic-design.jpg";
const transform = "./images/desktop/image-transform.jpg";

export default function About() {
  return (
    <Container minWidth={"full"}>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex flex={1} align={"center"} justify={"center"}>
          <Stack w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <br />{" "}
              <Text
                color={"desaturatedBlue"}
                as={"span"}
                fontFamily={"var(--font-fraunces)"}
              >
                Tranform your brand
              </Text>{" "}
            </Heading>
            <Text
              fontSize={{ base: "md", lg: "lg" }}
              color={"gray.500"}
              noOfLines={3}
              fontFamily={"var(--font-barlow)"}
            >
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </Text>
            <Heading>
              <Text
                as={"span"}
                position={"relative"}
                fontFamily={"var(--font-fraunces)"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "yellow.400",
                  zIndex: -1,
                }}
              >
                Learn more{" "}
              </Text>
              <br />{" "}
            </Heading>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image alt={"Login Image"} objectFit={"cover"} src={transform} />
        </Flex>
      </Stack>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex flex={1}>
          <Image alt={"Login Image"} objectFit={"cover"} src={standout} />
        </Flex>
        <Flex flex={1} align={"center"} justify={"center"}>
          <Stack w={"full"} maxW={"lg"}>
            <Heading
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontFamily={"var(--font-fraunces)"}
            >
              <br />{" "}
              <Text color={"desaturatedBlue"} as={"span"} noOfLines={2}>
                Stand out to the right audience
              </Text>{" "}
            </Heading>
            <Text
              fontSize={{ base: "md", lg: "lg" }}
              color={"gray.500"}
              noOfLines={3}
              fontFamily={"var(--font-barlow)"}
            >
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </Text>
            <Heading>
              <Text
                as={"span"}
                position={"relative"}
                fontFamily={"var(--font-fraunces)"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "brandSoftRed",
                  zIndex: -1,
                }}
              >
                Learn more{" "}
              </Text>
              <br />{" "}
            </Heading>
          </Stack>
        </Flex>
      </Stack>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
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
              fontFamily={"var(--font-fraunces)"}
              marginInline={"15vh"}
              fontWeight="bold"
            >
              Graphic design
            </Text>

            <Text
              fontSize="1xl"
              fontFamily={"var(--font-barlow)"}
              marginInline={"20vh"}
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
              marginInline={"20vh"}
            >
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business
            </Text>
          </Box>
        </HStack>
      </Stack>
    </Container>
  );
}
