import React, { useState } from "react";
import axios from "axios";

function IncidentRegistrationPage() {
  const [incidentId, setIncidentId] = useState("");
  const [observation, setObservation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegistration = () => {
    if (!incidentId || !observation) {
      setErrorMessage("Por favor ingresa todos los campos.");
      return;
    }

    const data = {
      ids: [parseInt(incidentId)], // Asegurar de que el ID sea un número
      observation: observation,
    };

    console.log("Datos enviados:", data);

    axios
      .put("http://localhost:8080/api/incidents/attend", data)
      .then((response) => {
        console.log("Incident attended:", response.data);
        setErrorMessage("");
        setIncidentId("");
        setObservation("");
      })
      .catch((error) => {
        console.error("Error attending incident:", error);
        setErrorMessage(
          "Hubo un error al registrar la atención del incidente."
        );
      });
  };

  return (
    <div>
      <h2>Registro de Atención del Incidente</h2>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
      <div>
        <label>ID del Incidente:</label>
        <input
          type="number"
          value={incidentId}
          onChange={(e) => setIncidentId(e.target.value)}
        />
      </div>
      <div>
        <label>Observación:</label>
        <textarea
          value={observation}
          onChange={(e) => setObservation(e.target.value)}
        />
      </div>
      <button onClick={handleRegistration}>Registrar Atención</button>
    </div>
  );
}

export default IncidentRegistrationPage;
