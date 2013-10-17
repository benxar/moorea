angular.module('app', []).
 
  //definimos las rutas de la 'app'
  config(['$routeProvider', function($routes) {
 
  
  $routes.
  
  	 
      when('/inbox2', {
          templateUrl: 'src/views/inbox2.html',
          controller: Inbox2Controller
          }).
      when('/inbox', {
          templateUrl: 'src/views/inbox.html',
          controller: InboxController
          }).
          
      //cualquier ruta no definida
      otherwise({
          redirectTo: '/inbox'});
 
}]);

