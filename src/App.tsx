import React from 'react';
import "./app.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useEffect, useState} from "react";
import EnterLine from "./components/EnterLine/EnterLine";
import HeaderInner from "./components/HeaderInner/HeaderInner";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import ScrollMenu from "./components/ScrollMenu/ScrollMenu";
import Footer from "./components/Footer/Footer";
import NewsSideBar from "./components/NewsSideBar/NewsSideBar";
import StuffSlider from "./components/StuffSlider/StuffSlider";

const App = () => {
    return (
        <div className="app">
            <EnterLine/>
            <HeaderInner/>
            <NavigationMenu/>
            <ScrollMenu/>
            <NewsSideBar/>
            <StuffSlider/>
            <Footer/>
        </div>
    );
};

export default App;