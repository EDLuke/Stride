import ApiUtils from "./utils/ApiUtils"
import ServerUtils from "./utils/ServerUtils"



var Api = {
	/*Credential*/
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
				  })
				})
				.then(ApiUtils.checkStatus)
				.then(response => response.json())
				.catch(error => {
					console.error(error);
				});
	},


	signup: function(userName, password) {
		return fetch(ServerUtils.getIPAddress(), {
				  method: 'POST',
				  headers: {
				  	'Accept': 'application/json',
				  	'Content-Type': 'application/json',
				  },
				  body: JSON.stringify({
				  	Act: 'SI',
				  	UserID: userName,
				  	Password: password,
				  })
				})
				.then(ApiUtils.checkStatus)
				.then(response => response.json())
				.catch(error => {
					console.error(error);
				});
	},


	update: function(userName, password){
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
	},

	addFitness: function(userName, calorie, date){
		return fetch(ServerUtils.getIPAddress(), {
				  method: 'POST',
				  headers: {
				    'Accept': 'application/json',
				    'Content-Type': 'application/json',
				  },
				  body: JSON.stringify({
				  	Act: 'AF',
				  	UserID: userName,
				  	Fitness: {
				  		Date: date,
				  		UserId: userName,
				  		Calorie: calorie,
				  	},
				  })
				})
				.then(ApiUtils.checkStatus)
				.then(response => response.json())
				.catch(error => {
					console.error(error);
				});
	},
}

export { Api as default };