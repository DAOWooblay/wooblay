// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./DAOContract.sol";

contract DAOFactory {
    mapping(uint256 => address) private _daos;
    uint256 private _totalDaos;

    function createDAO(string memory _daoName, string memory _tickerName) public payable returns (uint256, address) {
        DAOContract newDAO = new DAOContract{value: msg.value}(_daoName, _tickerName);
        _daos[_totalDaos] = address(newDAO);
        _totalDaos++;

        return (_totalDaos - 1, address(newDAO));
    }

    function getDAO(uint256 id) public view returns (address[] memory) {
        return _daos[id];
    }
}