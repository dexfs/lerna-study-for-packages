import {describe, expect, it, beforeEach, afterEach, jest} from '@jest/globals';
import * as DateHelper from '../../src/date-helpers/';
describe('#DateHelper suite', () => {
    beforeEach(() => {
        jest.useFakeTimers()
        jest.setSystemTime(new Date('2024-03-01T03:00:00Z').getTime());
    })

    afterEach(() => {
        jest.useRealTimers()
    })

    it('should format date correctly', () => {
        expect(DateHelper.formatDate(new Date(), 'yyyy-MM-dd')).toBe('2024-03-01')
    })

    it.each([null, '', undefined])('should throw an error if a invalid date %o is provided', (invalidDate) => {
        expect(() => DateHelper.formatDate(invalidDate as any, 'yyyy-MM-dd'))
            .toThrow("Invalid time value")
    })
})