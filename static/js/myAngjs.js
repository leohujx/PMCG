/**
 * Created by Administrator on 2017/9/11.
 */

var myApp = angular.module('myapp', []);

var dataUrl = '/data/';

myApp.controller('tableController', function($scope){
        $scope.imgClick = function (familyName) {
            var fullUrl = dataUrl + familyName;
            window.location.href = fullUrl;
        }
});