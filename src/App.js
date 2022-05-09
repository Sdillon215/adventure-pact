import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from "./components/Nav"
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Type from "./pages/Type";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portal from "./pages/Portal";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins', 'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#0d6d78',
    },
    secondary: {
      main: '#dfded6',
    },
    terrtiary: {
      main: '#224241',
    },
    appBar: {
      main: 'rgb(0,0,0,0)',
    },
    lighterGreen: {
      main: '#5f7b55',
    }
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Nav />
        <Routes>
          <Route exact path="/adventure-pact" element={<Home />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/rightforyou" element={<Type />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/portal" element={<Portal />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
