import ApiUtils from "./ApiUtils"
import ServerUtils from "./ServerUtils"



var Api = {
	//Login
	

	login: function(userName, password){

		return fetch(ServerUtils.getIPAddress(), {
				  method: 'POST',
				  headers: {
				    'Accept': 'application/json',
				    'Content-Type': 'application/json',
				  },
				  body: JSON.stringify({
				  	Act: 'LI',
				  	UserID: userName,
				  	Password: password,
				  	account: ''
				  })
				})
				.then(ApiUtils.checkStatus)
				.then(response => response.json())
				.catch(error => {
					console.error(error);
				});
	},

	signup: function(userName, password){
		return fetch(ServerUtils.getIPAddress(), {
				  method: 'POST',
				  headers: {
				    'Accept': 'application/json',
				    'Content-Type': 'application/json',
				  },
				  body: JSON.stringify({
				  	Act: 'CI',
				  	UserID: userName,
				  	Password: password,
				  	account: ''
				  })
				})
				.then(ApiUtils.checkStatus)
				.then(response => response.json())
				.catch(error => {
					console.error(error);
				});
	}
}

export { Api as default };