export class SingUpModel {

    public static readonly url = '/signUp';

    public id !: string;
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public password !: string;

    public constructor(obj?: Partial<SingUpModel>) {
        Object.assign(this, obj);
    }

}