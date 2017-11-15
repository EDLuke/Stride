var ApiUtils = {
	checkStatus: function(response){
		if (response.status >= 200 && response.status < 300){
			return response;
		} else {
			let error = new Error(response.statusText);
			error.response = response;
			throw error;
		}
	},

	validateEmail: function(email){
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(email);
	}
}

export {ApiUtils as default};