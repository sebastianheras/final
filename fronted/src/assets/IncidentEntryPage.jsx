import React, { useState } from "react";
import axios from "axios";

function IncidentEntryPage() {
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("PENDING"); // Estado inicial de la incidencia

  const handleSubmit = (e) => {
    e.preventDefault();

    const incident = {
      description: description,
      status: status,
      observation: null,
      createdAt: new Date().toISOString(),
      attendedAt: null,
    };

    axios
      .post("http://localhost:8080/api/incidents", incident)
      .then((response) => {
        console.log("Incident created:", response.data);
        // Limpiar el formulario o redirigir al usuario a otra página
        setDescription("");
      })
      .catch((error) => {
        console.error("There was an error creating the incident!", error);
      });
  };

  return (
    <div>
      <h2>Ingresar Nuevo Incidente</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Descripción:</label>
          <br />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Ingresar Incidente</button>
      </form>
    </div>
  );
}

export default IncidentEntryPage;
