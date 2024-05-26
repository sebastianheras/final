import React, { useState, useEffect } from "react";
import axios from "axios";

function IncidentAttend() {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/incidents/attended")
      .then((response) => {
        setIncidents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching incidents:", error);
      });
  }, []);

  return (
    <div>
      <h3>Listado de Incidentes Atendidos:</h3>
      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            {incident.id} | {incident.description} | {incident.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IncidentAttend;
