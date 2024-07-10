import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./pages/Login";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./App.css"

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/login" Component={Login}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
