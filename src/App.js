import React, { useReducer } from "react";
import "./App.css";

const initialState = {
  email: "",
  password: "",
};

function reducer(state, action) {
  return { ...state, [action.input]: action.value };
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e) => {
    const action = {
      input: e.target.name,
      value: e.target.value,
    };
    dispatch(action);
  };

  function handleClick(e) {
    e.preventDefault();
    if (
      /^[a-zA-Z0-9_.+-]+@(gmail|hotmail|yahoo)+\.[com]+$/.test(state.email) &&
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(state.password)
    ) {
      alert(`Bienvenido ${state.email}`);
    } else {
      alert("Los datos no cumplen los parametros");
      document.location.reload();
    }
  }

  return (
    <div className="containerPrincipal">
      <div className="containerSecundario">
        <h1>LOGIN</h1>
        <div className="form-group">
          <label>Email: </label>
          <br />
          <input
            type="email"
            className="form-control"
            placeholder="example@example.com"
            aria-label="example@example.com"
            name="email"
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text">
            Only Gmail, Hotmail and Yahoo type emails are accepted
          </div>
          <br />

          <label>Password: </label>
          <br />
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text">
            Must contain at least 8 characters, letters and numbers
          </div>
          <br />
          <button className="btn btn-dark" onClick={handleClick}>
            Enter!
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
