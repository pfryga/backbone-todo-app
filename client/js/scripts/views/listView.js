define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/listTpl.html'
], function($, _, Backbone, listTpl) {

    var ListView = Backbone.View.extend({
        el: '.main-content',
        render: function() {
            // var template = _.template($('#main-content-list').html());
            // this.$el.html(template);
            this.$el.html('Lorem ipsum!');
        },
        initialize: function () {
            console.log('view was initialized');
        }
    });

    var initialize = function () {
        var listView = new ListView();
        listView.render();
    };

    return {
        initialize: initialize
    };
});


