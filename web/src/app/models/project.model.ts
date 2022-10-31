import { TaskModel } from "./task.model";

export class ProjectModel {

    public static readonly url = '/my-projects';
    
    public id!: number;
    public projectName : string | undefined;
    public members : string | undefined;
    public tasks: TaskModel[] | undefined;
    public userId : number | undefined;
    public teamLeader: string | undefined;

    public constructor(obj?: Partial<ProjectModel>) {
        Object.assign(this, obj);
    }
    
}
