import {testData} from "./test_data/spec";
import satcomma from "../ts_src/index";
import { getRandomDelimiter } from "./test_utils";


// tests for fromBitcoin()
testData.fromBitcoinIntegerDelimiter.forEach((assertPair, index)=> {
    const delimiter = getRandomDelimiter();
    test(`Test input ${index}: ${assertPair[0]}, with function fromBitcoin() using random integer delimiter - ${delimiter}`, () => {
        const lhs = assertPair[1]?.split(".")[0].replace(/,/g, delimiter) 
        const rhs = assertPair[1]?.split(".")[1] //[0] as we want to manipulate right of decimal point
        expect(satcomma.fromBitcoin(assertPair[0], {integerDelimiter: delimiter})).toBe(`${lhs}.${rhs}`);
    })
})

// tests for fromSats()
testData.fromSatsIntegerDelimiter.forEach((assertPair, index) => {
    const delimiter = getRandomDelimiter();
    test(`Test input ${index}: ${assertPair[0]}, with function fromSats() using random integer delimiter - ${delimiter}`, () => {
        const lhs = assertPair[1]?.split(".")[0].replace(/,/g, delimiter) 
        const rhs = assertPair[1]?.split(".")[1] //[0] as we want to manipulate right of decimal point
        expect(satcomma.fromSats(assertPair[0], {integerDelimiter: delimiter})).toBe(`${lhs}.${rhs}`);
    })
})

// tests for fromBits()
testData.fromBitsIntegerDelimiter.forEach((assertPair, index) => {
    const delimiter = getRandomDelimiter();
    test(`Test input ${index}: ${assertPair[0]}, with function fromBits() using random integer delimiter - ${delimiter}`, () => {
        const lhs = assertPair[1]?.split(".")[0].replace(/,/g, delimiter) 
        const rhs = assertPair[1]?.split(".")[1] //[0] as we want to manipulate right of decimal point
        expect(satcomma.fromBits(assertPair[0], {integerDelimiter: delimiter})).toBe(`${lhs}.${rhs}`);
    })
})

