var app = angular.module('AssessNJ', []);

app.directive('myHello', function () {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'js/views/my-hello.html',
        replace: true
    };
});

app.directive('myLogin', function () {
    return {
        restrict: 'E',
        //template: '<div>Hi there</div>',
        transclude: true,
        templateUrl: 'js/views/my-login.html',
        replace: true
    };
});

//the url with "/" prefix is relative to the domain, without the "/" prefix it will be relative to the main ("index.html") page or base url (if you use location in the html5 mode).