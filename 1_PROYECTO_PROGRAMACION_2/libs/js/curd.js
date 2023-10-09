document.addEventListener("DOMContentLoaded", function () {
    const docenteSelect = document.getElementById("docente");
    const materiasAsignadasList = document.getElementById("materias-asignadas");
    const materiasDisponiblesList = document.getElementById("materias-disponibles");

    const materiasDisponibles = ["Materia 1", "Materia 2", "Materia 3", "Materia 4"];

    // Función para agregar una materia a la lista de materias asignadas
    function agregarMateria() {
        const selectedOption = materiasDisponiblesList.querySelector("li:hover .nombre");
        if (selectedOption) {
            const materiaNombre = selectedOption.textContent;
            const materiaItem = document.createElement("li");
            materiaItem.innerHTML = `
                <span class="nombre">${materiaNombre}</span>
                <button class="eliminar">-</button>
            `;
            materiasAsignadasList.appendChild(materiaItem);
            selectedOption.parentElement.remove();
            agregarEventoEliminar(materiaItem);
        }
    }

    // Función para quitar una materia de la lista de materias asignadas
    function quitarMateria() {
        const selectedOption = materiasAsignadasList.querySelector("li:hover .nombre");
        if (selectedOption) {
            const materiaNombre = selectedOption.textContent;
            const materiaItem = document.createElement("li");
            materiaItem.innerHTML = `
                <span class="nombre">${materiaNombre}</span>
                <button class="agregar">+</button>
            `;
            materiasDisponiblesList.appendChild(materiaItem);
            selectedOption.parentElement.remove();
            agregarEventoAgregar(materiaItem);
        }
    }

    function agregarEventoEliminar(materiaItem) {
        const eliminarButton = materiaItem.querySelector(".eliminar");
        eliminarButton.addEventListener("click", quitarMateria);
    }

    function agregarEventoAgregar(materiaItem) {
        const agregarButton = materiaItem.querySelector(".agregar");
        agregarButton.addEventListener("click", agregarMateria);
    }

    const agregarButtons = document.querySelectorAll(".agregar");
    const eliminarButtons = document.querySelectorAll(".eliminar");

    agregarButtons.forEach(function (agregarButton) {
        agregarEventoAgregar(agregarButton.parentElement);
    });

    eliminarButtons.forEach(function (eliminarButton) {
        agregarEventoEliminar(eliminarButton.parentElement);
    });
});

