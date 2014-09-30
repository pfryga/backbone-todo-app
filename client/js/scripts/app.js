define([
    'jquery',
    'underscore',
    'backbone',
    'routers/main_router'
], function($, _, Backbone, Router){
    var init = function() {
        Router.initialize();
    };

    return {
        initialize: init
    };
});
