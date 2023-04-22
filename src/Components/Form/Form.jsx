import { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.name.length < 5) {
      setError(true);
      setErrorMessage("el nombre no puede ser menor a 5");
      return;
    }

    const incluye = userData.email.includes("@");

    if (!incluye) {
      setError(true);
      setErrorMessage("el email debe incluir un @");
      return;
    }

    const str = userData.password.trim();
    const passwordIsValid = userData.password === str;

    if (!passwordIsValid || userData.password.length < 5) {
      setError(true);
      setErrorMessage(
        "la contraseña no debe tener espacios en blanco y debe tener como minimo 5 caracteres"
      );
      return;
    }

    console.log(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ingrese su nombre"
          onChange={handleChange}
          name="name"
        />
        <input
          type="text"
          placeholder="Ingrese su email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="ingrese su contraseña"
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>

      {error && <h1>{errorMessage}</h1>}
    </div>
  );
};

export default Form;
