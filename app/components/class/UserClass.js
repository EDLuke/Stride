import FitnessRecord from './FitnessRecordClass.js'

export default class User{
	
	// login constructor
	// constructor(username, age, gender, height, weight, friendlist, fitnesslist){


	// 	this.username = username;
	// 	this.age = age;
	// 	this.gender = gender;
	// 	this.height = height;
	// 	this.weight = weight;
	// 	this.friends = friendlist;
	// 	this.FitnessRecord = [];
	// 	for (var i = 0; i < fitnesslist.length; i++) {
	// 		var entry = fitnesslist[i].split(" ");
	// 		this.FitnessRecord.push({
	// 									date: entry[0],
	// 									calorie: entry[1],
	// 								})
	// 	}

		//Hard coded sample data
		// this.username = "yz3083";
		// this.age = 12;
		// this.gender = "Female";
		// this.height = 18;
		// this.weight = 18;
		// this.friends = ["yh2986", "lz2504"];
		// this.FitnessRecord = 
		// [
		// 	{
		// 		date:"2017-07-12",
		// 		calorie:15
		// 	},
		// 	{
		// 		date:"2017-08-123",
		// 		calorie:30
		// 	}
		// ]
	// }

	constructor(){
		this.username = null;
		this.age = null;
		this.gender = "";
		this.height = -1;
		this.weight = -1;
		this.friends = [];
		this.FitnessRecord = [];
	}

	static initLoginInfo(username, age, gender, height, weight, friendlist, fitnesslist) {
		let thisUser = new User();
		thisUser.username = username;
		thisUser.age = age;
		thisUser.gender = gender;
		thisUser.height = height;
		thisUser.weight = weight;
		thisUser.friends = friendlist;
		thisUser.FitnessRecord = [];
		if (fitnesslist != null) {
			for (var i = 0; i < fitnesslist.length; i++) {
				var entry = fitnesslist[i].split(" ");
				thisUser.FitnessRecord.push({
												date: entry[0],
												calorie: entry[1],
											});
			}
		}
		return thisUser;
	}

	static initSignUpInfo(username) {
		let thisUser = new User();
		thisUser.username = username;
		// thisUser.age = age;
		// thisUser.gender = gender;
		// thisUser.height = height;
		// thisUser.weight = weight;
		return thisUser;
	}
}