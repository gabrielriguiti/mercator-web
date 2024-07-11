import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from "./pages/Login.page";
import ProtectedRoute from "./security/ProtectedRoute.component";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./App.css"

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" Component={LoginPage}/>
                <Route path="/app/*" element={<ProtectedRoute />} />
            </Routes>
        </Router>
    );
}

export default App
