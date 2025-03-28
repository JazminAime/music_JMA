import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

const SongCard = ({ song }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      borderRadius="12px"
      p="4"
      w={{ base: "330px", md: "400px", lg: "450px" }}
      h="450px"
      textAlign="center"
      bg="rgba(255, 255, 255, 0.1)"
      backdropFilter="blur(10px)"
      border="2px solid rgba(255, 255, 255, 0.3)"
      boxShadow="0px 0px 10px rgba(255, 255, 255, 0.2)"
      transition="all 0.3s ease-in-out"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.5)",
      }}>
      <Image
        src={song.img}
        alt={song.title}
        borderRadius="8px"
        mb="3"
        width="100%"
        height="250px"
        objectFit="contain"
      />
      <Text color="custom.50" fontWeight="bold" mb="3" fontSize="lg">
        {song.title}
      </Text>
      <audio controls style={{ width: "100%" }}>
        <source src={song.mp3} type="audio/mp3" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </Box>
  );
};

export default SongCard;
