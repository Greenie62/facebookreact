
var axios=require("axios")

module.exports={

    loadPage:function(cb){
        var x='loaded'
        cb(x)
    },

    checkLogin:function(username,password,cb){
        console.log("username: " + username)
        console.log("password: " + password);
        if(username.length > 4 && password.length > 3){
            cb(true)
        }
        else{
            cb(false)
        }
    }
}