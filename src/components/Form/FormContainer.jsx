import { Form } from 'formik';
import React from 'react'

const FormContainer = ( ) => {
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const envioDeFormulario = (evento) => {
    evento.preventDefault();

    console.log(userData);
  };
  <div>FormContainer</div>;

  return (
    <div>
      <Form userData={userData} envioDeFormulario={envioDeFormulario},  handleChange={ handleChange}></Form>
    </div>
  );
}
export default FormContainer;