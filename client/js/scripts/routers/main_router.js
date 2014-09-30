define([
    'backbone',
    'views/listView'
], function (Backbone, listView) {
    var Router = Backbone.Router.extend({
        routes: {
            '' : 'home',
            'edit' : 'edit'
        }
    });

    var initialize = function () {
        var router = new Router();

        router.on('route:home', function() {
            listView.initialize();
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
