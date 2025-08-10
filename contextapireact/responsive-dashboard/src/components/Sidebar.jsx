// src/components/Sidebar.jsx

import React from "react";
import { Box, VStack, Text, useBreakpointValue } from "@chakra-ui/react";

const Sidebar = ({ isLoggedIn }) => {
  // Show sidebar only on medium screens and above
  const displaySidebar = useBreakpointValue({ base: "none", md: "block" });

  return (
    <Box
      as="aside"
      bg="gray.100"
      w="200px"
      p="4"
      display={displaySidebar}
      minH="100vh"
      borderRight="1px solid"
      borderColor="gray.200"
    >
      <VStack align="start" spacing="4">
        {isLoggedIn ? (
          <Text fontWeight="bold">Welcome, User!</Text>
        ) : (
          <Text>Please log in</Text>
        )}
        <Text>Dashboard</Text>
        <Text>Profile</Text>
        <Text>Settings</Text>
      </VStack>
    </Box>
  );
};

export default Sidebar;
