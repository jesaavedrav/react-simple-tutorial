import React, { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'

const Formulario = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data)
        e.target.reset()
    }


    return (
        <Fragment>
            <h3>Formulario</h3>
            <form className="row" onSubmit={handleSubmit(onSubmit)}>
                <div className="col m-2">
                    <input
                        placeholder="Nombre"
                        className="form-control"
                        type="text"
                        name="nombre"
                        {
                        ...register("nombre", {
                            required: true
                        })
                        } />
                    <span className="text-danger text-small d-block mb-2">
                        {errors.nombre && "Nombre es obligatorio"}
                    </span>


                </div>
                <div className="col m-2">
                    <input
                        placeholder="Apellido"
                        className="form-control"
                        type="text"
                        name="apellido"
                        {
                            ...register("apellido", {
                                required: true
                            })
                            } />
                        <span className="text-danger text-small d-block mb-2">
                            {errors.apellido && "Apellido es obligatorio"}
                        </span>
                </div>
                <div className="col m-2">
                    <button
                        className="btn btn-primary"
                        type="submit">Enviar</button>
                </div>
            </form>
        </Fragment>
    );
}

export default Formulario;