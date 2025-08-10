

import React from "react";
import { Flex, Text, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      justify="space-between"
      align="center"
      padding="1rem 2rem"
      bg="blue.500"
      color="white"
      position="sticky"
      top="0"
      zIndex="100"
    >
      <Text fontWeight="bold" fontSize="xl">
        My Dashboard
      </Text>
      <Button colorScheme="teal" size="sm">
        Login
      </Button>
    </Flex>
  );
};

export default Navbar;
