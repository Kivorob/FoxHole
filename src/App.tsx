import React from 'react';
import "./app.css"
import EnterLine from "./components/EnterLine/EnterLine";
import HeaderInner from "./components/HeaderInner/HeaderInner";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";

const App = () => {
    return (
        <div className="app">
            <EnterLine/>
            <HeaderInner/>
            <NavigationMenu/>
        </div>
    );
};

export default App;