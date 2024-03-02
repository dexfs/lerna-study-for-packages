export class User {
    private _name: string;
    private _email: string;
    private constructor(aName: string, aEmail: string) {
        this._name = aName;
        this._email = aEmail;
    }

    static create(aName: string, aEmail: string): User {
        return new User(aName, aEmail);
    }


    get name(): string {
        return this._name;
    }

    get email(): string {
        return this._email;
    }
}