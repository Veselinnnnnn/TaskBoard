import { TaskEnum } from "../task.enum";

export class TaskModel {

    public static readonly url = '/tasks';
    
    public id : number | undefined;
    public name : string | undefined;
    public description : string | undefined;
    public parentTaskId : number | undefined;
    public type !: TaskEnum;
    public projectId : number | undefined;
    public userId: number | undefined;
    public taskOwner: string | undefined;

    public constructor(obj?: Partial<TaskModel>) {
        Object.assign(this, obj);
    }
    
}