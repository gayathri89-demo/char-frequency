const { countCharacterFrequency } = require('../src/charFrequency'); // CommonJS import

describe('Character Frequency', () => {
    test('basic string', () => {
        expect(countCharacterFrequency('hello world'))
            .toBe('h:1, e:1, l:3, o:2,  :1, w:1, r:1, d:1');
    });

    test('case sensitivity', () => {
        expect(countCharacterFrequency('aA')).toBe('a:1, A:1');
    });

    test('special characters', () => {
        expect(countCharacterFrequency('!@!')).toBe('!:2, @:1');
    });

    test('empty string', () => {
        expect(countCharacterFrequency('')).toBe('');
    });

    test('non-string input', () => {
        expect(() => countCharacterFrequency(123)).toThrow(TypeError);
    });
});