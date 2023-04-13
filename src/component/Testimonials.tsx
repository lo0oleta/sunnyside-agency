import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

const thomas = "./images/image-thomas.jpg";
const jennie = "./images/image-jennie.jpg";
const emily = "./images/image-emily.jpg";

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading fontFamily={"var(--font-fraunces)"} color={"grayishBlue"}>
            CLIENT TESTIMONIALS
          </Heading>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialAvatar
              src={emily}
              name={"Emily R."}
              title={"Marketing Director"}
            />
            <TestimonialContent>
              <TestimonialText>
                We put our trust in Sunnyside and they delivered, making sure
                our needs were met and deadlines were always hit.
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
          <Testimonial>
            <TestimonialAvatar
              src={thomas}
              name={"Thomas S."}
              title={"Chief Operating Officer"}
            />
            <TestimonialContent>
              <TestimonialText>
                Sunnyside’s enthusiasm coupled with their keen interest in our
                brand’s success made it a satisfying and enjoyable experience.
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
          <Testimonial>
            <TestimonialAvatar
              src={jennie}
              name={"Jennie F."}
              title={"Business Owner"}
            />
            <TestimonialContent>
              <TestimonialText>
                ncredible end result! Our sales increased over 400% when we
                worked with Sunnyside. Highly recommended!
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
