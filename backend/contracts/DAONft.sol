// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

 
contract DAONFT is ERC721, ERC721URIStorage, Ownable, ERC721Enumerable {
    using Counters for Counters.Counter;
 
    Counters.Counter public _tokenIdCounter;
 
    constructor(string memory _tokenName, string memory _tokenSymbol) ERC721(_tokenName, _tokenSymbol) {}
    
    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721Enumerable, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }
 
    // The following functions are overrides required by Solidity.
 
    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function burn(uint256 tokenId) public {
        super._burn(tokenId);
    }
 
    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function _beforeTokenTransfer(address from,  address to,  uint256 tokenId, uint256 batchSize) internal override (ERC721, ERC721Enumerable) virtual {
        require(from == address(0) || to == address(0), "Err: token transfer is BLOCKED");   
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function getTokenIdCounter() public view returns (uint256) {
        return _tokenIdCounter.current();
    }
    
}