
var app = new Vue({
    el: '#app',
    data: {
        userInputName: "",
        userInputPassword: "",

		profilePicLink: "",
		profileName: "",

		test: "aaaaaa"
    },

    methods: {

    	verifyUsers: function() {
    		var users = {
    			"jack" : {"Password": "1234", "Name": "Jack Zheng", "Status": "Student"},
				"john" : {"Password": "5678", "Name": "John Song", "Status": "TA"}
    		}

    		if (this.userInputName == "" || this.userInputPassword == "") {
    			alert("Please input your username and password");
    		} else {
    			if (users[this.userInputName] != undefined) {
    				ret = users[this.userInputName];
    				if (this.userInputPassword == ret["Password"]) {
						this.profileName = ret["Name"]
						console.log(this.profileName)
						test = "abcdefg"

    					window.location.href="mainPage.html?name=";

    				} else {
						alert("Incorrect password");
					}
    			} else {

    			}
    		}

    	},


		displayUser: function() {

		}
    }
})