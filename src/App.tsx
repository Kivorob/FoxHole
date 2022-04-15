import React from 'react';
import "./app.css"
import EnterLine from "./components/EnterLine/EnterLine";
import HeaderInner from "./components/HeaderInner/HeaderInner";

const App = () => {
    return (
        <div className="app">
          <EnterLine/>
            <HeaderInner/>
        </div>
    );
};

export default App;