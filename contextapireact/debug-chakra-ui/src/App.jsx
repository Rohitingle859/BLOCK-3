
import { ChakraProvider, Box, Flex, Grid, Button, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { ThemeContext } from './ThemeContext';

function App() {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const bgColor = theme === 'light' ? 'gray.100' : 'gray.700';
  const cardBg = theme === 'light' ? 'gray.200' : 'gray.600';
  const footerBg = theme === 'light' ? 'gray.300' : 'gray.800';
  const textColor = theme === 'light' ? 'black' : 'white';

  return (
    <ChakraProvider>
      {/* Navbar */}
      <Flex as="nav" p="4" bg={bgColor} justifyContent="space-between">
        <Button onClick={toggleAuth} colorScheme="blue">
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </Button>
        <Button onClick={toggleTheme} colorScheme="teal">
          Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </Button>
      </Flex>

      {/* Main Grid */}
      <Grid
        templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
        gap="4"
        p="4"
      >
        {['Card 1', 'Card 2', 'Card 3'].map((card) => (
          <Box
            key={card}
            p="4"
            shadow="md"
            bg={cardBg}
            color={textColor}
            borderRadius="md"
          >
            <Text>{isLoggedIn ? `${card} - Private` : `${card} - Public`}</Text>
          </Box>
        ))}
      </Grid>

      {/* Footer */}
      <Box as="footer" p="4" bg={footerBg} color={textColor} textAlign="center">
        {isLoggedIn ? 'Welcome, User' : 'Please log in'}
      </Box>
    </ChakraProvider>
  );
}

export default App;
