import FitnessRecord from './FitnessRecordClass.js'

export default class User{
	
	constructor(){
		this.username = "";
		this.age = "";
		this.gender = "";
		this.height = "";
		this.weight = "";
		this.friends = [];
		this.FitnessRecord = [];
	}

	static initLoginInfo(username, age, gender, height, weight, friendlist, fitnesslist) {
		let thisUser = new User();
		thisUser.username = username;
		if (!(typeof age === "undefined") && age != null) {
			thisUser.age = age;
		}
		if (!(typeof age === "undefined") && gender != null) { 
			thisUser.gender = gender;
		}
		if (!(typeof age === "undefined") && height != null) {
			thisUser.height = height;
		}
		if (!(typeof age === "undefined") && weight != null) {
			thisUser.weight = weight;
		}
		if (!(typeof age === "undefined") && friendlist != null) {
			thisUser.friends = friendlist;
		} else {
			thisUser.friends = [];
		}
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
		return thisUser;
	}

	static friendsWithName(friendName) {
		if (this.friends != []) {
			for (var i = 0; i < friends.length; i++) {
				if (friendName == this.friends[i]) {
					return true;
				}
			}
		}
		return false;
	}
}