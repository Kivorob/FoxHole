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
import verifyUser from "./verifyUser";
import HomePage from "./Pages/HomePage/HomePage";
import RegistrationPage from "./Pages/registration/RegistrationPage";
import BasketPage from "./Pages/BasketPage/BasketPage";
import RequireUnauth from "./components/RequireAuth/RequireUnauth";
import RequireAuth from "./components/RequireAuth/RecuireAuth";


const defaultUser = {
    "login": "kivorob",
    "telephone": "+7 924 248 06 77",
    "hashedPassword": "$2a$10$8/aYYroIXZQiLbVP8FIYZ.aCrFSHTs..wjagQGrtM3Ql4P5u3p8i6",
    "mail": "borovikov.da@students.dvfu.ru",
    "regDate": "2022-04-18T05:38:43.889+00:00",
    "__v": 0
}


function App() {

    let [auth, setAuth] = useState(false);
    let [user, setUser] = useState(defaultUser);
    let [error, setError] = useState('')

    useEffect((): any => {
        let cleanUpFunc = false;

        const getAuth = async () => {
            try {
                const res = await verifyUser(localStorage.getItem('token'));
                if (!cleanUpFunc) {
                    auth = !res?.user;
                    setAuth(auth);
                }
                if (auth) {
                    user = res.user;
                    setUser(user);
                }
            } catch (e) {
                console.log(e);
            }
        }

        getAuth()
        return() => cleanUpFunc = true;
    }, [])

    // @ts-ignore
    // @ts-ignore
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/registration" element={<RegistrationPage setUser={setUser} setAuthorised={setAuth}/>}/>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/basket" element={<BasketPage/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;