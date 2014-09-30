require.config({
    paths: {
        'jquery': '../bower_components/jquery/dist/jquery.min',
        'underscore': '../bower_components/underscore/underscore-min',
        'backbone': '../bower_components/backbone/backbone'
    }
});

require([
    'app',
], function(App) {
    App.initialize();
});
