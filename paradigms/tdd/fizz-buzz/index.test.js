const { play } = require('./index');

test('check play() declation', () => {
    expect(play).toBeDefined();
});

test('TDD1', () => {
    let number = 1;
    play(number);
    expect(play(number)).toBe(1);
});

test('TDD2', () => {
    let number = 2;
    play(number);
    expect(play(number)).toBe(2);
});
test('TDD3', () => {
    let number = 3;
    play(number);
    expect(play(number)).toBe('Fizz');
});

test('TDD4', () => {
    let number = 4;
    play(number);
    expect(play(number)).toBe(4);
});
