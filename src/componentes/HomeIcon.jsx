// src/componentes/HomeIcon.js
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HomeIcon = () => {
    const navigate = useNavigate(); // Hook para redireccionar

    const handleClick = () => {
        navigate('/'); // Redirige a la página principal
    };

    const iconStyles = {
        fontSize: '24px',
        color: 'black',
        cursor: 'pointer',
        margin: '10px', // Espaciado alrededor del ícono
    };

    return (
        <div onClick={handleClick} style={iconStyles}>
            <FaHome />
        </div>
    );
};

export default HomeIcon;
