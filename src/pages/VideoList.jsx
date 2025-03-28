import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import VideoCard from "../components/VideoCard";

const VideoList = () => {
  const videos = [
    {
      title: "Seminare (cover versionado de Serú Girán)",
      youtubeId: "Gqx30K_h-ag",
    },
    {
      title: "La pachanga (cover versionado de Vilma Palma e Vampiros)",
      youtubeId: "jNq5--u_3gs",
    },
    {
      title: "It's my Life - acústico (cover versionado de Bon Jovi)",
      youtubeId: "t5fU6ijckjQ",
    },
    {
      title: "Cosas mías (cover versionado de Los Abuelos de la Nada)",
      youtubeId: "4HeFenvGufA",
    },
    {
      title: "Mi viejo corazón (autoría propia)",
      youtubeId: "5Gb2kvXhPFA",
    },
  ];
  return (
    <>
      <Heading
        marginTop="120px"
        textAlign="center"
        color="custom.50"
        textShadow="0 0 10px #b71c1c, 0 0 20px #7f0000, 0 0 30px #ff1744"
        mb="8">
        Videos
      </Heading>
      <Flex justify="center">
        <SimpleGrid columns={1} spacing="8" px="4" mb="50px">
          {videos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default VideoList;
