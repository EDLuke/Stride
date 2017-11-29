import FitnessRecord from './FitnessRecordClass.js'

export default class User{
	
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

	static initSignUpInfo(username, age, gender, height, weight) {
		let thisUser = new User();
		thisUser.username = username;
		thisUser.age = age;
		thisUser.gender = gender;
		thisUser.height = height;
		thisUser.weight = weight;
		thisUser.friends = [];
		thisUser.FitnessRecord = [];
		return thisUser;
	}
}