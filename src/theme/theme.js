import { extendTheme } from "@chakra-ui/react";
import fondo from "../assets/img/fondo2.png";
import fondoMobile from "../assets/img/fondoMobile.png";

const theme = extendTheme({
  colors: {
    custom: {
      50: "#FDFFFF",
      100: "#DE7C5A",
      200: "#B10F2E",
      300: "#570000",
      400: "#280000",
    },
  },
  styles: {
    global: {
      body: {
        backgroundImage: fondo,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        "@media (max-width: 768px)": {
          backgroundImage: fondoMobile,
          backgroundSize: "fit-contain",
        },
      },
    },
  },
});

export default theme;
