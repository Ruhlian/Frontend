import React from 'react';

const Header = (props) => {
    const headerStyles = {
        backgroundColor: 'black',
        color: 'red',
        padding: '10px',
        textAlign: 'center', // Centrar el texto en el header
    };

    const infoStyles = {
        color: 'white',
        margin: '5px 0', // Espaciado entre elementos
        padding: '5px',
        borderRadius: '5px',
    };

    const autorStyles = {
        ...infoStyles, // Reutilización de estilos comunes
        backgroundColor: 'brown',
    };

    const fichaStyles = {
        ...infoStyles,
        backgroundColor: 'purple',
    };

    const centroStyles = {
        ...infoStyles,
        backgroundColor: 'blue',
    };

    return (
        <header style={headerStyles}>
            <div className='container'>
                <h1>{props.titulo}</h1>
                <p style={autorStyles}>{props.autor}</p>
                <p style={centroStyles}>{props.centro}</p>
                <p style={fichaStyles}>{props.ficha}</p>
            </div>
        </header>
    );
};

export default Header;
