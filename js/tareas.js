angular.module('todoAp', [])
    .controller('Controlador', ['$scope', function ($scope) {

        var ctrl = this;

        ctrl.musicas = [
            {
                ID: "1",
                Nombre: "Bill Eat",
                Autor: "M. Jackson",
                Genero: "Pop",
                Duracion: "5:20"
            },
            {
                ID: "2",
                Nombre: "Mia",
                Autor: "Bad Bunny",
                Genero: "Reguetón",
                Duracion: "3:30"
            },
        ];

        ctrl.agregarMusica = function () {
            ctrl.musicas.push({ Nombre: ctrl.nombre, Genero: ctrl.genero, hecho: false });
            ctrl.textoNuevaTarea = '';
        };

        ctrl.restantes = function () {
            var cuenta = 0;
            angular.forEach(ctrl.musicas, function (tarea) {
                cuenta += tarea.hecho ? 0 : 1;
            });
            return cuenta;
        };

        ctrl.mostrarCanciones = function (index) {
            alert("mostrar canciones" + index);
        };

        ctrl.eliminar = function () {
            var tareasViejas = ctrl.musicas;
            ctrl.musicas = [];
            angular.forEach(tareasViejas, function (tarea) {
                if (!tarea.hecho) ctrl.musicas.push(tarea);
            });
        };
    }]);