import { Box, Text } from "@chakra-ui/react";

const VideoCard = ({ video }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      borderRadius="12px"
      p={{ base: "2", md: "4" }}
      w={{ base: "100%", md: "650px" }}
      h={{ base: "100%", md: "450px" }}
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
      <Text
        color="custom.50"
        fontWeight="bold"
        mb="3"
        fontSize={{ base: "18px", md: "xl" }}
        mt="5px">
        {video.title}
      </Text>
      <iframe
        width="100%"
        height="400px"
        src={`https://www.youtube.com/embed/${video.youtubeId}`}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          borderRadius: "8px",
          marginBottom: "10px",
        }}></iframe>
    </Box>
  );
};

export default VideoCard;
