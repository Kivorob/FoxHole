import React from 'react';
import "./app.css"
import EnterLine from "./components/EnterLine/EnterLine";
import HeaderInner from "./components/HeaderInner/HeaderInner";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import ScrollMenu from "./components/ScrollMenu/ScrollMenu";
import Footer from "./components/Footer/Footer";
import RegistrationPage from "./pages/registration/RegistrationPage";

const App = () => {
    return (
        <div className="app">
            <EnterLine/>
            <HeaderInner/>
            <NavigationMenu/>
            <ScrollMenu/>
            {/*<RegistrationPage/>*/}
            <Footer/>
        </div>


    );
};

export default App;