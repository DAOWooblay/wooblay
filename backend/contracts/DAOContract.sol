// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;


import "./DAONft.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract DAOContract {
    string public daoName;
    uint public treasuryAmount;
    uint256 public mintCounter;
    mapping(address => uint256) public ownerTokenIds;
    mapping(address => mapping(uint => bool)) public memberVotes;
    mapping(address => mapping(uint => bool)) public banVotes;

    event DaoCreation(address daoAddress, string daoName, address daoCreator, uint daoTreasury);
    event MemberProposalCreation(address daoAddress, uint memberProposalId, address memberProposer, address proposedMember);
    event MemberProposalVote(address daoAddress, uint memberProposalId, address voter, bool support);
    event MemberProposalFinal(address daoAddress, uint memberProposalId, bool outcome);
    event BanProposalCreation(address daoAddress, uint banProposalId, address banProposer, address proposedBan);
    event BanProposalVote(address daoAddress, uint banProposalId, address voter, bool support);
    event BanProposalFinal(address daoAddress, uint banProposalId, bool outcome);

    enum Outcome {None, Yes, No}
    struct memberProposal {
        uint id;
        address proposer;
        address proposedMember;
        uint yesVotes;
        uint noVotes;
        uint startTime;
        uint endTime;
        bool executed;
    }
    memberProposal[] memberProposals;
    memberProposal[] banProposals;


    constructor(string memory _daoName, string memory _tickerName) payable {
        require(msg.value > 0, "Insufficient funds for treasury!");

        daoName = _daoName;
        treasuryAmount = msg.value;
        mintCounter = 0;

        daoNft = new DAONFT(_daoName, _tickerName);
        ownerTokenIds[msg.sender] = mintCounter;
        mintCounter += 1;
        daoNft.safeMint(msg.sender, "https://amber-actual-cockroach-212.mypinata.cloud/ipfs/QmZGkNeJ8Zii917mgN1zwzFJHG2JQJj82h7JChCGYEahPw");
        
        emit DaoCreation(address(this), daoName, msg.sender, treasuryAmount);
    }

    DAONFT public daoNft;

    modifier onlyMember() {
        require(daoNft.balanceOf(msg.sender) > 0, "You are not mmeber of this DAO!");
        _;
    }

    function createMemberProposal(address _proposedMember) external onlyMember{
        memberProposal memory newMemberProposal = memberProposal({
            id: memberProposals.length,
            proposer: msg.sender,
            proposedMember: _proposedMember,
            yesVotes: 0,
            noVotes: 0,
            startTime: block.timestamp,
            endTime: block.timestamp + 7 days,
            executed: false
        });
    
        memberProposals.push(newMemberProposal);
        emit MemberProposalCreation(address(this), newMemberProposal.id, msg.sender, _proposedMember);
    }

    function voteMemberProposal(uint _proposalId, bool _support) external onlyMember{
        require(!memberVotes[msg.sender][_proposalId], "You already voted for this proposal!");
        require(!memberProposals[_proposalId].executed, "Proposal was already executed!");
        require(block.timestamp >= memberProposals[_proposalId].startTime && block.timestamp <= memberProposals[_proposalId].endTime, "Invalid voting period!");

        if (_support) {
            memberProposals[_proposalId].yesVotes += 1;
        } else {
            memberProposals[_proposalId].noVotes += 1;
        }
    
        memberVotes[msg.sender][_proposalId] = true;
        emit MemberProposalVote(address(this), _proposalId, msg.sender, _support);

        uint256 voteSum = memberProposals[_proposalId].yesVotes + memberProposals[_proposalId].noVotes;
        uint256 nftCounter = daoNft.totalSupply();
        bool allVoted = false;
        if(voteSum == nftCounter) {
            allVoted = true;
        }

        uint256 votingRatio = ((memberProposals[_proposalId].yesVotes * 100) / nftCounter);
        if(allVoted && votingRatio > 50) {
            ownerTokenIds[memberProposals[_proposalId].proposedMember] = mintCounter;
            mintCounter += 1;
            daoNft.safeMint(memberProposals[_proposalId].proposedMember, "https://amber-actual-cockroach-212.mypinata.cloud/ipfs/QmZGkNeJ8Zii917mgN1zwzFJHG2JQJj82h7JChCGYEahPw");
            memberProposals[_proposalId].executed = true;
            emit MemberProposalFinal(address(this), memberProposals[_proposalId].id, true);
        } else if(allVoted && votingRatio <= 50){
            emit MemberProposalFinal(address(this), memberProposals[_proposalId].id, false);
        }
    }

    function createBanProposal(address _proposedMember) external onlyMember{
        memberProposal memory newBanProposal = memberProposal({
            id: memberProposals.length,
            proposer: msg.sender,
            proposedMember: _proposedMember,
            yesVotes: 0,
            noVotes: 0,
            startTime: block.timestamp,
            endTime: block.timestamp + 7 days,
            executed: false
        });
    
        banProposals.push(newBanProposal);
        emit BanProposalCreation(address(this), newBanProposal.id, msg.sender, _proposedMember);
    }

    function voteBanProposal(uint _proposalId, bool _support) external onlyMember{
        require(msg.sender!=banProposals[_proposalId].proposedMember, "You are not alllowed to vote on your own ban!");
        require(!banVotes[msg.sender][_proposalId], "You already voted for this proposal!");
        require(!banProposals[_proposalId].executed, "Proposal was already executed!");
        require(block.timestamp >= banProposals[_proposalId].startTime && block.timestamp <= banProposals[_proposalId].endTime, "Invalid voting period!");

        if (_support) {
            banProposals[_proposalId].yesVotes += 1;
        } else {
            banProposals[_proposalId].noVotes += 1;
        }
    
        banVotes[msg.sender][_proposalId] = true;
        emit BanProposalVote(address(this), _proposalId, msg.sender, _support);

        uint256 voteSum = banProposals[_proposalId].yesVotes + banProposals[_proposalId].noVotes;
        uint256 nftCounter = daoNft.totalSupply();
        bool allVoted = false;
        if(voteSum == (nftCounter - 1)) {
            allVoted = true;
        }

        uint256 votingRatio = ((banProposals[_proposalId].yesVotes * 100) / (nftCounter - 1));
        if(allVoted && votingRatio > 50) {
            uint256 burnTokenId = ownerTokenIds[banProposals[_proposalId].proposedMember];
            daoNft.burn(burnTokenId);
            banProposals[_proposalId].executed = true;
            emit BanProposalFinal(address(this), _proposalId, true);
        } else if(allVoted && votingRatio <= 50){
            emit BanProposalFinal(address(this), _proposalId, false);
        }
    }

    function getTreasuryAmount() public view returns (uint) {
        return treasuryAmount;
    }

    receive() external payable {}


}