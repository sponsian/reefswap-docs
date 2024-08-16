---
id: providing-liquidity
title: Providing Liquidity
---

# Providing Liquidity

## Introduction

When providing liquidity from a smart contract, the most important thing to keep in mind is that tokens deposited into a pool at any rate other than the current reserve ratio _are vulnerable to being arbitraged_. As an example, if the ratio of x:y in a pair is 10:2 (i.e. the price is 5), and someone naively adds liquidity at 5:2 (a price of 2.5), the contract will simply accept all tokens (changing the price to 3.75 and opening up the market to arbitrage), but only issue pool tokens entitling the sender to the amount of assets sent at the proper ratio, in this case 5:1. To avoid donating to arbitrageurs, it is imperative to add liquidity at the current price. Luckily, it's easy to ensure that this condition is met!

## Using the Router

The easiest way to safely add liquidity to a pool is to use the [router](../../reference/smart-contracts/router-02), which provides simple methods to safely add liquidity to a pool. If the liquidity is to be added to an ERC-20/ERC-20 pair, use [addLiquidity](../../reference/smart-contracts/router-02#addliquidity). If REEF is involved, use [addLiquidityREEF](../../reference/smart-contracts/router-02#addliquidityreef).

These methods both require the caller to commit to a _belief about the current price_, which is encoded in the `amount*Desired` parameters. Typically, it's fairly safe to assume that the current fair market price is around what the current reserve ratio is for a pair (because of arbitrage). So, if a user wants to add 10,000 REEF to a pool, and the current DAI/REEF ratio of the pool is 200/10,000, it's reasonable to calculate that 200 DAI must be sent along with the REEF, which is an implicit commitment to the price of 200 DAI/10,000 REEF. However, it's important to note that this must be calculated _before the transaction is submitted_. It is _not safe_ to look up the reserve ratio from within a transaction and rely on it as a price belief, as this ratio can be cheaply manipulated to your detriment.

However, it is still possible to submit a transaction which encodes a belief about the price which ends up being wrong because of a larger change in the true market price before the transaction is confirmed. For that reason, it's necessary to pass an additional set of parameters which encode the caller's tolerance to price changes. These `amount*Min` parameters should typically be set to percentages of the calculated desired price. So, at a 1% tolerance level, if our user sends a transaction with 10,000 REEF and 200 DAI, `amountREEFMin` should be set to e.g. 9999.99 REEF, and `amountTokenMin` should be set to 198 DAI. This means that, at worst, liquidity will be added at a rate between 198 DAI/10,000 REEF and 202.02 DAI/10,000 REEF (200 DAI/9999.99 REEF).

Once the price calculations have been made, it's important to ensure that your contract a) controls at least as many tokens/REEF as were passed as `amount*Desired` parameters, and b) has granted approval to the router to withdraw this many tokens.
