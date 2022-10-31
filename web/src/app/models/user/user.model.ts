export class UserModel {

    public static readonly url = '/user';

    public id !: string;
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public password !: string;

    public constructor(obj?: Partial<UserModel>) {
        Object.assign(this, obj);
    }

}