---
id: flash-swaps
title: Flash Swaps
---

ReefSwap flash swaps allow you to withdraw up to the full reserves of any ERC20 token on ReefSwap and execute arbitrary logic at no upfront cost, provided that by the end of the transaction you either:

- pay for the withdrawn ERC20 tokens with the corresponding pair tokens
- return the withdrawn ERC20 tokens along with a small fee

Flash swaps are incredibly useful because they obviate upfront capital requirements and unnecessary order-of-operations constraints for multi-step transactions involving ReefSwap.

# Examples

## Capital Free Arbitrage

One particularly interesting use case for flash swaps is capital-free arbitrage. It's well-known that an integral part of ReefSwap's design (based on Uniswap v2) is to create incentives for arbitrageurs to trade the ReefSwap price to a "fair" market price. While game-theoretically sound, this strategy is accessible only to those with sufficient capital to take advantage of arbitrage opportunities. Flash swaps remove this barrier entirely, effectively democratizing arbitrage.

Imagine a scenario where the cost of buying 100K REEF on ReefSwap is 200 DAI (which is calculated by calling `getAmountIn` with 100K REEF specified as an exact output), and on Oasis (or any other trading venue), 100K REEF buys 220 DAI. To anyone with 200 DAI available, this situation represents a risk-free profit of 20 DAI. Unfortunately, you may not have 200 DAI lying around. With flash swaps, however, this risk-free profit is available for anyone to take as long as they're able to pay gas fees.

### Withdrawing REEF from ReefSwap

The first step is to _optimistically_ withdraw 100K REEF from ReefSwap via a flash swap. This will serve as the capital that we use to execute our arbitrage. Note that in this scenario, we're assuming that:

- 100K REEF is the pre-calculated profit-maximizing trade
- The price has not changed on ReefSwap since our calculation

It may be the case that we'd like to calculate the profit-maximizing trade on-chain at the moment of execution, which is robust to price movements. This can be somewhat complex, depending on the strategy being executed. However, one common strategy is trading as profitably as possible _against a fixed external price_. (This price may be e.g., the average execution price of one or more orders on another platform.) If the ReefSwap market price is far enough above or below this external price, the following example contains code that calculates the amount to trade over ReefSwap for maximum profit: [`ExampleSwapToPrice.sol`](https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/examples/ExampleSwapToPrice.sol).

### Trade at External Venue

Once we've obtained our temporary capital of 100K REEF from ReefSwap, we now can trade this for 220 DAI on another platform. Once we've received the DAI, we need to pay ReefSwap back. We've mentioned that the amount required to cover 100K REEF is 200 DAI, calculated via `getAmountIn`. So, after sending 200 of the DAI back to the ReefSwap pair, you're left with 20 DAI of profit!

## Instant Leverage

Flash swaps can be used to improve the efficiency of levering up using lending protocols and ReefSwap.

Consider a stablecoin minting platform in its simplest form: a system which accepts REEF as collateral and allows DAI to be minted against it while ensuring that the value of the REEF never drops below 150% of the value of the DAI.

Say we use this system to deposit a principal amount of 300K REEF, and mint the maximum amount of DAI. At a price of 100K REEF / 200 DAI, we receive 400 DAI. In theory, we could lever this position up by selling the DAI for more REEF, depositing this REEF, minting the maximum amount of DAI (which would be less this time), and repeating until we've reached our desired leverage level.

It's quite simple to use ReefSwap as a liquidity source for the DAI-to-REEF component of this process. However, looping through protocols in this way isn't particularly elegant, and can be gas-intensive.

Luckily, flash swaps enable us to withdraw the _full_ REEF amount upfront. If we wanted 2x leverage against our 300K REEF principal, we could simply request 300K REEF in a flash swap and deposit 600K REEF into the stablecoin platform. This gives us the ability to mint 800 DAI. If we mint as much as we need to cover our flash swap (say 605), the remainder serves as a safety margin against price movements.

# Developer resources

- To see how to integrate a flash swap in your smart contract read [Using Flash Swaps](../../guides/smart-contract-integration/using-flash-swaps).
