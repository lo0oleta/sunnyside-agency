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

const firstImage = "./images/desktop/image-header.jpg";
const standout = "./images/desktop/image-stand-out.jpg";
const photography = "./images/desktop/image-photography.jpg";
const sugarcubes = "./images/desktop/image-gallery-sugarcubes.jpg";
const orange = "./images/desktop/image-gallery-orange.jpg";
const milkbottles = "./images/desktop/image-gallery-milkbottles.jpg";
const graphic = "./images/desktop/image-graphic-design.jpg";
const transform = "./images/desktop/image-transform.jpg";
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
      </Box>
    </>
  );
}
