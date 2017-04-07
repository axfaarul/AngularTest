var sismiop = angular.module('sismiop', []);

sismiop.controller('soal_4', ['$scope', function($scope) {
   $scope.inputSelect = '0';
   $scope.namaKaryawan=[ "-- Pilih Nama Karyawan --","Budi","Icha","Fajar","Candra","Anton","Winny","Danu"];
   $scope.dataKaryawanKeys = Object.keys($scope.namaKaryawan);


}]);
