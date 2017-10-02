export class User {
	public id : number = -1;
	public uid : string = '';
	public name : string = '';
	public email : string = '';
	public tenant : string = '';
	public roles : string[] = [];
	public dataAccessRights : string[] = [];
	public passwordValid : number = -1;

	constructor() {}
}