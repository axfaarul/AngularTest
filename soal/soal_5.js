var sismiop = angular.module('sismiop', [
    'ngCookies'
]);
sismiop.controller('page', ['$scope', '$cookieStore', function($scope, $cookieStore) {
    $scope.struktur_list = {
        nama: 'Undetected',
    };
    $scope.list = [
        $scope.struktur_list,
        $scope.struktur_list,
        $scope.struktur_list,
        $scope.struktur_list,
    ];
}]);
