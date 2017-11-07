import FitnessRecord from './FitnessRecordClass.js'

export default class User{
	constructor(username, age, gender, height, weight, friendlist, fitnesslist){
		this.username = username;
		this.age = age;
		this.gender = gender;
		this.height = height;
		this.weight = weight;
		this.friends = friendlist;
		this.FitnessRecord = [];
		for (var i = 0; i < fitnesslist.length; i++) {
			var entry = fitnesslist[i].split(" ");
			this.FitnessRecord.push({
										date: entry[0],
										calorie: entry[1],
									})
		}

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
	}
}