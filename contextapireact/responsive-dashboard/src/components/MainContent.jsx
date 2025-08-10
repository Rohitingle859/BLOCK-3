

import React from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";

const products = [
  "Product 1",
  "Product 2",
  "Product 3",
  "Product 4",
  "Product 5",
  "Product 6",
];

const MainContent = () => {
  return (
    <Box flex="1" p="4">
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="6">
        {products.map((product, index) => (
          <Box
            key={index}
            p="6"
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            bg="white"
          >
            <Text fontWeight="bold">{product}</Text>
            <Text mt="2" fontSize="sm" color="gray.600">
              Sample description for {product}.
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default MainContent;
