import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Image,
  Spacer,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import jma from "../assets/img/jma.png";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const menuItems = ["Inicio", "Biografía", "Canciones", "Videos", "Contacto"];
  return (
    <>
      <Box p={4} pb={1}>
        <Flex align="center" justify="space-between">
          <Image
            p="0"
            src={jma}
            height="150px"
            marginLeft={{ base: "8px", md: "30px" }}
          />
          <Spacer />

          {/* Menú en escritorio */}
          <HStack
            marginRight="60px"
            spacing={6}
            display={{ base: "none", lg: "flex" }}
            fontSize="20px">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item === "Inicio" ? "/" : `/${item.toLowerCase()}`}
                style={{ textDecoration: "none" }}>
                <Text
                  cursor="pointer"
                  color="custom.50"
                  fontFamily="Montserrat"
                  padding="5px 8px"
                  borderRadius="8px"
                  transition="all 0.2s ease-in-out"
                  _hover={{
                    transform: "scale(1.1)",
                    backgroundColor: "custom.400",
                  }}
                  _focus={{
                    transform: "scale(1.1)",
                    backgroundColor: "custom.400",
                  }}>
                  {item}
                </Text>
              </Link>
            ))}
          </HStack>

          {/* Botón de menú en móvil */}
          <IconButton
            display={{ base: "flex", lg: "none" }}
            icon={<HamburgerIcon />}
            onClick={onOpen}
            fontSize="45px"
            aria-label="abrir-menu"
            variant="ghost"
            color="custom.50"
            marginRight="20px"
          />
        </Flex>
      </Box>
      <Divider
        orientation="horizontal"
        mt={0}
        borderWidth="1px"
        borderColor="custom.50"
      />

      {/* Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="custom.400" color="white">
          <DrawerCloseButton />
          <DrawerHeader
            fontSize="24px"
            fontWeight="bold"
            marginTop="65px"
            marginBottom="50px"
            textAlign="center"
            fontStyle="italic"
            textDecoration="underline">
            Menú
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={5} align="start">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item === "Inicio" ? "/" : `/${item.toLowerCase()}`}
                  onClick={onClose}
                  style={{ width: "100%" }}>
                  <Text
                    fontSize="20px"
                    padding="10px"
                    borderRadius="8px"
                    width="100%"
                    textAlign="center"
                    fontFamily="Montserrat"
                    transition="all 0.2s ease-in-out"
                    _hover={{
                      transform: "scale(1.1)",
                      backgroundColor: "custom.300",
                    }}
                    _focus={{
                      transform: "scale(1.1)",
                      backgroundColor: "custom.400",
                    }}>
                    {item}
                  </Text>
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
