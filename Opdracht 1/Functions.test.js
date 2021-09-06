const functions = require('./functions')

// OPDRACHT 1 //

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

// OPDRACHT 2 // 

test('checkValue Should be falsy when argument is undefined', () => {

    expect(functions.checkValue()).toBeFalsy();
});

// OPDRACHT 3 // 

test('User should be Brad Traversy object', () => {

    expect(functions.createUser()).toMatchObject({ firstName: "Brad", lastName: "Traversy" })

});

// OPDRACHT 4 // 

test('Should be under or equal to 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600)
});

// OPDRACHT 5 // 

test('There is no I in team', () => {
    expect('team').not.toMatch('I');
});

// OPDRACHT 6 // 

test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin')
});