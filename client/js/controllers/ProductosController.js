adminApp.controller('ProductosController', function ($scope,ProductoService) {

ProductoService.listar($scope);
//   $scope.items=[];
//
//
//


// Code goes here



  $scope.currentPage
  $scope.currentPage = 1;
  $scope.pageSize = 10;
  $scope.meals = [];


  $scope.pageChangeHandler = function(num) {
      console.log('meals page changed to ' + num);
  };


function OtherController(scope) {
  scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };
}

});
