exports.htmlTop = '<head> ' +
'<link rel="stylesheet" type="text/css" href="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css"> ' +
'<style type="text/css"> ' +
'body { ' +
'background-color: #252525; ' +
'font-size: 20px; ' +
'-webkit-font-smoothing:antialiased; ' +
'} ' +
'.result-box{ ' +
'float: left; ' +
'position: relative; ' +
'width: 510px; ' +
'height: 280px; ' +
'margin: 0 0 30px 40px; ' +
'border-radius: 5px; ' +
'background-color:#d6ff99; ' +
'text-align: center; ' +
'} ' +
'.result-box-good{ ' +
'background-color:#d6ff99; ' +
'}'+
'h1{ ' +
'color:#ffffff; ' +
'}'+
'.result-box-fail{ ' +
'background-color:#ffbfac; ' +
'}'+
'.result-content{ ' +
'position: relative; ' +
'height: 100%; ' +
'padding: 0 40px; ' +
'border-radius: 4px; ' +
'box-shadow: rgba(0,0,0,.2) 0 -5px 0 inset,rgba(0,0,0,.75) 0 1px 8px; ' +
'text-shadow: rgba(255,255,255,.5) 0 1px 1px; ' +
'} ' +
'.result-content-good{ ' +
'box-shadow: rgba(0,0,0,.2) 0 -5px 0 inset,rgba(0,0,0,.75) 0 1px 8px,rgba(77,117,21,.5) 0 0 70px inset; ' +
'} ' +
'.result-content-fail{ ' +
'box-shadow: rgba(0,0,0,.2) 0 -5px 0 inset,rgba(0,0,0,.75) 0 1px 8px,rgba(215,0,40,.3) 0 0 70px inset; ' +
'} ' +
'.modal-header { ' +
'background-color: #FEFEFA; ' +
'} ' +
'</style> ' +
'</head> ' +
' ' +
'<body ng-app="reportApp"> ' +
'<div class="container" ng-controller="ReportCtrl"> ' +
'<h1>{{reportTitle}}</h1>' +
'<div class="row"> ' +
'<div class="col-md-2 result-box" ng-class="{\'result-box-fail\': result.error > 0}" ng-repeat="result in results"> ' +
'<div class="row result-content" ng-class="{\'result-content-fail\': result.error > 0, \'result-content-good\': result.error < 1}" ng-click="showDetail(result.name)"> ' +
'<div class="col-md-12" style="border-bottom: 1px solid"> ' +
'<div><h3>Suite:</h3> <b>{{result.name}}</b></div> ' +
'<div>{{test}}</div> ' +
'</div> ' +
'<div class="col-md-12"> ' +
'<div style="color:green">success <b>{{result.success}}</b></div> ' +
'</div> ' +
'<div class="col-md-12"> ' +
'<div style="color:red">error <b>{{result.error}}</b></div> ' +
'</div> ' +
'<div class="col-md-12" > ' +
'<div style="color:orange">skipped <b>{{result.skipped}}</b></div> ' +
'</div> ' +
'</div>  ' +
'</div> ' +
'<div class="modal fade" id="detailModal"> ' +
'<div class="modal-dialog"> ' +
'<div class="modal-content"> ' +
'<div class="modal-header"> ' +
'<span>{{detail.name}}</span> ' +
'</div> ' +
'<div class="modal-body"> ' +
'<ul class="list-unstyled"> ' +
'<li ng-repeat="item in detail.tests"> ' +
'<span class="label " ng-class="{\'label-success\': item.success, \'label-danger\': !item.success}"> {{item.description}} </span> ' +
'</li> ' +
'</ul> ' +
'</div> ' +
'<div class="modal-footer"></div> ' +
'</div> ' +
'</div> ' +
'</div> ' +
'</div> ' +
' ' +
'</div> ' +
' ' +
'</div> ' +
'<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script> ' +
'<script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script> ' +
'<script src="https://netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script> ' +
'<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.10/angular.min.js"></script> ' +
'<script type="text/javascript"> ' +
'angular.module("reportApp",[]).controller("ReportCtrl", function ($scope) { ' +
'$scope.results = ';


exports.htmlBottom = '$scope.detail = []; '+
'$scope.showDetail = function (id){ '+
'var one = document.body.querySelector(\'div#detailModal\'); '+
'angular.element(\'div#detailModal\').modal(\'show\'); '+
'$scope.detail = $scope.results[id]; '+
'} '+
'}); '+
'</script> '+
'</body> ';

