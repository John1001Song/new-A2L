
var app = new Vue({
    el: '#app',
    data: {
        userInputName: "",
        userInputPassword: "",
    },

    methods: {

    	verifyUsers: function() {
    		var users = {
    			"jack" : ["abcd", "student"]
    		}

    		if (this.userInputName == "" || this.userInputPassword == "") {
    			alert("Please input your username and password");
    		} else {
    			if (users[this.userInputName] != undefined) {
    				ret = users[this.userInputName];
    				if (this.userInputPassword == ret[0]) {
    					window.location.href="main.html";
    				}
    			} else {

    			}
    		}

    	}
    }
})