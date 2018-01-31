var User =  Backbone.Model.extend({
        urlRoot:  base_url + '/superusers',

        idAttribute: 'id',
      
    
        defaults: {
            username: "",
            password: "",
            isActive: false
        },
        validate: function (attr, opts) {
            var errors = "";
            if (CheckStringEmpty(attr.username))
                errors += "Username is blnak" +  "\n";


            if (CheckStringEmpty(attr.password))
                errors += "password is blnak" +  "\n";

            if(errors != "")
                return errors;
        },
        initialize : function(){
            this.on("change", () => {
                console.log(u.isValid(), u.validationError)
            }),
            this.on("invalid", (u) => {
               alert(u.validationError)
            })
        }
      
    });

   
    var UserList = Backbone.Collection.extend({
        model : User,
        url: base_url + '/superusers/'
    });
    
    var users = new UserList([
    ]);
    var found = users.where((item) => {
        return item.get("password") == "ds";
    });
    console.log(found);

    