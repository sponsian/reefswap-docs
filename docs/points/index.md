# ReefSwap Points Program

## Introduction 

The ReefSwap Points Program is beginning soon. The ReefSwap points program allows users to see their on-chain contribution to ReefSwap. 

## How does it work? 
Users can easily earn ReefSwap points and try to get to the top by doing any of the following things:

1. Provide Liquidity
2. Swap
3. Refer

Points can be earned daily from either of these actions; however, some actions will earn more points than others. 

---

# Pools
## Liquidity provision
### Base Points for Liquidity Provision:
Depending on the pool type, LPs can earn from 2.5 to 10 points per day for each dollar of assets provided in liquidity pools.

If users withdraw liquidity during the day, the points will be calculated based on the lowest balance of that day.

**Summary:**

- 1 points per $ per day for stable/stable pools (e.g. USDC/USDT)
- 4 points per $ per day for volatile/volatile pools (e.g. REEF/MRD)
- 7 points per $ per day for volatile/stable pool (e.g. REEF/USDC)

## Liquidity multiplier
A multiplier ranging from 1 to the number of available pools is applied to users that provide liquidity in multiple pools (up to 4) . For instance, if there are 4 pools available, users providing liquidity in all the pools will see their points multiplied by 4.

## Bootstrapping campaign multiplier
Liquidity providers (LPs) earn an early-bird multiplier during the first two weeks from the ReefSwap Pool launch. The multiplier starts at 5, decreasing linearly to 1 over 14 days, and applies to the points accrued daily.

## Early Szn
In recognition of the importance of some of the early projects that deployed on Reef Chain, ReefSwap will be running regular campaigns that reward LP in pools with extra points for specific time periods: 

Early Szn: Occasionally, Early Szn Pool LPs will recieve a 5x multiplier, decreasing linearly to 1 over a period of 28 days, applying to the points accrued daily. These pools will be announced when they're ready.

## Meme Szn
In recognition of the importance of meme culture on Reef Chain, ReefSwap will be running regular campaigns that reward LP in pools with extra points for specific time periods: 

Meme Szn: Occasionally, Meme Szn Pool LPs will recieve a 5x multiplier, decreasing linearly to 1 over a period of 14 days, applying to the points accrued daily. These pools will be announced when they're ready.

# Swap
## Swap points
Swaps routed directly via ReefSwap Pools will earn 200 points for every $1 fee generated for the pool. 

For example: 

- ETH/USDT swap fee is 0.1%
- A $10,000 swap will earn ~2000 points

# Summary (TL;DR)
## Liquidity provision 

- 2.5 points per $ per day for stable / stable pools
- 5 points per $ per day for volatile / volatile pools
- 10 points per $ per day for volatile / stable pools

### Liquidity multiplier 

A multiplier ranging from 1 to the number of available pools is applied to users that provide liquidity in multiple pools (up to 4). For instance, if there are 4 pools available, users providing liquidity in all the pools will see their points multiplied by 4.

## Swap 
Swaps routed directly via ReefSwap Pools on ReefSwap Swap will earn 200 points for every $1 fee generated for the pool. 

## Refer
The referrer earns 10% of every referee's points

The referee gains an additional 5% lifetime bonus 

## Duration multiplier 
Users get a higher multiplier the longer crypto assets are supplied as liquidity.

- After 7 days, there is a 1.5x multipler applied
- After 15 days, there is a 2x multiplier applied
- After 30 days, there is a 3x multiplier applied
- After 60 days, there is a 4x multiplier applied
- After 90 days, there is a 5x multiplier applied

## Get started 
Existing users of ReefSwap will be happy to know that points have been retroactively calculated and awarded to all existing and previous users of ReefSwap. Check out your points today https://app.reefswap.com/points

# FAQs
Why are my points not calculated for my liquidity pool position? 

- Only values above $1 will be accounted for, so for example, if 1 USDC = 0.9998, then this deposit is not accounted for
- Daily points will be calculated daily around 00:00 UTC
- Points are awarded for balances that the user had at the beginning and the end of the snapshot of the previous day. For example, points awarded on Tuesday will be for Monday balances 
- New users will have to wait until the following day to see their first points
- Users have to have an existing or previous deposit to generate a referral code
- Ineligible tokens include [Metronotes (XMN)](https://reefscan.com/token/0xc26Ea5B0cF3c60a94D1b18A035535b381b689d9C), [Wrapped BTC](https://reefscan.com/token/0x50d2F665495c0A088Ccd3B88d1BBF1bfe9028150), and [Wrapped ETH](https://reefscan.com/token/0x55DBa27F3D184704F86B41aB452ac6abff566620) as these tokens are illegitimate or have highly inflated, false values with no basis in reality.

A simple illustration:

| Day | Balance (start of day) | Deposit | Balance (end of day) | Points calculated  | Point balance |
| --- | ---------------------- | ------- | -------------------- | ------------------ | ------------- |
| 1   | 0                      | 10 USDC | 10 USDC              | 0                  | 0             |
| 2   | 10 USDC                | 0 USDC  | 10 USDC              | 10                 | 10            |
| 3   | 10 USDC                | 10 USDC | 20 USDC              | 10                 | 20            |
| 4   | 20 USDC                | 10 USDC | 20 USDC              | 20                 | 40            |
| 5   | 30 USDC                | 0 USDC  | 30 USDC              | 20                 | 60            |

**Note:** *points are calculated and displayed after 00:00 UTC each day.*

Points are non-transferable, do not hold cash value, and cannot be exchanged for cash. Selling or disposing of Points is strictly prohibited. For more information, please read the [terms and conditions](../terms). 