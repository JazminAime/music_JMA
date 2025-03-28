import { Box, Flex, Icon, Text, Link } from "@chakra-ui/react";
import { FaSpotify, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Box backgroundColor="custom.400" color="custom.50" py="30px">
      <Flex direction="column" align="center" textAlign="center" gap="4px">
        {/* Nombre y derechos */}
        <Text fontSize="20px" fontWeight="bold">
          JMA Camilo Aldao
        </Text>
        <Text fontSize="16px">
          &copy; {new Date().getFullYear()} | Todos los derechos reservados
        </Text>

        {/* Redes sociales */}
        <Flex gap="12px" mt="10px">
          <Link href="https://wa.me/3468562899" isExternal>
            <Icon
              boxSize="24px"
              as={FaWhatsapp}
              _hover={{ color: "custom.100" }}
            />
          </Link>
          <Link
            href="https://www.youtube.com/@jmacamiloaldao5023/featured"
            isExternal>
            <Icon
              boxSize="24px"
              as={FaYoutube}
              _hover={{ color: "custom.100" }}
            />
          </Link>
          <Link href="https://www.tiktok.com/@jesus.maria.alisc" isExternal>
            <Icon
              boxSize="24px"
              as={FaTiktok}
              _hover={{ color: "custom.100" }}
            />
          </Link>
          <Link
            href="https://open.spotify.com/intl-es/artist/3nxqlSi8CAfYIZg2PqwyV0?si=UgMiuGTiRdaa2YNLzEXiXw"
            isExternal>
            <Icon
              boxSize="24px"
              as={FaSpotify}
              _hover={{ color: "custom.100" }}
            />
          </Link>
        </Flex>
        <Text fontSize="15px" mt="10px">
          Diseñado y desarrollado por {""}
          <Link
            href="https://www.linkedin.com/in/jazm%C3%ADn-aim%C3%A9-59869b150/"
            isExternal
            fontWeight="bold"
            _hover={{ color: "custom.100" }}>
            Jazmín
          </Link>
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
