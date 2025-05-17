# AI x Web3: Decentralized Intelligence Demo

This repository demonstrates a prototype where an AI model hosted via IPFS is invoked by a smart contract using Chainlink oracles.

## Components
- AI Fraud Detection Model (Python + scikit-learn)
- Flask API Endpoint hosted on IPFS/Filecoin
- Solidity Smart Contract consuming off-chain predictions
- Chainlink Oracle integration (simulated/local)

## Setup
1. Train model: `python ai_model/train.py`
2. Run API: `python flask_api/app.py`
3. Upload to IPFS: `python ipfs/ipfs_upload.py`
4. Compile and Deploy Contract: `node contracts/compile_deploy.js`

## Use Cases
- DeFi security agents
- Autonomous governance
- AI-powered DAOs
