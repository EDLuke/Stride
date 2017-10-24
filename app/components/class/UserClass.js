import FitnessRecord from './FitnessRecord.js'

export default class User{
	username: string;
	height: int;
	weight: int;
	gender: string;
	age: int;
	fitnessRecord: FitnessRecord[];

	constructor(username){
		this.username = username;
	}
}