// import React from "react";
// import { ChakraProvider } from "@chakra-ui/react";
// import { AuthContextProvider } from "./context/AuthContext";
// import { ThemeContextProvider } from "./context/ThemeContext";
// import Dashboard from "./components/Dashboard";
// // import { AuthContextProvider } from './context/AuthContext';
// // import { ThemeContextProvider } from './context/ThemeContext';


// function App() {
//   return (
//     <ChakraProvider>
//       <AuthContextProvider>
//         <ThemeContextProvider>
//           <Dashboard />
//         </ThemeContextProvider>
//       </AuthContextProvider>
//     </ChakraProvider>
//   );
// }

// export default App;
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <ThemeProvider>
          <Dashboard />
        </ThemeProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
