import {testData} from "./test_data";
import satcomma from "../ts_src/index";

// tests with default comma delimiter
// tests for fromBitcoin()
testData.fromBitcoin.forEach(assertPair => {
    test(`Test input: ${assertPair[0]}, with function fromBitcoin()`, () => {
        expect(satcomma.fromBitcoin(assertPair[0])).toBe(assertPair[1]);
    })
})

// tests with default comma delimiter
// tests for fromBitcoin()
testData.fromBitcoinValidate.forEach(assertPair => {
    test(`Test input: ${assertPair[0]}, with function fromBitcoin()`, () => {
        expect(satcomma.fromBitcoin(assertPair[0], undefined, assertPair[2])).toBe(assertPair[1]);
    })
})

// tests for fromSats()
testData.fromSats.forEach(assertPair => {
    test(`Test input: ${assertPair[0]}, with function fromSats()`, () => {
        expect(satcomma.fromSats(assertPair[0])).toBe(assertPair[1]);
    })
})

// tests for fromBits()
testData.fromBits.forEach(assertPair => {
    test(`Test input: ${assertPair[0]}, with function fromBits()`, () => {
        expect(satcomma.fromBits(assertPair[0])).toBe(assertPair[1]);
    })
})

// tests with custom delimiters
const choiceOfDelimiters = ["'", " ", "-", "_"];

function getRandomDelimiter () {
    return choiceOfDelimiters[Math.floor(Math.random() * choiceOfDelimiters.length)];
}

// tests for fromBitcoin()
testData.fromBitcoin.forEach(assertPair => {
    const delimiter = getRandomDelimiter();
    test(`Test input: ${assertPair[0]}, with function fromBitcoin() using random delimiter - ${delimiter}`, () => {
        expect(satcomma.fromBitcoin(assertPair[0], delimiter)).toBe(assertPair[1]?.replace(/,/g, delimiter));
    })
})

// tests for fromSats()
testData.fromSats.forEach(assertPair => {
    const delimiter = getRandomDelimiter();
    test(`Test input: ${assertPair[0]}, with function fromSats() using random delimiter - ${delimiter}`, () => {
        expect(satcomma.fromSats(assertPair[0], delimiter)).toBe(assertPair[1]?.replace(/,/g, delimiter));
    })
})

// tests for fromBits()
testData.fromBits.forEach(assertPair => {
    const delimiter = getRandomDelimiter();
    test(`Test input: ${assertPair[0]}, with function fromBits() using random delimiter - ${delimiter}`, () => {
        expect(satcomma.fromBits(assertPair[0], delimiter)).toBe(assertPair[1]?.replace(/,/g, delimiter));
    })
})