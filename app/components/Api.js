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


	update: function(userName, displayName, userpw, userHeight, userWeight, userGender, userAge){
		
		return fetch(ServerUtils.getIPAddress(), {
				  method: 'POST',
				  headers: {
				    'Accept': 'application/json',
				    'Content-Type': 'application/json',
				  },
				  body: JSON.stringify({
				  	Act: 'CI',
				  	UserID: userName,
				  	Account: {
				  		UserID: userName,
				  		Name: displayName,
				  		Password: userpw,
				  		Height: userHeight,
				  		Weight: userWeight,
				  		Gender: userGender,
				  		Age: userAge,
				  	}
				  })
				})
				.then(ApiUtils.checkStatus)
				.then(response => response.json())
				.catch(error => {
					console.error(error);
				});
	},

	addFitness: function(userName, calorieIn, calorieOut, date){		
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
				  		Input: calorieIn,
				  		Output: calorieOut
				  	},
				  })
				})
				.then(ApiUtils.checkStatus)
				.then(response => response.json())
				.catch(error => {
					console.error(error);
				});
	},


	searchFood: function(userName, food){

		return fetch(ServerUtils.getIPAddress(), {
				  method: 'POST',
				  headers: {
				    'Accept': 'application/json',
				    'Content-Type': 'application/json',
				  },
				  body: JSON.stringify({
				  	Act: 'APIF',
				  	UserID: userName,
				  	Nutrition: food
				  })
				})
				.then(ApiUtils.checkStatus)
				.then(response => response.json())
				.catch(error => {
					console.error(error);
				});
	},

	searchFriend: function(userName){
		return fetch(ServerUtils.getIPAddress(), {
				  method: 'POST',
				  headers: {
				    'Accept': 'application/json',
				    'Content-Type': 'application/json',
				  },
				  body: JSON.stringify({
				  	Act: 'CA',
				  	UserID: userName,
				  })
				})
				.then(ApiUtils.checkStatus)
				.then(response => response.json())
				.catch(error => {
					console.error(error);
				});
	},

	addFriend: function(userName, friendName){
		return fetch(ServerUtils.getIPAddress(), {
				  method: 'POST',
				  headers: {
				    'Accept': 'application/json',
				    'Content-Type': 'application/json',
				  },
				  body: JSON.stringify({
				  	Act: 'FO',
				  	UserID: userName,
				  	Friendlist: [friendName],
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