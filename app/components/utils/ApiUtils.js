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
	},

	hashPassword: function(plainPassword){
		var hash = 0;

	    for(var i = 0; i < plainPassword.length; i++){
	    	var char = plainPassword.charCodeAt(i);

	    	hash = ((hash<<5)-hash)+char;
        	
	    	console.log(hash);

        	hash = hash & hash; // Convert to 32bit integer

	    	console.log(hash);

	    }

	    return hash;
	}
}

export {ApiUtils as default};