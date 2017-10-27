import ApiUtils from "./ApiUtils"

var Api = {
	//Login
	login: function(userName, password){
		return fetch('http://160.39.212.221:9090', {
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
}

export { Api as default };