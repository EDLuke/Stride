import FitnessRecord from './FitnessRecordClass.js'

export default class User{
	constructor(username, age, gender, height, weight){
		// this.username = username;
		// this.age = age;
		// this.gender = gender;
		// this.height = height;
		// this.weight = weight;

		//Hard coded sample data
		this.username = "yz3083";
		this.age = 12;
		this.gender = "Female";
		this.height = 18;
		this.weight = 18;
		this.friends = ["yh2986", "lz2504"];
		this.FitnessRecord = 
		[
			{
				date:"2017-07-12",
				calorie:15
			},
			{
				date:"2017-08-123",
				calorie:30
			}
		]
	}
}