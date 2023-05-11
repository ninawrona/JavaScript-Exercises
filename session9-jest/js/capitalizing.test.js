import { capitalize } from "./capitalizingString.js"

test('properly capitalizes all letters of the string', () => {
    expect(capitalize("hello")).toBe("HELLO");
})