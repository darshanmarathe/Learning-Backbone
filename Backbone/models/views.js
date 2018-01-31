var MainView = Backbone.View.extend({
    // render: function() {
    //     let templ = $("#welcome-tmpl").html();
    //     var compiled =  _.template(templ , this.model.toJSON());
    //     this.$el.append(compiled);

    // },
    show : function (childview) {
        this.$el.append(childview.$el);

    }
})



var UserView = Backbone.View.extend({
  tagName: "li",
    render: function() {
        let item  = this.model.toJSON();
        this.$el.append("<a href='/userdetails/" + item.id + "'>" + item.username +  "</a>  "  + item.isActive );
        return this.$el;
    }
});



var UserListView = Backbone.View.extend({
    tagName : "ul",
    render: function(){
        var el  =  this.$el;
        el.empty();
        this.collection.each((item) => {
         
            var _userView = new UserView({model : item});
            var rendered = _userView.render();
            el.append(rendered);
        })
    },
    initialize : function(){
        this.collection.on("sync" , this.render , this) 
    }
});


