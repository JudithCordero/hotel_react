import React from 'react';
import '../css/style.css';

const getTextInputById = (id) => {
    return document.getElementById(id).value.trim();
};

const Registro = (event) => {
    event.preventDefault();

    var pattern_identificacion = /^[0-9]+$/;
    var pattern_nombres = /^[a-zA-Z\s]{3,100}$/;
    var pattern_apellidos = /^[a-zA-Z\s]{3,100}$/;
    var pattern_tel = /^[0-9]{10}$/;
    var pattern_habitacion = /^[a-zA-Z0-9]{1,5}$/;

    let js_identificacion = getTextInputById("f_identificacion");
    let f_nombres = getTextInputById("f_nombres");
    let f_apellidos = getTextInputById("f_apellidos");
    let f_telefono = getTextInputById("f_telefono");
    let f_habitacion = getTextInputById("f_habitacion");
    let rh = getTextInputById("rh");
    let f_fecha_ingreso = getTextInputById("f_fecha_ingreso");
    let f_fecha_salida = getTextInputById("f_fecha_salida");

    if (js_identificacion.length <= 0) {
        alert('El campo Identificación es obligatorio');
        return false;
    } else if (!pattern_identificacion.test(js_identificacion)) {
        alert('El campo Identificación solo debe contener números. Ejemplo: 11234');
        return false;
    }

    if (f_nombres.length <= 0) {
        alert('El campo Nombres es obligatorio');
        return false;
    } else if (!pattern_nombres.test(f_nombres)) {
        alert('El campo Nombres debe contener entre 3 y 100 letras. Ejemplo: Ana');
        return false;
    }

    if (f_apellidos.length <= 0) {
        alert('El campo Apellidos es obligatorio');
        return false;
    } else if (!pattern_apellidos.test(f_apellidos)) {
        alert('El campo Apellidos debe contener entre 3 y 100 letras. Ejemplo: Perez');
        return false;
    }

    if (f_telefono.length <= 0) {
        alert('El campo Teléfono es obligatorio');
        return false;
    } else if (!pattern_tel.test(f_telefono)) {
        alert('El campo Teléfono debe contener exactamente 10 números. Ejemplo: 8444982679');
        return false;
    }

    if (f_habitacion.length <= 0) {
        alert('El campo Habitación es obligatorio');
        return false;
    } else if (!pattern_habitacion.test(f_habitacion)) {
        alert('El campo Habitación debe contener entre 1 y 5 caracteres alfanuméricos. Ejemplo: A23');
        return false;
    }

    if (rh === "0") {
        alert("El campo RH es obligatorio");
        return false;
    } else if (f_fecha_ingreso.length <= 0) {
        alert("El campo Fecha de Ingreso es obligatorio");
        return false;
    } else if (!isValidDate(f_fecha_ingreso)) {
        alert("La Fecha de Ingreso no es válida");
        return false;
    } else if (f_fecha_salida.length <= 0) {
        alert("El campo Fecha de Salida es obligatorio");
        return false;
    } else if (!isValidDate(f_fecha_salida)) {
        alert("La Fecha de Salida no es válida");
        return false;
    } else if (new Date(f_fecha_ingreso) > new Date(f_fecha_salida)) {
        alert("La Fecha de Salida debe ser posterior a la Fecha de Ingreso");
        return false;
    }

    alert("Registro enviado correctamente!");
    return true;
};

const isValidDate = (dateString) => {
    let date = new Date(dateString);
    return !isNaN(date.getTime());
};

const FormularioRegistro = () => {
    return (
        <div className="container">
            <h1>Registro de Hotel</h1>
            <form onSubmit={Registro}>

                {/* IDENTIFICACION */}
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="f_identificacion">Identificación:</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="f_identificacion" name="f_identificacion" />
                    </div>
                </div>

                {/* NOMBRES */}
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="f_nombres">Nombres:</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="f_nombres" name="f_nombres" />
                    </div>
                </div>

                {/* APELLIDOS */}
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="f_apellidos">Apellidos:</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="f_apellidos" name="f_apellidos" />
                    </div>
                </div>

                {/* TELEFONO */}
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="f_telefono">Teléfono:</label>
                    </div>
                    <div className="col-75">
                        <input type="tel" id="f_telefono" name="f_telefono" />
                    </div>
                </div>

                {/* HABITACION */}
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="f_habitacion">Habitación:</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="f_habitacion" name="f_habitacion" />
                    </div>
                </div>

                {/* RH */}
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="rh">RH:</label>
                    </div>
                    <div className="col-75">
                        <select name="rh" id="rh">
                            <option value="0">Seleccione:</option>
                            <option value="1">A+</option>
                            <option value="2">A-</option>
                            <option value="3">B+</option>
                            <option value="4">B-</option>
                            <option value="5">AB+</option>
                            <option value="6">AB-</option>
                            <option value="7">O+</option>
                            <option value="8">O-</option>
                        </select>
                    </div>
                </div>

                {/* FECHA INGRESO */}
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="f_fecha_ingreso">Fecha Ingreso:</label>
                    </div>
                    <div className="col-75">
                        <input type="date" id="f_fecha_ingreso" name="f_fecha_ingreso" />
                    </div>
                </div>

                {/* FECHA SALIDA */}
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="f_fecha_salida">Fecha Salida:</label>
                    </div>
                    <div className="col-75">
                        <input type="date" id="f_fecha_salida" name="f_fecha_salida" />
                    </div>
                </div>

                {/* BOTONES */}
                <div className="row3">
                    <input className="boton_izq" type="button" value="Izquierda" />
                    <input className="boton_der" type="button" value="Derecha" />
                </div>

                <div className="row2">
                    <input className="boton_registrar" type="submit" value="Registrar" />
                    <input className="boton_cancelar" type="reset" value="Cancelar" />
                </div>

            </form>
        </div>
    );
};

export default FormularioRegistro;
