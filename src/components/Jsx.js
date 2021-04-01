import React, { useState, Fragment } from 'react'

const Jsx = () => {

    const [temperatura, setTemperatura] = useState(15)

    return (
        <Fragment>
            <h2>Frio o calor</h2>
            <h4>
                {
                    temperatura > 20 ? 'Calor' : 'Frio'
                }
            </h4>
        </Fragment>
    );
}

export default Jsx;