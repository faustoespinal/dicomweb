'use strict';

angular.module('dicomdocsApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/qido', {
        templateUrl: 'views/qido.html',
        controller: 'QidoCtrl'
      })
      .when('/wado', {
        templateUrl: 'views/wado.html',
        controller: 'WadoCtrl'
      })
      .when('/stow', {
        templateUrl: 'views/stow.html',
        controller: 'StowCtrl'
      })
      .when('/xml', {
        templateUrl: 'views/xml.html',
        controller: 'XmlCtrl'
      })
      .when('/json', {
        templateUrl: 'views/json.html',
        controller: 'JsonCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });

$("#contentcontainer").on("click", ".restheading", function(event) {
  var bodyElement = $(this).next();
  if (bodyElement.css("display") === "none") {
    bodyElement.slideDown("fast");
  } else {
    bodyElement.slideUp("fast");
  }
});
