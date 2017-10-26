import FitnessRecord from './FitnessRecordClass.js'

export default class User{
	constructor(username, age, gender, height, weight){
		this.username = username;
		this.age = age;
		this.gender = gender;
		this.height = height;
		this.weight = weight;
	}
}