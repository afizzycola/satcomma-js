import {testData} from "./test_data/spec";
import satcomma from "../ts_src/index";
import { getRandomDelimiter } from "./test_utils";

// tests for fromBitcoin()
testData.fromBitcoin.forEach((assertPair, index) => {
    const delimiter = getRandomDelimiter();
    test(`Test input ${index}: ${assertPair[0]}, with function fromBitcoin() using random decimal delimiter - ${delimiter}`, () => {
        const lhs = assertPair[1]?.split(".")[0] 
        const rhs = assertPair[1]?.split(".")[1].replace(/,/g, delimiter) //[1] as we want to manipulate right of decimal point
        expect(satcomma.fromBitcoin(assertPair[0], {decimalDelimiter: delimiter})).toBe(`${lhs}.${rhs}`);
    })
})

// tests for fromSats()
testData.fromSats.forEach((assertPair, index) => {
    const delimiter = getRandomDelimiter();
    test(`Test input ${index}: ${assertPair[0]}, with function fromSats() using random decimal delimiter - ${delimiter}`, () => {
        const lhs = assertPair[1]?.split(".")[0] 
        const rhs = assertPair[1]?.split(".")[1].replace(/,/g, delimiter) //[1] as we want to manipulate right of decimal point
        expect(satcomma.fromSats(assertPair[0], {decimalDelimiter: delimiter})).toBe(`${lhs}.${rhs}`);
    })
})

// tests for fromBits()
testData.fromBits.forEach((assertPair, index) => {
    const delimiter = getRandomDelimiter();
    test(`Test input ${index}: ${assertPair[0]}, with function fromBits() using random decimal delimiter - ${delimiter}`, () => {
        const lhs = assertPair[1]?.split(".")[0] 
        const rhs = assertPair[1]?.split(".")[1].replace(/,/g, delimiter) //[1] as we want to manipulate right of decimal point
        expect(satcomma.fromBits(assertPair[0], {decimalDelimiter: delimiter})).toBe(`${lhs}.${rhs}`);
    })
})