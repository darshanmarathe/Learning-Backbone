var User =  Backbone.Model.extend({
        url: '/api/users',
        defaults: {
            username: "",
            password: "",
            isActive: false
        },
        validate: function (attr, opts) {
            var errors = "";
            if (CheckStringEmpty(attr.username))
                errors += "Username is blnak";


            if (CheckStringEmpty(attr.password))
                errors += "password is blnak";

            if(errors != "")
                return errors;
        }

    });


    var UserList = Backbone.Collection.extend({
        model : User
    });
    
    var users = new UserList([
        {username : "darshan" , password :  "ds"},
        {username : "amit" , password :  "as"},
        {username : "zia" , password :  "ds"}
    ]);
    var found = users.where((item) => {
        return item.get("password") == "ds";
    });
    console.log(founde);

    