export class SignInModel {

    public static readonly url = '/signIn';
    
    public email : string | undefined;
    public password : string | undefined;

    public constructor(obj?: Partial<SignInModel>) {
        Object.assign(this, obj);
    }
    
}