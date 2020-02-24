const { play } = require('./index');

test('check play() declation', () => {
    expect(play).toBeDefined();
});

test('TDD', () => {
    let number = 1;
    play(number);
    expect(play(number)).toBe(1);
});

test('TDD', () => {
    let number = 2;
    play(number);
    expect(play(number)).toBe(2);
});
test('TDD', () => {
    let number = 3;
    play(number);
    expect(play(number)).toBe('Fizz');
});

test('TDD', () => {
    let number = 4;
    play(number);
    expect(play(number)).toBe(4);
});
