define([
    'backbone'
], function (Backbone) {
    var Router = Backbone.Router.extend({
        routes: {
            '' : 'home',
            'edit' : 'edit'
        }
    });

    var initialize = function () {
        var router = new Router();

        router.on('route:home', function() {
            console.log('home page');
        });

        router.on('route:edit', function() {
            console.log('edit page');
        });

        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});
