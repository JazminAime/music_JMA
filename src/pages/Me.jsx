import { Box, Heading, Text } from "@chakra-ui/react";

const Me = () => {
  return (
    <Box textAlign="center" py="80px">
      <Heading
        fontWeight="bold"
        color="white"
        marginTop="30px"
        textShadow="0 0 10px #b71c1c, 0 0 20px #7f0000, 0 0 30px #ff1744"
        mb="6">
        Sobre Mí
      </Heading>

      <Box
        width={{ base: "90%", md: "70%" }}
        mx="auto"
        p="25px"
        borderRadius="20px"
        backdropFilter="blur(10px)"
        bg="rgba(255, 255, 255, 0.1)"
        border="1px solid rgba(255, 255, 255, 0.3)"
        color="white"
        boxShadow="0px 5px 15px rgba(255, 255, 255, 0.2)"
        transition="all 0.5s ease-in-out"
        _hover={{
          transform: "scale(1.01)",
          boxShadow: "0px 5px 25px rgba(255, 255, 255, 0.3)",
        }}>
        <Text fontSize="18px" fontFamily="Montserrat" lineHeight="1.5">
          Desde un pequeño pueblo de la provincia de Córdoba, Argentina, llamado
          Camilo Aldao, nací el 18 de abril de 1973. Mi camino en la música
          comenzó a los 7 años, cuando me sentí atraído por la guitarra.
          Influenciado por grandes bandas como The Beatles, Creedence, Kiss, Bon
          Jovi, Miguel Mateos y Pappo, empecé a explorar este fascinante mundo,
          haciendo covers de mis grupos favoritos y componiendo mis propias
          canciones. Siempre en constante aprendizaje, la música me sigue
          maravillando. A lo largo de mi vida, guitarristas legendarios como
          Eric Clapton, Richie Sambora, Eddie Van Halen, Pappo, Gustavo Cerati,
          entre muchos otros, han influido profundamente en mi estilo y gusto
          musical. Así es como me presento: JMA Camilo Aldao, las siglas de mi
          verdadero nombre y del lugar que me vio nacer.
        </Text>
      </Box>
    </Box>
  );
};

export default Me;
