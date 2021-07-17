export class TaskObject{
    constructor(
    public taskid:number,    
	public userid:number,
	public taskname:string,
	public description :string,
	public priority:string,
	public issued:string,
	public targeted:string,
	public status:string,
	public type:string,
    ){}
}