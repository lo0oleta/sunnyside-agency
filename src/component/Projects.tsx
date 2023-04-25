import {
  Box,
  VStack,
  Button,
  Flex,
  Image,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
} from "@chakra-ui/react";
import {} from "@chakra-ui/react";
import Footer from "./Footer";

const sugarcubes = "./images/desktop/image-gallery-sugarcubes.jpg";
const orange = "./images/desktop/image-gallery-orange.jpg";
const milkbottles = "./images/desktop/image-gallery-milkbottles.jpg";
const cone = "./images/desktop/image-gallery-cone.jpg";

export default function gridListWithCTA() {
  return (
    <>
      <Box maxW="14xl" maxH={"100vh"}>
        <Divider />
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          }}
        >
          <Image alt={"Login Image"} objectFit={"cover"} src={milkbottles} />
          <Image alt={"Login Image"} objectFit={"cover"} src={orange} />
          <Image alt={"Login Image"} objectFit={"cover"} src={cone} />{" "}
          <Image alt={"Login Image"} objectFit={"cover"} src={sugarcubes} />
        </Grid>
        <Footer />
      </Box>
    </>
  );
}
