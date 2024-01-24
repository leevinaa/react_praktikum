import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Main from './Main';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
import AboutMe from "./AboutMe";

function App () {
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route index element={<Main/>} />
                <Route path="about" element={<AboutMe />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}
export default App