import React, { Fragment, useState } from 'react'

const Formulario = () => {

    const [datos, setDatos] = useState({
        nombre: "",
        apellido: ""
    })

    const handleInputChange = (event) => {
        console.log(event.target.name)
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    return (
        <Fragment>
            <h3>Formulario</h3>
            <form className="row">
                <div className="col m-2">
                    <input placeholder="Nombre" className="form-control" type="text"
                    name="nombre"
                    onChange={handleInputChange}/>
                </div>
                <div className="col m-2">
                    <input placeholder="Apellido" className="form-control" type="text"
                    name="apellido"
                    onChange={handleInputChange}/>
                </div>
                <div className="col m-2">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
            </form>
            <h3>{datos.nombre} - {datos.apellido}</h3>
        </Fragment>
    );
}

export default Formulario;