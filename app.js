(function () {
'use strict';

angular.module('LunchChecker', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope) {
	$scope.inputVal = "";
	$scope.totalValue = 0;
	$scope.message = "";
	const checkFunction = function() {
		let totalItemsNumber = countVal($scope.inputVal);
		$scope.totalValue = totalItemsNumber;
	}

	const countVal = function(string) {
		if(string==="") {
			$scope.message = 'Please enter data first'
		} else {
			let arr = string.split(",");
			let counter = 0;
			for (let i=0; i<arr.length; i++) {
			counter ++
		  } 
		return counter;
		}
	}
	const messageGenerator = function(num) {
		 if(num<3) {
			$scope.message = 'Enjoy!'
		} else if(num>3) {
			$scope.message = 'Too Much!'
		}
	}
	$scope.messageFunction = function() {
		checkFunction();
		messageGenerator($scope.totalValue);
	}
}

})();