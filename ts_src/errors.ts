export default {
    SATS_RANGE_ERR : `Input value must less than the max amount of satoshis - ${21000000 * 1e8}`,
    SATS_NOT_INT_ERR : `Satoshis must be an integer. Did you intend to use fromBitcoin()?`,
    BITS_PRECISION_ERR : `Bits cannot have more than 2 decimal places of precision. Did you intend to use fromBitcoin()?`,
    ZERO_DECIMAL_PLACES_ERR: `There is no point using satcomma for zero decimal place systems. Just use the regular JavaScript toLocalString method for formatting`,
    DECIMAL_PLACE_OPTION_NOT_INT_ERR: `decimalPlaces option must be an integer.`,
}