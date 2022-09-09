# KEK ERC20 Token Snapshot: Generate ERC20 Token Snapshots

This command-line utility creates a snapshot of any ERC20 token in JSON or CSV format. Use your own fully synced Ethereum node or any _Ethereum node as a service_ like Infura.

- Works with or without a local Kekchain node.
- Compatible with Infura frens
- Automatically resumes the next time upon failure.
- Tested to work with Infura.

## Getting Started

```
git clone https://github.com/billaure-crystaleum/kek-erc20-snapshot
```

### CLI Arguments

None. Prompts for user input and produces a configuration file on the first run.

### How to Use KEK ERC20 Token Snapshot?

Run the program:

```
node index.js
```

## Configuration File / Prompt Parameters
### snapshot.config.js

```json
{
  "provider": "https://mainnet.infura.io/v3/<key>",
  "contractAddress": "",
  "fromBlock": 0,
  "toBlock": "latest",
  "format": "json",
  "blocksPerBatch": 2500,
  "delay": 0,
  "checkIfContract": "yes"
}
```

### provider

Enter your fully synced Ethereum node. Could be a local node or remote services like Infura.

### contractAddress

Address of your ERC20 token.

### fromBlock

The block height to scan from. To save time, enter the block number of the transaction your token was created on.

### toBlock

The block height to end the scan at.

### blocksPerBatch

The number of blocks to query per batch.

If you are using remote service like Infura, keep this number relative low (2000-5000) to avoid rate limits. If you are using a dedicated Ethereum node, you can increase this number to suit your needs.

### delay

The delay (in ms) between each request in the loop. Tweak this if you are experiencing rate limit from your provider.

### checkIfContract

Checks each address to determine whether it is a smart contract or an Kekchain wallet.
