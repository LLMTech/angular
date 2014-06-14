var app = angular.module('AssessNJngView', ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider.when("/",
    {
        templateUrl: "js/views/my-login.html",
        controller: "assessCtrl"
    }
    );
});


//the url with "/" prefix is relative to the domain, without the "/" prefix it will be relative to the main ("index.html") page or base url (if you use location in the html5 mode).