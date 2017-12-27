var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope', '$http', function ($scope, $http) {
        $scope.testVar = 5;
        
        $('#uFile').on('change', function () {
            console.log("File upload changed");
            var formData = new FormData();
            
            var filesU = $(this).get(0).files;
            
            if (filesU.length > 0) {
                
                formData.append('uFile', filesU[0], filesU[0].name);
            }
        });
        
        $scope.uploadFile = function () {
            console.log("File taken");
            
            $scope.ufile = document.getElementById('fileUpload').files;
            
            
            //$scope.uFile = element.files;
            
            
            //alert("Your File Size is" + file[0].files[0].size);
            
            $http({
                method : 'POST',
                url : '/api/file/',
                
                data: {
                    upload : formData,
                },
            });
        }
        
        $scope.fileChange = function (elem) {
            
            console.log("Elem from fileChange is" + elem);
            $scope.uFile = elem;
        }
    }]);

