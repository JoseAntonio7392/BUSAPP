document.addEventListener("DOMContentLoaded", function () {
  // Inicialización del calendario con FullCalendar
  $("#calendar").fullCalendar({
    header: {
      left: "prev,next today",
      center: "title",
      right: "month,agendaWeek,agendaDay"
    },
    events: [
      {
        title: "Salida de Ruta 14",
        start: "2024-10-10T10:00:00",
        description: "Salida a Bustamante, Matamoros"
      },
      {
        title: "Salida de Ruta 17",
        start: "2024-10-11T14:00:00",
        description: "Salida a Altamirano, San Antonio"
      },
      {
        title: "Salida de Ruta 20",
        start: "2024-10-12T16:00:00",
        description: "Salida a Ollerías, IMSS"
      }
    ]
  });

  // Función para mostrar detalles de la ruta
  function showRouteDetails(routeId) {
    let detailsText = "";
    switch (routeId) {
      case 14:
        detailsText =
          "Detalles de la Ruta 14: Bustamante, Matamoros, La Dichosa, Central.";
        break;
      case 17:
        detailsText =
          "Detalles de la Ruta 17: Altamirano, San Antonio, Juárez, TecNM.";
        break;
      case 20:
        detailsText = "Detalles de la Ruta 20: Ollerías, IMSS, DIF, Centro.";
        break;
      default:
        detailsText = "No hay detalles disponibles para esta ruta.";
        break;
    }

    alert(detailsText); // Puedes cambiar esto a un modal si prefieres
  }

  // Función para mostrar u ocultar secciones
  function showSection(section) {
    // Ocultamos todas las secciones
    document.getElementById("section-routes").style.display = "none";
    document.getElementById("section-history").style.display = "none";
    document.getElementById("section-payment").style.display = "none";
    document.getElementById("section-profile").style.display = "none";

    // Mostramos la sección seleccionada
    document.getElementById(section).style.display = "block";
  }

  // Eventos para la navegación en el menú
  document.getElementById("nav-routes").addEventListener("click", function () {
    showSection("section-routes");
  });

  document.getElementById("nav-history").addEventListener("click", function () {
    showSection("section-history");
  });

  document.getElementById("nav-payment").addEventListener("click", function () {
    showSection("section-payment");
  });

  document.getElementById("nav-profile").addEventListener("click", function () {
    showSection("section-profile");
  });

  // Eventos de "Ver Detalles" para cada ruta
  document.querySelectorAll(".btn-details").forEach((button) => {
    button.addEventListener("click", (e) => {
      const routeId = e.target.getAttribute("data-route-id");
      showRouteDetails(routeId); // Llamamos a la función con el ID de la ruta correspondiente
    });
  });

  // Mostrar la sección de Rutas por defecto
  showSection("section-routes");
});
