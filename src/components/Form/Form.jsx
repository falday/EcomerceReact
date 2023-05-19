import React, { useState } from "react";

const Form = (userData,envioDeFormulario,handleChange) => {
  
  return (
    <div>
      <h1>Estamos en el formulario</h1>

      <form onSubmit={envioDeFormulario}>
        <input
          type="text"
          placeholder="ingresa tu nombre"
          name="nombre"
          value={userData.nombre}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="ingresa tu apellido"
          name="apellido"
          value={userData.apellido}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="ingresa tu apellido"
          name="telefono"
          value={userData.telefono}
          onChange={handleChange}
        />

        <button type="submit">Enviar</button>
        <button type="button">cancelar</button>
      </form>
    </div>
  );
};

export default Form;
