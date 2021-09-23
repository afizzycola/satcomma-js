export default {
    SATS_RANGE_ERR: `Input value is must be between 0 and the max amount of satoshis - ${21000000 * 1e8}`,
    SATS_NOT_INT_ERR: `Satoshis must be an integer. Did you intend to use fromBitcoin()?`,
    BITS_PRECISION_ERR: `Bits cannot have more than 2 decimal places of precision. Did you intend to use fromBitcoin()?`,
};
