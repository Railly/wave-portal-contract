// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
  uint256 totalWaves;
  mapping(address => uint256) balances;

  constructor() {
    console.log("Heyy, I am a fancy smart contract :D!");
  }

  function wave(address _addr) public {
    balances[_addr]++;
    totalWaves++;
    console.log("/******************* wave() *********************/");
    console.log("%s has waved", msg.sender);
    console.log("\n");
  }

  function getTotalWaves () public view returns(uint256) {
    console.log("/*************** getTotalWaves() ********************/");
    console.log("We have %d total waves!", totalWaves);
    console.log("\n");
    return totalWaves;
  }

  function getTotalWavesByAddress(address _addr) public view returns(uint256) {
    console.log("/*************** getTotalWavesByAddress() ********************/");
    console.log("%s has waved %d times!", _addr, balances[_addr]);
    console.log("\n");
    return balances[_addr];
  }
} 
