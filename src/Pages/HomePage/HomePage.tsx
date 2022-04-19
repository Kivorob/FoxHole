import react, {useState} from 'react'
import EnterLine from "../../components/EnterLine/EnterLine";
import HeaderInner from "../../components/HeaderInner/HeaderInner";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import NewsSideBar from "../../components/NewsSideBar/NewsSideBar";
import ScrollMenu from "../../components/ScrollMenu/ScrollMenu";
import StuffSlider from "../../components/StuffSlider/StuffSlider";
import Footer from "../../components/Footer/Footer";
import React from "react";




function HomePage() {
    return (
        <div>
            <EnterLine/>
            <HeaderInner/>
            <NavigationMenu/>
            <ScrollMenu/>
            <NewsSideBar/>
            <StuffSlider/>
            <Footer/>
        </div>
    );
}

export default HomePage;