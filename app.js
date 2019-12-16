
// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router'])

// configuring our routes 
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    
        // route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController'
        })
        
        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('form.profile', {
            url: '/profile',
            templateUrl: 'form-profile.html'
        })
        
        // url will be /form/interests

        .state('form.profile2', {
            url: '/profile2',
            templateUrl: 'form-profile-2.html'
        })

        .state('form.profile3', {
            url: '/profile3',
            templateUrl: 'form-profile-3.html'
        })

        .state('form.profile4', {
            url: '/profile4',
            templateUrl: 'form-profile-4.html'
        })


        // url will be /form/payment
        .state('form.social', {
            url: '/social',
            templateUrl: 'form-social.html'
        });
       
    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/form/profile');
})

// our controller for the form
// =============================================================================
.controller('formController', function($scope) {
    
    // we will store all of our form data in this object
    $scope.formData = {};
    
    // function to process the form
    $scope.processForm = function() {
        alert('awesome!');  
    };
    
});



