---
id: pricing
title: Pricing
---

# How are prices determined?

As we learned in [Protocol Overview](../protocol-overview/how-reefswap-works), each pair on ReefSwap is actually underpinned by a liquidity pool. Liquidity pools are smart contracts that hold balances of two unique tokens and enforces rules around depositing and withdrawing them. The primary rule is the [constant product formula](../protocol-overview/glossary#constant-product-formula). When a token is withdrawn (bought), a proportional amount must be deposited (sold) to maintain the constant. The ratio of tokens in the pool, in combination with the constant product formula, ultimately determine the price that a swap executes at.

# How ReefSwap handles prices

At a high level, in ReefSwap, _trades must be priced in the periphery_. The good news is that the [library](../../reference/smart-contracts/library) provides a variety of functions designed to make this quite simple, and all swapping functions in the [router](../../reference/smart-contracts/router-02) are designed with this in mind.

# Pricing Trades

When swapping tokens on ReefSwap, it's common to want to receive as many output tokens as possible for an _exact input amount_, or to pay as few input tokens as possible for an _exact output amount_. In order to calculate these amounts, a contract must look up the _current reserves_ of a pair, in order to understand what the current price is. However, it is _not safe to perform this lookup and rely on the results without access to an external price_.

Say a smart contract naively wants to send 10 MRD to the MRD/REEF pair and receive as much REEF as it can get, given the current reserve ratio. If, when called, the naive smart contract simply looks up the current price and executes the trade, it is _vulnerable to front-running and will likely suffer an economic loss_. To see why, consider a malicious actor who sees this transaction before it is confirmed. They could execute a swap which dramatically changes the MRD/REEF price immediately before the naive swap goes through, wait for the naive swap to execute at a bad rate, and then swap to change the price back to what it was before the naive swap. This attack is fairly cheap and low-risk, and can typically be performed for a profit.

To prevent these types of attacks, it's vital to submit swaps _that have access to knowledge about the "fair" price their swap should execute at_. In other words, swaps need access to an _oracle_, to be sure that the best execution they can get from ReefSwap is close enough to what the oracle considers the "true" price. While this may sound complicated, the oracle can be as simple as an _off-chain observation of the current market price of a pair_. Because of arbitrage, it's typically the case that the ratio of the intra-block reserves of a pair is close to the "true" market price. So, if a user submits a trade with this knowledge in mind, they can ensure that the losses due to front-running are tightly bounded. This is how, for example, the ReefSwap frontend ensure trade safety. It calculates the optimal input/output amounts given observed intra-block prices, and uses the router to perform the swap, which guarantees the swap will execute at a rate no less that `x`% worse than the observed intra-block rate, where `x` is a user-specified slippage tolerance (0.5% by default).

There are, of course, other options for oracles, including [native oracles](../core-concepts/oracles).

## Exact Input

If you'd like to send an exact amount of input tokens in exchange for as many output tokens as possible, you'll want to use [getAmountsOut](../../reference/smart-contracts/router-02#getamountout). The equivalent SDK function is [getOutputAmount](../../../../sdk/2.0.0/reference/pair#getoutputamount), or [minimumAmountOut](../../../../sdk/2.0.0/reference/trade#minimumamountout-since-204) for slippage calculations.

## Exact Output

If you'd like to receive an exact amount of output tokens for as few input tokens as possible, you'll want to use [getAmountsIn](../../reference/smart-contracts/router-02#getamountsin). The equivalent SDK function is [getInputAmount](../../../../sdk/2.0.0/reference/pair#getinputamount), or [maximumAmountIn](../../../../sdk/2.0.0/reference/trade#maximumamountin-since-204) for slippage calculations.

## Swap to Price

For this more advanced use case, see [ExampleSwapToPrice.sol](https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/examples/ExampleSwapToPrice.sol).
