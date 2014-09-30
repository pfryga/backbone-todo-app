define([
    'backbone',
    'text!templates/listTpl.html'
], function(Backbone, listTpl) {

    var ListView = Backbone.View.extend({
        el: '.main-content',
        render: function() {
            this.$el.html('<span>List View</span>');
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


