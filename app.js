(function(){
    'use strict';

    angular.module('LunchCheck',[])

    .controller('LunchCheckController',checkFunction);
    checkFunction.$inject=['$scope'];
    function checkFunction($scope){
        $scope.fooditems="";
        $scope.message="";
        $scope.checkFoodItems=function(){
            var msg;
            msg=getMessage($scope.fooditems);
            $scope.message=msg;
        };
              function getMessage(fooditems){
                  if(fooditems == "")
                  {
                    return "Please enter data first";
                  }
                  else {
                    var array=fooditems.split(',');
                      if(array.length<=3){
                        return "Enjoy!";
                      }
                      else {
                        return "Too much!";
                      }
                  }
              }
      };

})()
