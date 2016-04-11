angular.module('reversDirective', [])

.filter('revers', function(){
    return function(items){
        return items.slice().reverse();
    };
});