import React from 'react';
import PropTypes from 'prop-types';

export const FirstApp = ( { title, subtitle, name } ) => {

    return (
        <>
            {/* <code> { JSON.stringify(newMessage) } </code> */}
            <h1>{ title }</h1>
            {/* <h2> { getResult() } </h2> */}
            <p>{ subtitle }</p>
            <p>{ name }</p>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

FirstApp.defaultProps = {
    // title: 'No hay titulo',
    subtitle: 'No hay subtitulo',
    name: 'No hay nombre'
}
