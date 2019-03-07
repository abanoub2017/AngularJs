
    app.config(function($routeProvider) {
      $routeProvider
      .when("/", {
        templateUrl : "./components/Home.html"
      })
      .when("/work", {
        templateUrl : "./components/work.html"
      })
    
    });