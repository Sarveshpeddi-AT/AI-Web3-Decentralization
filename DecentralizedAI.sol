// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IOracle {
    function getPrediction(string memory _data) external returns (uint);
}

contract DecentralizedAI {
    IOracle public oracle;
    address public owner;

    constructor(address _oracle) {
        oracle = IOracle(_oracle);
        owner = msg.sender;
    }

    function getAIResponse(string memory _data) public returns (uint) {
        return oracle.getPrediction(_data);
    }
}
