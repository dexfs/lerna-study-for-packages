import {User} from "./user.entity";

const user = User.create('John Doe', 'a@a.com');

console.log(user.name);