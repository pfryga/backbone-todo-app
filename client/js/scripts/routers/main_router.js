var Router = Backbone.Router.extend({
    routes: {
        '': 'home'
    }
});

var router = new Router();

router.on('home', function () {
    console.log('home page');
});
