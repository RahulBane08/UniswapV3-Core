const UniswapV3Pool = artifacts.require('UniswapV3Pool.sol');
module.exports = async (callback) => {
  console.log(
    'UniswapV3Pool bytecode hash (Look for INIT_CODE_HASH):\n%s',
    (web3.utils.keccak256(UniswapV3Pool.bytecode)).substring(2)
  );
  callback();
}