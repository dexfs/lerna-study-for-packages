import {describe, it, expect} from '@jest/globals';
import { User} from '../src/index';

describe('#Domain Suite', () => {
    it('should create a user', () => {
        const user = User.create('John Doe', 'a@a.com');
        expect(user.name).toBe('John Doe');
        expect(user.email).toBe('a@a.com');
    })
})