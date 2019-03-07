angular.module('todoAp', [])
    .controller('Controlador', ['$scope', function ($scope) {

        var ctrl = this;

        ctrl.musicas = [{
                ID: "1",
                Nombre: "Bill Eat",
                Autor: "M. Jackson",
                Genero: "Pop",
                Duracion: "5:20",
                num_canciones: "1,2,3"
            },
            {
                ID: "2",
                Nombre: "Mia",
                Autor: "Bad Bunny",
                Genero: "Reguetón",
                Duracion: "3:30",
                num_canciones: "4,5,6"
            },
            {
                ID: "3",
                Nombre: "Pa' Llamar tu atención",
                Autor: "C. Tangana",
                Genero: "Reguetón",
                Duracion: "2:58",
                num_canciones: "1,2,3"
            },
            {
                ID: "4",
                Nombre: "Bangarang",
                Autor: "Skrillex",
                Genero: "Electrónica",
                Duracion: "3:39",
                num_canciones: "1,2,3"
            },
            {
                ID: "5",
                Nombre: "A prueba de ti",
                Autor: "Malú",
                Genero: "Pop",
                Duracion: "3:29",
                num_canciones: "1,2,3"
            },
            {
                ID: "6",
                Nombre: "El circulo",
                Autor: "KSO",
                Genero: "Rap",
                Duracion: "5:29",
                num_canciones: "1,2,3"
            },
            {
                ID: "7",
                Nombre: "Deseo más y mas",
                Autor: "La Union",
                Genero: "Pop",
                Duracion: "3:32",
                num_canciones: "1,2,3"
            }

        ];

        ctrl.canciones = [{
                ID: "1",
                Nombre: "Bill Eat",
                Autor: "M. Jackson",
                Genero: "Pop",
                Duracion: "5:20",
                num_canciones: "1,2,3"
            },
            {
                ID: "2",
                Nombre: "Mia",
                Autor: "Bad Bunny",
                Genero: "Reguetón",
                Duracion: "3:30",
                num_canciones: "1,2,3"
            },
            {
                ID: "3",
                Nombre: "Pa' Llamar tu atención",
                Autor: "C. Tangana",
                Genero: "Reguetón",
                Duracion: "2:58",
                num_canciones: "1,2,3"
            },
            {
                ID: "4",
                Nombre: "Bangarang",
                Autor: "Skrillex",
                Genero: "Electrónica",
                Duracion: "3:39",
                num_canciones: "1,2,3"
            },
            {
                ID: "5",
                Nombre: "A prueba de ti",
                Autor: "Malú",
                Genero: "Pop",
                Duracion: "3:29",
                num_canciones: "1,2,3"
            },
            {
                ID: "6",
                Nombre: "El circulo",
                Autor: "KSO",
                Genero: "Rap",
                Duracion: "5:29",
                num_canciones: "1,2,3"
            },
            {
                ID: "7",
                Nombre: "Deseo más y mas",
                Autor: "La Union",
                Genero: "Pop",
                Duracion: "3:32",
                num_canciones: "1,2,3"
            }

        ];

        $scope.order = function (x) {
            $scope.order = x;
        }

        ctrl.agregarMusica = function () {
            ctrl.musicas.push({
                Nombre: ctrl.nombre,
                Genero: ctrl.genero,
                hecho: false
            });
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
            alert("mostrar canciones del indice: " + index);
        };

        ctrl.eliminar = function () {
            var tareasViejas = ctrl.musicas;
            ctrl.musicas = [];
            angular.forEach(tareasViejas, function (tarea) {
                if (!tarea.hecho) ctrl.musicas.push(tarea);
            });
        };
    }]);