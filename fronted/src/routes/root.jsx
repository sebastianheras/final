export default function Root() {
  return (
    <>
      <h1>App Incidentes</h1>
      <nav>
        <ul>
          <li>
            <a href={`incident-entry`}>Ingresar Incidente</a>
          </li>
          <li>
            <a href={"incident-list-filtered"}>Buscar incidentes ingresados</a>
          </li>
          <li>
            <a href={"incident-list"}>Incidentes pendientes de atender</a>
          </li>
          <li>
            <a href={"incident-register-attention"}>
              Registrar atención de incidente
            </a>
          </li>
          <li>
            <a href={"incident-attended"}>Incidentes Atendidos</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
