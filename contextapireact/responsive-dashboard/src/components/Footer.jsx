function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <Box
      as="footer"
      p="1rem"
      bg={theme === "light" ? "gray.300" : "gray.700"}
      color={theme === "light" ? "black" : "white"}
      textAlign="center"
      position="sticky"
      bottom="0"
      width="100%"
    >
      &copy; 2025 Your Company
    </Box>
  );
}
