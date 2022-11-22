// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('123-456-7890 to be a true phone number', () => {
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});
test('098-765-4321 to be a true phone number', () => {
    expect(functions.isPhoneNumber("098-765-4321")).toBe(true);
});
test('123 to be a false phone number', () => {
    expect(functions.isPhoneNumber("123")).toBe(false);
});
test('21435 to be a false phone number', () => {
    expect(functions.isPhoneNumber("21435")).toBe(false);
});

test('kyleyee785@gmail.com to be a true email', () => {
    expect(functions.isEmail("kyleyee785@gmail.com")).toBe(true);
});
test('kjyee@ucsd.edu to be a true email', () => {
    expect(functions.isEmail("kjyee@ucsd.edu")).toBe(true);
});
test('name.edu to be a false email', () => {
    expect(functions.isEmail("name.edu")).toBe(false);
});
test('123 to be a false email', () => {
    expect(functions.isEmail("123")).toBe(false);
});



test('Password to be a strong password', () => {
    expect(functions.isStrongPassword("Password")).toBe(true);
});
test('Pwpassword to be a strong password', () => {
    expect(functions.isStrongPassword("Pwpassword")).toBe(true);
});
test('aaa to be a weak password', () => {
    expect(functions.isStrongPassword("aaa")).toBe(false);
});
test('bbb to be a weak password', () => {
    expect(functions.isStrongPassword("bbb")).toBe(false);
});

test('11/21/2022 to be a valid date', () => {
    expect(functions.isDate("11/21/2022")).toBe(true);
});
test('01/01/1001 to be a valid date', () => {
    expect(functions.isDate("01/01/1001")).toBe(true);
});
test('01/01/22222 to be an invalid date', () => {
    expect(functions.isDate("01/01/22222")).toBe(false);
});
test('01/01/ to be an invalid date', () => {
    expect(functions.isDate("01/01/")).toBe(false);
});

test('#000000 to be a valid hex color', () => {
    expect(functions.isHexColor("#000000")).toBe(true);
});
test('#111111 to be a valid hex color', () => {
    expect(functions.isHexColor("#111111")).toBe(true);
});
test('#12 to be a invalid hex color', () => {
    expect(functions.isHexColor("#2")).toBe(false);
});
test('#45 to be a invalid hex color', () => {
    expect(functions.isHexColor("#1")).toBe(false);
});