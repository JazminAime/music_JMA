import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { BsYoutube } from "react-icons/bs";
import { FaSpotify, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box position="relative" minH="100vh">
      <Flex
        position="relative"
        marginTop="100px"
        align="center"
        justify="center"
        direction="column"
        textAlign="center">
        <Text
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="bold"
          fontFamily="montserrat"
          marginTop="50px"
          color="custom.50">
          JESÚS MARÍA ALISCIONI
        </Text>
        <Text
          fontSize={{ base: "1xl", md: "3xl" }}
          fontFamily="montserrat"
          marginTop="20px"
          color="custom.50">
          Cantautor/artista musical
        </Text>
        <Flex marginTop="30px" gap="20px">
          <Button
            as={Link}
            to="/canciones"
            borderRadius="0"
            size="xl"
            backgroundColor="custom.200"
            height="48px"
            width="150px"
            border="1px"
            color="custom.50"
            borderColor="custom.50"
            _hover={{
              color: "black",
              backgroundColor: "custom.50",
              borderColor: "custom.200",
            }}>
            Escuchar ahora
          </Button>
          <Button
            as={Link}
            to="/biografía"
            borderRadius="0"
            size="xl"
            backgroundColor="custom.200"
            height="48px"
            width="150px"
            border="1px"
            color="custom.50"
            borderColor="custom.50"
            _hover={{
              color: "black",
              backgroundColor: "custom.50",
              borderColor: "custom.200",
            }}>
            Saber más de mí
          </Button>
        </Flex>
        <Flex marginTop="30px" gap="20px">
          <Link
            href="https://open.spotify.com/intl-es/artist/3nxqlSi8CAfYIZg2PqwyV0?si=UgMiuGTiRdaa2YNLzEXiXw"
            isExternal>
            <Icon
              as={FaSpotify}
              boxSize="35px"
              color="custom.50"
              _hover={{
                color: "green.500",
                transform: "scale(1.2)",
                transition: "all 0.2s ease",
              }}
            />
          </Link>

          <Link
            href="https://www.youtube.com/@jmacamiloaldao5023/featured"
            isExternal>
            <Icon
              as={BsYoutube}
              boxSize="35px"
              color="custom.50"
              _hover={{
                color: "red.600",
                transform: "scale(1.2)",
                transition: "all 0.2s ease",
              }}
            />
          </Link>

          <Link href="https://www.tiktok.com/@jesus.maria.alisc" isExternal>
            <Icon
              as={FaTiktok}
              boxSize="35px"
              color="custom.50"
              _hover={{
                color: "black",
                transform: "scale(1.2)",
                transition: "all 0.2s ease",
              }}
            />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
