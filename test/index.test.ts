import {testData} from "./test_data";
import Satcomma from "../ts_src/index";

// tests for fromBitcoin()
testData.fromBitcoin.forEach(testPair => {
    test(`Test input: ${testPair[0]}, with function fromBitcoin()`, () => {
        expect(Satcomma.fromBitcoin(testPair[0])).toBe(testPair[1]);
    })
})

// tests for fromSats()
testData.fromSats.forEach(testPair => {
    test(`Test input: ${testPair[0]}, with function fromSats()`, () => {
        expect(Satcomma.fromSats(testPair[0])).toBe(testPair[1]);
    })
})

// tests for fromBits()
testData.fromBits.forEach(testPair => {
    test(`Test input: ${testPair[0]}, with function fromBits()`, () => {
        expect(Satcomma.fromBits(testPair[0])).toBe(testPair[1]);
    })
})