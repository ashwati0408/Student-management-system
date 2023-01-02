var app = angular.module("myMod",['ngRoute']);


app.config(["$routeProvider",function($routeProvider){
	
	$routeProvider.
	when("/teacher",{
		templateUrl:'views/teachers.html',
		controller:'teacher_ctr'
	}).
	when("/student",{
		templateUrl:'views/students.html',
		controller:'student_ctr'
	}).
	when("/course",{
		templateUrl:'views/courses.html',
		controller:'course_ctr'
	}).
	when("/gallery",{
		templateUrl:'views/gallery.html',
		controller:'gallery_ctr'
	}).
	otherwise({
		redirectTo:'index.html'
	});
	
}]);


app.controller("teacher_ctr",function($scope){
	
	$scope.teachers = [
		{name:'Adil',age:27,qualification:'MCS'},
		{name:'Asad',age:28,qualification:'MPHIL'},
		{name:'Amjad',age:26,qualification:'MPHIL'},
		{name:'Khalid',age:33,qualification:'MBA'},
		{name:'Adeel',age:28,qualification:'MPHIL'},
	];
	
});

app.controller("student_ctr",function($scope){
	
	$scope.students = ["Ali","Usman","Osama","Zain","Dua","Zoha","Imran","Atif","Noman","Nasir"];
	
});

app.controller("course_ctr",function($scope){
	
	$scope.courses = ["Web Desigining","Web Development","Php","Asp.Net","Sql Server","Mysql","JQuery","Javascript","Android Development"];
	
});

app.controller("gallery_ctr",function($scope){
	
	$scope.pic1 = "images/Koala.jpg";
	$scope.pic2 = "images/Penguins.jpg";
	$scope.pic3 = "images/Tulips.jpg";
	
});



