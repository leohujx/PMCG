/**
 * Created by Administrator on 2017/9/14.
 */
var app = angular.module("myapp", ["ngTable", "ngResource"]);


var url = "/appjson";
(function () {
    app.controller("demoController", pmcgController);
    pmcgController.$inject = ["NgTableParams", "pmcgService"];
    function pmcgController(NgTableParams, pmcgService) {
        var initialParams = {
            count: 7 // initial page size
        };
        this.tableParams = new NgTableParams(initialParams,{
            counts: [], // page size buttons
            // paginationMaxBlocks: 10,
            // paginationMinBlocks: 2,
            getData: function (params) {
                return pmcgService.query({
                    page: params.page(),
                    per_page: params.count(),
                    fname:  $("#fname").text(),
                    jname: $("#jname").text()
                }, function (data,headersGetter) {
                    console.log(headersGetter());
                    var headers = headersGetter();
                    var  nodenums = headers['riskynodenum'];
                    console.log(nodenums);
                    if(/[^\d+]/.test(nodenums) == true){
                        console.log(nodenums);
                        nodenums = 0;
                    }
                    if(nodenums != 0){
                        nodenums = parseInt(nodenums);
                    }
                    params.total(nodenums);
                    return data;
                }).$promise;
            }
        });
    }
})();

(function () {
    // alert(fullUrl);
    app.factory("pmcgService",["$resource", function($resource){
        return $resource(url,{
        },{
            query:{
                method: "GET",
                isArray: true
            }
        });
    }]);
})();