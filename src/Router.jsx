import React, { useState } from 'react';
import './Scss/App.scss';
import { Route, Routes } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import AiCourses from './Pages/Courses/AiCourses';
import PythonCourses from './Pages/Courses/PythonCourses';
import BlockchainCourses from './Pages/Courses/BlockchainCourses';
import MiningWorkshop from './Pages/Courses/MiningWorkshop';
import MernStack from './Pages/Courses/MernStack';
import Footer from './Components/Footer';
function NotFound() {
  return <div className='pagenotfound'><h1>404 - Page Not Found</h1></div>;
}
function Router() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/AiCourses" element={<AiCourses />} />
        <Route path="/PythonCourses" element={<PythonCourses />} />
        <Route path="/MernStack" element={<MernStack />} />
        <Route path="/BlockchainCourses" element={<BlockchainCourses />} />
        <Route path="/MiningWorkshop" element={<MiningWorkshop />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

    </>
  );
}

export default Router;