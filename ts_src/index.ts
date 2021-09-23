export function fromSats(valueInsats: number): string {    
    //TO DOcheck is not larger than max Bitcoin
    //TO DOcheck is not larger than max satoshi
    // check is integer
    // satoshi to bitcoin
    return fromBitcoin(valueInsats / 100000000)
}

export function fromBitcoin(valueInBitcoin: number): string {
    //TO DOcheck is not larger than max Bitcoin
    //TO DOcheck is not larger than max satoshi
    const intDecArray = valueInBitcoin.toFixed(8)
        .toString()
        .split('.');
    const int = intDecArray[0];
    const decs = intDecArray[1];
    let result = int;
    result += "."
    if (decs) {
        result += (decs.substr(0, 2)) ? decs.substr(0, 2).padEnd(2, "0") : "00"
        result += ","
        result += (decs.substr(2, 3)) ? decs.substr(2, 3).padEnd(3, "0") : "000"
        result += ","
        result += (decs.substr(5, 3)) ? decs.substr(5, 3).padEnd(3, "0") : "000"
    } else {
        result += "00,000,000"
    }
    return result
}

export function fromBits(valueInBip176Bits: number): string {
    return fromSats(valueInBip176Bits * 100)
}

// const test = 1.934567891
// console.log(parseInt(test.toString()))
// console.log(parseFloat(test.toFixed(8)))