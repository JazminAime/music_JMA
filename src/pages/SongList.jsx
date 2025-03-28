import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import CosasMias from "../../public/CosasMias.mp3";
import Pachanga from "../../public/LaPachanga.mp3";
import MiViejoCorazon from "../../public/MiViejoCorazon.mp3";
import Down from "../../public/DownUnder.mp3";
import Maldito from "../../public/MalditoLugar.mp3";
import rock from "../../public/soloquierorockandroll.mp3";
import mistify from "../../public/mistify.mp3";
import letIt from "../../public/letitbe.mp3";
import picnic from "../../public/picnicenel4b.mp3";
import amor from "../../public/amorDePaso.mp3";
import life from "../../public/Itsmylife.mp3";
import have from "../../public/haveeverseenintherain.mp3";
import sol from "../../public/todalanochehastaquesalgaelsol.mp3";
import tonight from "../../public/intheairtonigtht.mp3";
import Libre from "../../public/Libre.mp3";
import Corazon from "../assets/img/corazon.jpeg";
import cosas from "../assets/img/cosasmias.png";
import pachanga from "../assets/img/pachanga.png";
import maldito from "../assets/img/maldito.png";
import LibreImg from "../assets/img/libre.jpeg";
import down from "../assets/img/down.png";
import SongCard from "../components/SongCard";
import solo from "../assets/img/soloquiero.png";
import misti from "../assets/img/mystify.png";
import letbe from "../assets/img/let.png";
import pic from "../assets/img/picnic.png";
import lifemy from "../assets/img/life.png";
import seen from "../assets/img/seen.png";
import night from "../assets/img/sol.png";
import airtonight from "../assets/img/tonight.png";
import paso from "../assets/img/amor.png";

const SongList = () => {
  const songs = [
    {
      title: "Mi viejo corazón (autoría propia)",
      mp3: MiViejoCorazon,
      img: Corazon,
    },
    {
      title: "Libre (autoría propia)",
      mp3: Libre,
      img: LibreImg,
    },
    {
      title: "Cosas mías (cover versionado de Los Abuelos de la Nada)",
      mp3: CosasMias,
      img: cosas,
    },
    {
      title: "La pachanga (cover versionado de Vilma Palma e Vampiros)",
      mp3: Pachanga,
      img: pachanga,
    },
    {
      title:
        "Down under (cover versionado de la agrupación australiana Men at Work)",
      mp3: Down,
      img: down,
    },
    {
      title: "Maldito lugar (autoría propia)",
      mp3: Maldito,
      img: maldito,
    },
    {
      title:
        "Solo quiero Rock and Roll (cover versionado de Patricia Sosa La Torre)",
      mp3: rock,
      img: solo,
    },
    {
      title: "Mystify (cover versionado de la agrupación australiana INXS)",
      mp3: mistify,
      img: misti,
    },
    {
      title: "Let It Be (cover versionado de The Beatles)",
      mp3: letIt,
      img: letbe,
    },
    {
      title: "Picnic en el 4B (cover versionado de Soda Stereo)",
      mp3: picnic,
      img: pic,
    },
    {
      title: "It's My Life - acústico (cover versionado de Bon Jovi)",
      mp3: life,
      img: lifemy,
    },
    {
      title:
        "Have You Ever Seen the Rain (cover versionado de la banda americana Creedence Clearwater Revival)",
      mp4: have,
      img: seen,
    },
    {
      title:
        "Toda la Noche hasta que Salga el Sol (cover versionado de la agrupación argentina Orions)",
      mp3: sol,
      img: night,
    },
    {
      title: "In the air Tonight (cover versionado de Phil Collins)",
      mp3: tonight,
      img: airtonight,
    },
    {
      title: "Amor de Paso (autoría propia)",
      mp3: amor,
      img: paso,
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
        Canciones
      </Heading>
      <Flex justify="center">
        <SimpleGrid columns={1} spacing="8" px="4" maxW="1200px" mb="50px">
          {songs.map((song, index) => (
            <SongCard key={index} song={song} />
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default SongList;
