import {useNavigate} from 'react-router-dom';
import React from "react";
import Navigator from "../components/Navigator.component";


const ProtectedRoute: React.FC = () => {

    const navigate = useNavigate()

    const isAuthenticated = true

    if (!isAuthenticated) {
        navigate('/login')
        return <></>
    }

    return (
        <div className={"background"}>
            <Navigator/>
        </div>
    );
}

export default ProtectedRoute