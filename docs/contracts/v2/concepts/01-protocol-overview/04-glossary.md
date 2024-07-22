---
id: glossary
title: Glossary
---

### Automated market maker

An automated market maker is a smart contract on Reef that holds on-chain liquidity reserves. Users can trade against these reserves at prices set by an automated market making formula.

### Constant product formula

The automated market making algorithm used by ReefSwap.
See [x\*y=k](#x--y--k).

### ERC20

ERC20 tokens are fungible tokens on Reef. ReefSwap supports all standard ERC20 implementations.

### Factory

A smart contract that deploys a unique smart contract for any ERC20/ERC20 trading pair, including REEF/ERC20.

### Pair

A smart contract deployed from the ReefSwap Factory that enables trading between two ERC20 tokens.

### Pool

Liquidity within a pair is pooled across all liquidity providers.

### Liquidity provider / LP

A liquidity provider is someone who deposits an equivalent value of two ERC20 tokens into the liquidity pool within a pair. Liquidity providers take on price risk and are compensated with fees.

### Mid price

The price between what users can buy and sell tokens at a given moment. In ReefSwap this is the ratio of the two ERC20 token reserves.

### Price impact

The difference between the mid-price and the execution price of a trade.

### Slippage

The amount the price moves in a trading pair between when a transaction is submitted and when it is executed.

### Core

Smart contracts that are essential for ReefSwap to exist. Upgrading to a new version of core would require a liquidity migration.

### Periphery

External smart contracts that are useful, but not required for ReefSwap to exist. New periphery contracts can always be deployed without migrating liquidity.

### Flash swap

A trade that uses the tokens being purchased before paying for them.

### `x * y = k`

The constant product formula.

### Invariant

The "k" value in the constant product formula
