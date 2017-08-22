/*angular
	.module('ngCribs')
	.controller('ngCribsController', function($scope, cribsFactory){

		$scope.cribs;

		cribsFactory.getCribs().success(function(data) {
			$scope.cribs = data;
		}).error(function(error) {
			console.log(error);
		});

	});
*/

angular
    .module('ngCribs')
    .controller('ngCribsController', function($scope, cribsFactory) {

        $scope.cribs;

        cribsFactory.getCribs().then(function(response) {
            $scope.cribs = response.data;
        }).catch(function(error) {
            console.log(error);
        });
    });