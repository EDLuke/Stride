import FitnessRecord from './FitnessRecordClass.js';
import moment from 'moment';

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
		if (!(typeof gender === "undefined") && gender != null) { 
			thisUser.gender = gender;
		}
		if (!(typeof height === "undefined") && height != null) {
			thisUser.height = height;
		}
		if (!(typeof weight === "undefined") && weight != null) {
			thisUser.weight = weight;
		}
		if (!(typeof friendlist === "undefined") && friendlist != null) {
			thisUser.friends = friendlist;
		} else {
			thisUser.friends = [];
		}
		thisUser.FitnessRecord = [];
		if (!(typeof fitnesslist === "undefined") && fitnesslist != null) {
			for (var i = 0; i < fitnesslist.length; i++) {
				//console.log(fitnesslist[i]);

				var entry = fitnesslist[i].split(" ");
				var calorieIn = (entry[2].length > 0) ? parseInt(entry[2]) : 0;
				var calorieOut = (entry[4].length > 0) ? parseInt(entry[2]) : 0;

				let record = new FitnessRecord(entry[0], calorieIn, calorieOut);
				// console.log(record);
				thisUser.FitnessRecord.push(record);

				//console.log(thisUser.FitnessRecord);
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

	getLastActiveDate() {
		if(this.FitnessRecord.length == 0)
			return '';

		var first = this.FitnessRecord[0].date;
		var max = this.FitnessRecord[0].date;
		for (var i = 0; i < this.FitnessRecord.length; i++) {
			if (moment(this.FitnessRecord[i].date).diff(first, 'days') > 
				moment(max).diff(first, 'days')) {
				max = this.FitnessRecord[i].date;
			}
		}
		return max;
	}

	getMostOutPutEntry() {
		if(this.FitnessRecord.length == 0)
			return '';
		
		var max = this.FitnessRecord[0];
		for (var i = 0; i < this.FitnessRecord.length; i++) {
			if (this.FitnessRecord[i].calorieOut > max.calorieOut) {
				max = this.FitnessRecord[i];
			}
		}
		return max;
	}
}