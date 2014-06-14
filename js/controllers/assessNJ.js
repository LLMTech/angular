app.controller("assessCtrl", function ($scope) {

    $scope.initialize = function () {
        $scope.txtUsername = '';
        $scope.txtPassword = '';
		$scope.txtResult = '' ;
    };

    $scope.initialize();

    $scope.assessLogin = function () {
        $scope.txtResult = $scope.txtUsername;
        lclData = "userName=" + $scope.txtUsername + "&userPass=" + $scope.txtPassword;
        //alert(lclData);

        $.ajax({
            type: "POST",
            dataType:"xml",
            url: "http://assessmentnj.azurewebsites.net/UserService.asmx/Login",
            data: lclData,
            // { username: $("#username").val(),
            // password: $("#password").val()}
            //,
            success: checkLogin,
            failure: errorFunction

        });


    }; // end assessLogin

    function checkLogin(data) {
        varRetVal = $(data).find('string').text();
        //alert(varRetVal);
        //alert($(data).find('string').text());
        if (varRetVal == 'true') {
            alert("You correctly logged in");
        }
        else {
            alert("Your login failed");
        }

        $scope.txtResult = $(data).find('string').text();
    };

    function errorFunction() {
        alert("We couldn't check the login");
    };


}); // end assessCtrl