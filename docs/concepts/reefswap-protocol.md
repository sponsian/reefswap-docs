---
id: reefswap-protocol
title: The ReefSwap Protocol
sidebar_position: 2
---


## Introduction

The ReefSwap protocol is a peer-to-peer[^1] system designed for exchanging cryptocurrencies [(ERC-20 Tokens)](https://ethereum.org/en/developers/docs/standards/tokens/ERC-20/) on the [Reef](https://reef.io/) blockchain. The protocol is implemented as a set of persistent, non-upgradable smart contracts; designed to prioritize censorship resistance, security, self-custody, and to function without any trusted intermediaries who may selectively restrict access.

There is currently one version of the ReefSwap protocol. V1 is based on Uniswap v2, is open source and licensed under GPL. Each version of ReefSwap, once deployed, will function in perpetuity, with 100% uptime, provided the continued existence of the Reef blockchain.

## How does the ReefSwap protocol compare to a typical market?

To understand how the ReefSwap protocol differs from a traditional exchange, it is helpful to first look at two subjects: how the Automated Market Maker design deviates from traditional central limit order book-based exchanges, and how permissionless systems depart from conventional permissioned systems.

### Order Book VS AMM

Most publicly accessible markets use a central limit [order book](https://www.investopedia.com/terms/o/order-book.asp) style of exchange, where buyers and sellers create orders organized by price level that are progressively filled as demand shifts. Anyone who has traded stocks through brokerage firms will be familiar with an order book system.

The ReefSwap protocol takes a different approach, using an Automated Market Maker (AMM), sometimes referred to as a Constant Function Market Maker, in place of an order book.

At a very high level, an AMM replaces the buy and sell orders in an order book market with a liquidity pool of two assets, both valued relative to each other. As one asset is traded for the other, the relative prices of the two assets shift, and a new market rate for both is determined. In this dynamic, a buyer or seller trades directly with the pool, rather than with specific orders left by other parties. The advantages and disadvantages of Automated Market Makers versus their traditional order book counterparts are under active research by a growing number of parties. We have collected some notable examples on our research page.

### Permissionless Systems

The second departure from traditional markets is the permissionless and immutable design of the ReefSwap protocol. These design decisions were inspired by Ethereum's core tenets, and our commitment to the ideals of permissionless access and immutability as indispensable components of a future in which anyone in the world can access financial services without fear of discrimination or counter-party risk.

Permissionless design means that the protocol's services are entirely open for public use, with no ability to selectively restrict who can or cannot use them. Anyone can swap, provide liquidity, or create new markets at will. This is a departure from traditional financial services, which typically restrict access based on geography, wealth status, and age.

The protocol is also immutable, in other words not upgradeable. No party is able to pause the contracts, reverse trade execution, or otherwise change the behavior of the protocol in any way. It is worth noting that at some point in the future, ReefSwap Governance may have the right (but no obligation) to divert a percentage of swap fees on any pool to a specified address. However, this capability will be known to all participants in advance, and to prevent abuse, the percentage is constrained between 10% and 25%.

## Where can I find more information

For research into the economics of AMMs, game theory, or optimization research, check out the [research](./research.md) page.

[^1]: Ethereum and related protocols are sometimes referred to as peer-to-contract systems as well. These are similar to a peer-to-peer systems, but with immutable, persistent programs known as smart contracts taking the place of a peer.
