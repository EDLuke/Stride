import ApiUtils from "./ApiUtils"

var Api = {
	//Login
	login: function(userName, password){
		return fetch('http://localhost:8080', {
				  method: 'POST',
				  body: "LI " + userName + " " + password
				})
				.then(ApiUtils.checkStatus)
				.then(response => response.json())
				.catch(error => {
					console.error(error);
				});
	},
}

export { Api as default };