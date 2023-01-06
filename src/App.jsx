import React from "react";
import Nav from "./Components/Nav";
import {Routes, Route } from "react-router-dom";
import Home from "./Components/Home"
import About from "./Components/About"
import Subscribe from "./Components/Subscribe"

export default function App(){
    return (
        <div className="wrapper">
            <Nav />

            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/createplan" element={<Subscribe/>}></Route>
            </Routes>


        </div>
    )
}