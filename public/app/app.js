angular.module('MyApp', ['appRoutes', 'mainCtrl', 'authService', 'usrCtrl', 'userService', 'storyService',
    'storyCtrl', 'reversDirective'])

.config(function($httpProvider){
    $httpProvider.interceptors.push('AuthInterceptor');
});