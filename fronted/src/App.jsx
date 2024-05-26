import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import IncidentEntryPage from "./assets/IncidentEntryPage";

function App() {
  const [incidents, setIncidents] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/incidents/pending")
      .then((response) => {
        setIncidents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching incidents:", error);
      });
  }, []);

  return <IncidentEntryPage />;
}

export default App;
