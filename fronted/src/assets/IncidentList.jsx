import React, { useState, useEffect } from "react";
import axios from "axios";

function IncidentList() {
  const [incidents, setIncidents] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const fetchIncidents = () => {
    const formattedStartDate = startDate + "T00:00:00";
    const formattedEndDate = endDate + "T23:59:59";
    axios
      .get(
        `http://localhost:8080/api/incidents?startDate=${formattedStartDate}&endDate=${formattedEndDate}`
      )
      .then((response) => {
        //console.log(response.data);
        setIncidents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching incidents:", error);
      });
  };

  return (
    <div>
      <h2>Listado de Incidentes Ingresados </h2>
      <div>
        <label>Fecha Inicio:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label>Fecha Fin:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button onClick={fetchIncidents}>Buscar incidentes</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Descripción</th>
            <th>Estado</th>
            <th>Observación</th>
            <th>Fecha de Creación</th>
            <th>Fecha de Atención</th>
          </tr>
        </thead>
        <tbody>
          {incidents.map((incident) => (
            <tr key={incident.id}>
              <td>{incident.id}</td>
              <td>{incident.description}</td>
              <td>{incident.status}</td>
              <td>{incident.observation || "N/A"}</td>
              <td>{new Date(incident.createdAt).toLocaleString()}</td>
              <td>
                {incident.attendedAt
                  ? new Date(incident.attendedAt).toLocaleString()
                  : "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IncidentList;
