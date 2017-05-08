'use strict';

angular.module('app').controller('mainController', function ($scope, $log, $http) {
		$scope.pno = undefined;

		$scope.authenticate = function () {
			$http.post('/api/authenticate', {pno: $scope.pno}).then(
				function (res) {
					$log.info(res);
				},
				function (err) {
					$log.info(err);
				}
			);
		};
	});