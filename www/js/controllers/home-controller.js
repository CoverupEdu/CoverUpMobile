// CONTROLLER: home-controller
// Controls home page. (This is essentially a copy of photo-controller, without the photo preview.)
// Injects: $scope, $rootScope, Photo 

app.controller('home-controller', ['$scope', 'Photo', function($scope, Photo) {
    var btn1 = document.getElementById("button1");
    var btn2 = document.getElementById("button2");
    var btn3 = document.getElementById("button3");
    var market = document.getElementById("market-content");
    var sets = document.getElementById("sets-content");

    $scope.takePhoto = function() {
        var options = {
        destinationType: navigator.camera.DestinationType.FILE_URI,
        quality: 60,
        correctOrientation: true,
        saveToPhotoAlbum: false
        };
        
        Photo.getPicture(options).then(function (imageURI) {
            Photo.setImage(imageURI);
        }, null);
    };
    $scope.takePhotoFromGallery = function() {
        var options = {
        destinationType: navigator.camera.DestinationType.FILE_URI,
        quality: 75,
        correctOrientation: true,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY 
        };
        
        Photo.getPicture(options).then(function (imageURI) {
            Photo.setImage(imageURI);
        }, null);
    }
    
    $scope.setToDefaultPhoto = function() {
        Photo.setImage("img/default.jpg");
        $state.go('/modify');
    }
    
    //~~~~~~~~~~~~~~~~~~~~
    //Home page button control / layout control!
    //~~~~~~~~~~~~~~~~~~~~
    
    btn1.onclick = function() {
        this.classList.add("toggle-home-btn");
        btn2.classList.remove("toggle-home-btn");
        sets.style.visibility = "none";
        market.style.visibility = "visible";
    }
    
    btn2.onclick = function() {
        this.classList.add("toggle-home-btn");
        btn1.classList.remove("toggle-home-btn");
        market.style.visibility = "none";
        sets.style.visibility = "visible";
    }

    $(btn3).hover(
        function() {
            $(this).addClass("toggle-home-btn");
        }, 
        function() {
            $(this).removeClass("toggle-home-btn");
        }
    );
    
}]);