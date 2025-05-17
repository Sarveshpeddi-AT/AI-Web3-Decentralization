const fs = require('fs');
const solc = require('solc');
const Web3 = require('web3');

const source = fs.readFileSync('contracts/DecentralizedAI.sol', 'utf8');
const input = {
  language: 'Solidity',
  sources: {
    'DecentralizedAI.sol': { content: source }
  },
  settings: {
    outputSelection: {
      '*': { '*': ['*'] }
    }
  }
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));
const abi = output.contracts['DecentralizedAI.sol']['DecentralizedAI'].abi;
const bytecode = output.contracts['DecentralizedAI.sol']['DecentralizedAI'].evm.bytecode.object;

const web3 = new Web3('http://127.0.0.1:8545');

(async () => {
  const accounts = await web3.eth.getAccounts();
  const contract = new web3.eth.Contract(abi);
  const deployed = await contract.deploy({ data: '0x' + bytecode }).send({
    from: accounts[0],
    gas: 1500000
  });
  console.log('Contract deployed at:', deployed.options.address);
})();
