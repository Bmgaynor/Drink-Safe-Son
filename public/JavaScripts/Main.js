/**
 * Created by gay9511 on 9/25/2015.
 */
var AppRouter = Backbone.Router.extend({
    routes: {
        "": "home",
        "drinks": "list",
        "drinks/add": "addDrink",
        "drink/:id": "drinkDetails"
    },
    initialize: function (){
        //Create nav bar
        this.headerView = new HeaderView();
        $('.header').html(this.headerView.el);
    }

});


var app = new AppRouter();
//utils.loadTemplate(['HeaderView'], function() {
//    app = new AppRouter();
//    Backbone.history.start();
//});