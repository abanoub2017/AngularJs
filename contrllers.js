<!-- Ues Controller  -->
  app.controller('myCtrl', function($scope){
    $scope.firstName="fam";
    $scope.lastName= "George";
    $scope.day= 'day2'
  })
  app.controller('secControl', function($scope){
    $scope.one = 'One';
    $scope.myChange = function(){
      $scope.one= ' two';
    }
  })

  app.controller('thrControl',function($scope){
    $scope.names= [
      {name:'1', country: 'mans1'},
      {name:'2', country: 'mans2'},
      {name:'3', country:' mans3'}
    ]
  })

// Filter
app.controller('filters' , function($scope){
  $scope.firstname1= 'Firstname';
  $scope.lastname2= 'lastname';
  $scope.price= '50';
  $scope.names = [
    {name: "dina", country: 'mansoura'},
    {name: 'hager', country: 'cairo'},
    {name: 'mena', country: 'denemak'},
    {name: 'abdle', country: 'mansoura'},
    {name: 'doodo', country: 'mansoura'},
    {name: 'fam', country: 'mansoura'},
    {name: 'abanoub', country: 'mansoura'},
  ]
})

// service / https
 app.controller('service', function($scope, $http){
   $http.get("https://jsonplaceholder.typicode.com/todos/1")
   .then(function(response){
     $scope.google= response.data;
   });

 })


app.controller('http', function($scope,$http){
  $http({
    method:"GET",
    url:" https://jsonplaceholder.typicode.com/users"
  }).then( function mySecc(response) {
    $scope.myusers = response.data;
  }, function myErr(response){
    $scope.content = "error";
  });
})

// try select
app.controller('select', function($scope){
  $scope.cars= [
    {name:'frary' , color:'red', model:'1994'},
    {name:'skoda' , color:'white', model:'1995'},
    {name:'lancer' , color:'blue', model:'1996'},
    {name:'Dmw' , color:'gray', model:'1997'},
    {name:'Fiat' , color:'light', model:'1998'},
  ]
})

// event click
app.controller('events',function($scope){
  $scope.count= 0;
  $scope.showMe= false;
  $scope.toogle = function(){
    $scope.showMe = !$scope.showMe
  }
})


// validaed Forms
app.controller('forms', function($scope){
  $scope.name= 'Abanoub';
  $scope.email= 'example@gmail.com';
})

// Try Run app
app.run(function($rootScope){
  $rootScope.color='red';
})
