import { Box, Icon, Image, Link, Text, VStack } from "@chakra-ui/react";
import img from "../assets/img/contact.png";
import {
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
  FaYoutube,
  FaSpotify,
} from "react-icons/fa";

const Contact = () => {
  return (
    <Box
      w={{ base: "90%", sm: "400px" }}
      p="6"
      borderRadius="20px"
      boxShadow="xl"
      bg="custom.50"
      textAlign="center"
      mx="auto"
      mt="100px"
      transition="all 0.3s ease-in-out"
      mb="50px"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "0px 0px 15px rgba(247, 65, 9, 0.6)",
      }}>
      <Image
        src={img}
        alt="JMA Camilo Aldao"
        borderRadius="full"
        boxSize="180px"
        mx="auto"
        mb="4"
        objectFit="fit-contain"
        border="4px solid #ddd"
        shadow="md"
      />

      <Text
        fontSize="2xl"
        fontWeight="bold"
        color="gray.800"
        fontFamily="Montserrat">
        JMA Camilo Aldao
      </Text>
      <Text fontSize="lg" color="gray.600" mb="4" fontFamily="Montserrat">
        Cantante | Músico | Compositor
      </Text>

      <VStack spacing="3">
        {[
          {
            icon: FaInstagram,
            link: "https://www.instagram.com/jesusmariaaliscioni/",
            label: "Instagram",
          },
          {
            icon: FaWhatsapp,
            link: "https://wa.me/3468562899",
            label: "WhatsApp",
          },
          {
            icon: FaYoutube,
            link: "https://www.youtube.com/@jmacamiloaldao5023/featured",
            label: "YouTube",
          },
          {
            icon: FaTiktok,
            link: "https://www.tiktok.com/@jesus.maria.alisc",
            label: "TikTok",
          },
          {
            icon: FaSpotify,
            link: "https://open.spotify.com/intl-es/artist/3nxqlSi8CAfYIZg2PqwyV0?si=UgMiuGTiRdaa2YNLzEXiXw",
            label: "Spotify",
          },
        ].map(({ icon, link, label }, index) => (
          <Link
            key={index}
            href={link}
            isExternal
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="2"
            bg="gray.200"
            width="130px"
            px="4"
            py="2"
            borderRadius="md"
            fontSize="md"
            fontWeight="medium"
            color="gray.700"
            _hover={{
              bg: "red.100",
              color: "red.600",
              transform: "scale(1.03)",
            }}>
            <Icon as={icon} boxSize="20px" />
            {label}
          </Link>
        ))}
      </VStack>
    </Box>
  );
};

export default Contact;
