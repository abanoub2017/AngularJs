app.config(function($routeProvider){
  $routeProvider
  .when("/", {
    templateUrl : "mainroute.html"
  })
 
  .when("/about", {
    templateUrl: "about.html"
  })
})
