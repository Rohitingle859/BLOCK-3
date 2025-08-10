import React, { useContext } from "react";
import { Flex, Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import { ThemeContext } from "../context/ThemeContext";

const Dashboard = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Flex direction="column" minHeight="100vh" bg={theme === "light" ? "gray.100" : "gray.800"}>
      <Navbar />
      <Flex flex="1" overflow="hidden">
        <Sidebar />
        <MainContent />
      </Flex>
      <Box
        as="footer"
        p={4}
        bg={theme === "light" ? "gray.300" : "gray.900"}
        color={theme === "light" ? "black" : "white"}
        textAlign="center"
        position="sticky"
        bottom="0"
      >
        &copy; 2025 Your Company
      </Box>
    </Flex>
  );
};

export default Dashboard;
