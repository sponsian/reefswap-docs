---
id: glossary
title: Glossary
sidebar_position: 6
---

## Automated Market Maker

An automated market maker is a smart contract on Reef Chain that holds liquidity reserves. Users can trade against these reserves at prices determined by a fixed formula. Anyone may contribute liquidity to these smart contracts, earning pro-rata trading fees in return.

## Asset

While a digital asset can take many forms, the ReefSwap Protocol supports ERC-20 token pairs, and represents a position in the form of ERC-20 liquidity provider (LP) tokens.

## Constant Product Formula

The automated market making algorithm used by ReefSwap. In ReefSwap this is `x\*y=k`.

## Core

Smart contracts that are considered foundational, and are essential for ReefSwap to exist. Upgrading to a new version of core would require deploying an entirely new set of smart contracts on Reef Chain and would be considered a new version of the ReefSwap Protocol.

## ERC-20

ERC-20 are fundamentally equal to ERC-20 tokens on Ethereum, and are fungible tokens on Reef Chain. ReefSwap supports all standard ERC-20 implementations.

## Factory

A smart contract that deploys a unique smart contract for any ERC-20/ERC-20 trading pair.

## Flash Swap

A trade that uses the tokens purchased before paying for them.

## Invariant

The “k” value in the constant product formula `X\*Y=K`

## Liquidity Provider / "LP"

A liquidity provider is someone who deposits ERC-20 tokens into a given liquidity pool. Liquidity providers take on price risk and are compensated with trading fees.

## Liquidity

Digital assets that are stored in a ReefSwwap pool contract, and are able to be traded against by traders.

## Mid Price

The price between the available buy and sell prices. In Reefswap V1, this is the ratio of the two ERC-20 token reserves.

## Observation

An instance of historical price and liquidity data of a given pair.

## Pair

A smart contract deployed from a ReefSwap V1 factory contract that enables trading between two ERC-20 tokens.

## Periphery

External smart contracts that are useful, but not required for ReefSwap to exist. New periphery contracts can always be deployed without migrating liquidity.

## Position

An instance of liquidity defined by upper and lower tick. And the amount of liquidity contained therein.

## Price Impact

The difference between the mid-price and the execution price of a trade.

## Protocol Fees

Fees that are rewarded to the protocol itself, rather than to liquidity providers.

## Range

Any interval between two ticks of any distance.

## Range Order

An approximation of a limit order, in which a single asset is provided as liquidity across a specified range, and is continuously swapped to the destination address as the spot price crosses the range.

## Reserves

The liquidity available within a pair. This was more commonly referenced before concentrated liquidity was introduced.

## Slippage

The amount the price moves in a trading pair between when a transaction is submitted and when it is executed.

## Spot Price

The current price of a token relative to another within a given pair.

## Swap Fees

The fees collected upon swapping which are rewarded to liquidity providers.

## Tick Interval

The price space between two nearest ticks.

## Tick

The boundaries between discrete areas in price space.
