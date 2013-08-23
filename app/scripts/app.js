'use strict';
/*global $:false */
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
      .when('/examples', {
        templateUrl: 'views/examples.html',
        controller: 'ExamplesCtrl'
      })
      .when('/glossary', {
        templateUrl: 'views/glossary.html',
        controller: 'GlossaryCtrl'
      })
      .when('/faq', {
        templateUrl: 'views/faq.html',
        controller: 'FaqCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });

$('#contentcontainer').on('click', '.restheading', function() {
  var bodyElement = $(this).next();
  if (bodyElement.css('display') === 'none') {
    bodyElement.slideDown('fast');
  } else {
    bodyElement.slideUp('fast');
  }
});
