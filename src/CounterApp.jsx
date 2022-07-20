import { useState, React } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ( { value } ) => {

    const [ counter, setCounter ] = useState(value);

    const handleAdd = (event) => {
        // console.log(event);
        // setCounter(counter + 1);
        setCounter((c) => c+1);
    }

    const handleOperation = ( value ) => {
        // console.log(event);
        // setCounter(counter + 1);
        setCounter((c) => c+value);
    }

    const handleSubstract = (event) => {
        // console.log(event);
        // setCounter(counter + 1);
        setCounter((c) => c-1);
    }

    const handleReset = (event) => {
        // console.log(event);
        // setCounter(counter + 1);
        setCounter((c) => value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={ () => handleOperation(1) }>+1</button>
            <button onClick={ () => handleOperation(-1) }>-1</button>
            <button aria-label="btn-reset" onClick={ handleReset }>Reset</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}
