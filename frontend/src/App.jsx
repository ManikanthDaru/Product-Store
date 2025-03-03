// import React from 'react';
import { Box } from "@chakra-ui/react";
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <Box minH="100vh">
      {/* Navbar Component */}
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={ <HomePage></HomePage> }></Route>
        <Route path="/create" element={ <CreatePage></CreatePage> }></Route>
      </Routes>
    </Box>
  )
}

export default App;