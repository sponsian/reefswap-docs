---
id: overview
title: API Overview
---

This section will explains the Reefscan Subgraph and how to interact with it. The Reefscan subgraph indexes data from the Reef blockchain over time. It organizes data about pairs, tokens, the blockchain as a whole, and more. The subgraph updates any time a transaction is made on Reef Chain. The subgraph runs on [Subsquid](https://subsquid.io) protocol's Cloud service and can be openly queried.

## Resources

[Mainnet Explorer](https://squid.subsquid.io/reef-explorer/graphql) - sandbox for querying data and endpoints for developers on Reef mainnet.

[Testnet Explorer](https://squid.subsquid.io/reef-explorer-testnet/graphql) - sandbox for querying data and endpoints for developers on Reef testnet.

## Usage

The subgraph provides a snapshot of the current state of Reef and also tracks historical data. It is currently used to power the token charts. **It is not intended to be used as a data source for structuring transactions (contracts should be referenced directly for the most reliable, live data).**

## Making Queries

To learn more about querying a subgraph, refer to [ReefScan's documentation](https://docs.reef.io/docs/developers/reefscan/).
