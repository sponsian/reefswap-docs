---
id: factory
title: Factory
---

# Factory

## Code

[`ReefswapV2Factory.sol`](https://github.com/reef-chain/reefscan/blob/master/contracts/ReefswapV2Factory.sol)

# Address

`ReefswapV2Factory` is deployed at `0x380a9033500154872813F6E1120a81ed6c0760a8` on the Reef [mainnet](https://reefscan.com/contract/0x380a9033500154872813F6E1120a81ed6c0760a8), and at `0x9b9a32c56c8F5C131000Acb420734882Cc601d39` on the [Reef testnet](https://ropsten.etherscan.io/address/0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f). 

# Events

## PairCreated

```solidity
event PairCreated(address indexed token0, address indexed token1, address pair, uint);
```

Emitted each time a pair is created via [createPair](#createpair).

- `token0` is guaranteed to be strictly less than `token1` by sort order.
- The final `uint` log value will be `1` for the first pair created, `2` for the second, etc. (see [allPairs](#allpairs)/[getPair](#getpair)).

# Read-Only Functions

## getPair

```solidity
function getPair(address tokenA, address tokenB) external view returns (address pair);
```

Returns the address of the pair for `tokenA` and `tokenB`, if it has been created, else `address(0)` (`0x0000000000000000000000000000000000000000`).

- `tokenA` and `tokenB` are interchangeable.
- Pair addresses can also be calculated deterministically via the SDK.

## allPairs

```solidity
function allPairs(uint) external view returns (address pair);
```

Returns the address of the `n`th pair (`0`-indexed) created through the factory, or `address(0)` (`0x0000000000000000000000000000000000000000`) if not enough pairs have been created yet.

- Pass `0` for the address of the first pair created, `1` for the second, etc.

## allPairsLength

```solidity
function allPairsLength() external view returns (uint);
```

Returns the total number of pairs created through the factory so far.

## feeTo

```solidity
function feeTo() external view returns (address);
```

See [Protocol Charge Calculation](../../concepts/advanced-topics/fees).

## feeToSetter

```solidity
function feeToSetter() external view returns (address);
```

The address allowed to change [feeTo](#feeto).

# State-Changing Functions

## createPair

```solidity
function createPair(address tokenA, address tokenB) external returns (address pair);
```

Creates a pair for `tokenA` and `tokenB` if one doesn't exist already.

- `tokenA` and `tokenB` are interchangeable.
- Emits [PairCreated](#paircreated).

# Interface

```solidity
import '@reefswap/contracts/interfaces/IReefswapV2Factory.sol';
```

```solidity
pragma solidity >=0.5.0;

interface IReefswapV2Factory {
  event PairCreated(address indexed token0, address indexed token1, address pair, uint);

  function getPair(address tokenA, address tokenB) external view returns (address pair);
  function allPairs(uint) external view returns (address pair);
  function allPairsLength() external view returns (uint);

  function feeTo() external view returns (address);
  function feeToSetter() external view returns (address);

  function createPair(address tokenA, address tokenB) external returns (address pair);
}
```

# ABI

```typescript
import IReefwapV2Factory from '@reefswap/build/IReefswapV2Factory.json'
```

[https://unpkg.com/@reefswap/v2-core@1.0.0/build/IReefswapV2Factory.json](https://unpkg.com/@reefswap/IUniswapV2Factory.json)
