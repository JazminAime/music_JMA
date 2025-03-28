import { Grid, GridItem, Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Routing from "../routes/Routing";
import Footer from "../components/Footer";

const AppLayout = () => {
  return (
    <Grid
      overflow="hidden"
      templateAreas={`"header" "main" "footer"`}
      gridTemplateRows={"100px 1fr auto"}
      gridTemplateColumns={"1fr"}
      fontWeight="bold"
      minHeight="100vh"
      position="relative">
      {/* Overlay oscuro */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="blackAlpha.600"
        backdropFilter="blur(2px)"
        zIndex="1"
      />

      {/* Header */}
      <GridItem area="header" position="relative" zIndex="2">
        <Header />
      </GridItem>

      {/* Main */}
      <GridItem
        area="main"
        minH="70vh"
        display="flex"
        flexDirection="column"
        position="relative"
        zIndex="2"
        overflow="auto">
        <Routing />
      </GridItem>

      {/* Footer */}
      <GridItem area="footer" zIndex="2">
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default AppLayout;
