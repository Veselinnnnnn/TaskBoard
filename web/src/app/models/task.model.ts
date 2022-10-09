import { TaskEnum } from "../task.enum";

export class TaskModel {

    public static readonly url = '/my-projects';
    
    public name : string | undefined;
    public description : string | undefined;
    public parentTaskId : number | undefined;
    public TaskType : TaskEnum | undefined;
    public projectId : number | undefined;
    public userId: number | undefined;
    public taskOwner: string | undefined;

    public constructor(obj?: Partial<TaskModel>) {
        Object.assign(this, obj);
    }
    
}