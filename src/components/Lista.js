import React, { useState, Fragment } from 'react'

const Lista = () => {

    const [numeros, setNumeros] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])

    const agregarElemento = () => {
        console.log('click')
        setNumeros([...numeros, Math.max(...numeros)+1])
    }

    return (
        <Fragment>
            <h2>Lista</h2>
            <button onClick={agregarElemento}>Agregar</button>
            {
                numeros.map((item, index) =>
                    <p key={index}>{item} - {index}</p>
                )
            }
        </Fragment>
    );
}

export default Lista;