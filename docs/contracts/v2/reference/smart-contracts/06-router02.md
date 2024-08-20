---
id: router-02
title: Router02
---

Because routers are stateless and do not hold token balances, they can be replaced safely and trustlessly, if necessary. This may happen if more efficient smart contract patterns are discovered, or if additional functionality is desired. For this reason, routers have _release numbers_, starting at `01`. This is the only release for ReefSwap, `02`.

# Code

[`ReefswapV2Router02.sol`](https://github.com/reef-chain/reefswap/blob/main/contracts/ReefswapV2Router02.sol)

# Address

`ReefswapV2Router02` is deployed at `0x641e34931C03751BFED14C4087bA395303bEd1A5` on the Reef [mainnet](https://reefscan.com/contract/0x641e34931C03751BFED14C4087bA395303bEd1A5), and the [Scuba](https://testnet.reefscan.com/contract/0x614b7B6382524C32dDF4ff1f4187Bc0BAAC1ed11)testnet. It was built from commit [5bd61f0](https://github.com/reef-chain/reefswap/commit/5bd61f0fc0d8f8ea1605fbec1861173c34d9e9b6).

# Read-Only Functions

## factory

```solidity
function factory() external pure returns (address);
```

Returns [factory address](../smart-contracts/factory#address).

## quote

See [quote](../smart-contracts/library#quote).

## getAmountOut

See [getAmountOut](../smart-contracts/library#getamountout).

## getAmountIn

See [getAmountIn](../smart-contracts/library#getamountin).

## getAmountsOut

```solidity
function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts);
```

See [getAmountsOut](../smart-contracts/library#getamountsout).

## getAmountsIn

```solidity
function getAmountsIn(uint amountOut, address[] memory path) public view returns (uint[] memory amounts);
```

See [getAmountsIn](../smart-contracts/library#getamountsin).

# State-Changing Functions

## addLiquidity

```solidity
function addLiquidity(
  address tokenA,
  address tokenB,
  uint amountADesired,
  uint amountBDesired,
  uint amountAMin,
  uint amountBMin,
  address to,
  uint deadline
) external returns (uint amountA, uint amountB, uint liquidity);
```

Adds liquidity to an ERC-20⇄ERC-20 pool.

- To cover all possible scenarios, `msg.sender` should have already given the router an allowance of at least amountADesired/amountBDesired on tokenA/tokenB.
- Always adds assets at the ideal ratio, according to the price when the transaction is executed.
- If a pool for the passed tokens does not exists, one is created automatically, and exactly amountADesired/amountBDesired tokens are added.

| Name           | Type      |                                                                                                                |
| :------------- | :-------- | :------------------------------------------------------------------------------------------------------------- |
| tokenA         | `address` | A pool token.                                                                                                  |
| tokenB         | `address` | A pool token.                                                                                                  |
| amountADesired | `uint`    | The amount of tokenA to add as liquidity if the B/A price is <= amountBDesired/amountADesired (A depreciates). |
| amountBDesired | `uint`    | The amount of tokenB to add as liquidity if the A/B price is <= amountADesired/amountBDesired (B depreciates). |
| amountAMin     | `uint`    | Bounds the extent to which the B/A price can go up before the transaction reverts. Must be <= amountADesired.  |
| amountBMin     | `uint`    | Bounds the extent to which the A/B price can go up before the transaction reverts. Must be <= amountBDesired.  |
| to             | `address` | Recipient of the liquidity tokens.                                                                             |
| deadline       | `uint`    | Unix timestamp after which the transaction will revert.                                                        |
|                |           |                                                                                                                |
| amountA        | `uint`    | The amount of tokenA sent to the pool.                                                                         |
| amountB        | `uint`    | The amount of tokenB sent to the pool.                                                                         |
| liquidity      | `uint`    | The amount of liquidity tokens minted.                                                                         |

## addLiquidityREEF

```solidity
function addLiquidityREEF(
  address token,
  uint amountTokenDesired,
  uint amountTokenMin,
  uint amountREEFMin,
  address to,
  uint deadline
) external payable returns (uint amountToken, uint amountREEF, uint liquidity);
```

Adds liquidity to an ERC-20⇄REEF pool with REEF.

- To cover all possible scenarios, `msg.sender` should have already given the router an allowance of at least amountTokenDesired on token.
- Always adds assets at the ideal ratio, according to the price when the transaction is executed.
- `msg.value` is treated as a amountREEFDesired.
- Leftover REEF, if any, is returned to `msg.sender`.
- If a pool for the passed token and REEF does not exists, one is created automatically, and exactly amountTokenDesired/`msg.value` tokens are added.

| Name                           | Type      |                                                                                                                           |
| :----------------------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------ |
| token                          | `address` | A pool token.                                                                                                             |
| amountTokenDesired             | `uint`    | The amount of token to add as liquidity if the REEF/token price is <= `msg.value`/amountTokenDesired (token depreciates). |
| `msg.value` (amountREEFDesired) | `uint`    | The amount of REEF to add as liquidity if the token/REEF price is <= amountTokenDesired/`msg.value` (REEF depreciates).    |
| amountTokenMin                 | `uint`    | Bounds the extent to which the REEF/token price can go up before the transaction reverts. Must be <= amountTokenDesired.  |
| amountREEFMin                   | `uint`    | Bounds the extent to which the token/REEF price can go up before the transaction reverts. Must be <= `msg.value`.         |
| to                             | `address` | Recipient of the liquidity tokens.                                                                                        |
| deadline                       | `uint`    | Unix timestamp after which the transaction will revert.                                                                   |
|                                |           |                                                                                                                           |
| amountToken                    | `uint`    | The amount of token sent to the pool.                                                                                     |
| liquidity                      | `uint`    | The amount of liquidity tokens minted.                                                                                    |

## removeLiquidity

```solidity
function removeLiquidity(
  address tokenA,
  address tokenB,
  uint liquidity,
  uint amountAMin,
  uint amountBMin,
  address to,
  uint deadline
) external returns (uint amountA, uint amountB);
```

Removes liquidity from an ERC-20⇄ERC-20 pool.

- `msg.sender` should have already given the router an allowance of at least liquidity on the pool.

| Name       | Type      |                                                                                       |
| :--------- | :-------- | :------------------------------------------------------------------------------------ |
| tokenA     | `address` | A pool token.                                                                         |
| tokenB     | `address` | A pool token.                                                                         |
| liquidity  | `uint`    | The amount of liquidity tokens to remove.                                             |
| amountAMin | `uint`    | The minimum amount of tokenA that must be received for the transaction not to revert. |
| amountBMin | `uint`    | The minimum amount of tokenB that must be received for the transaction not to revert. |
| to         | `address` | Recipient of the underlying assets.                                                   |
| deadline   | `uint`    | Unix timestamp after which the transaction will revert.                               |
|            |           |                                                                                       |
| amountA    | `uint`    | The amount of tokenA received.                                                        |
| amountB    | `uint`    | The amount of tokenB received.                                                        |

## removeLiquidityREEF

```solidity
function removeLiquidityREEF(
  address token,
  uint liquidity,
  uint amountTokenMin,
  uint amountREEFMin,
  address to,
  uint deadline
) external returns (uint amountToken, uint amountREEF);
```

Removes liquidity from an ERC-20⇄REEF pool and receive REEF.

- `msg.sender` should have already given the router an allowance of at least liquidity on the pool.

| Name           | Type      |                                                                                      |
| :------------- | :-------- | :----------------------------------------------------------------------------------- |
| token          | `address` | A pool token.                                                                        |
| liquidity      | `uint`    | The amount of liquidity tokens to remove.                                            |
| amountTokenMin | `uint`    | The minimum amount of token that must be received for the transaction not to revert. |
| amountREEFMin  | `uint`    | The minimum amount of REEF that must be received for the transaction not to revert.   |
| to             | `address` | Recipient of the underlying assets.                                                  |
| deadline       | `uint`    | Unix timestamp after which the transaction will revert.                              |
|                |           |                                                                                      |
| amountToken    | `uint`    | The amount of token received.                                                        |
| amountREEF     | `uint`    | The amount of REEF received.                                                          |

## removeLiquidityWithPermit

```solidity
function removeLiquidityWithPermit(
  address tokenA,
  address tokenB,
  uint liquidity,
  uint amountAMin,
  uint amountBMin,
  address to,
  uint deadline,
  bool approveMax, uint8 v, bytes32 r, bytes32 s
) external returns (uint amountA, uint amountB);
```

Removes liquidity from an ERC-20⇄ERC-20 pool without pre-approval, thanks to [permit](pair-ERC-20#permit).

| Name       | Type      |                                                                                       |
| :--------- | :-------- | :------------------------------------------------------------------------------------ |
| tokenA     | `address` | A pool token.                                                                         |
| tokenB     | `address` | A pool token.                                                                         |
| liquidity  | `uint`    | The amount of liquidity tokens to remove.                                             |
| amountAMin | `uint`    | The minimum amount of tokenA that must be received for the transaction not to revert. |
| amountBMin | `uint`    | The minimum amount of tokenB that must be received for the transaction not to revert. |
| to         | `address` | Recipient of the underlying assets.                                                   |
| deadline   | `uint`    | Unix timestamp after which the transaction will revert.                               |
| approveMax | `bool`    | Whether or not the approval amount in the signature is for liquidity or `uint(-1)`.   |
| v          | `uint8`   | The v component of the permit signature.                                              |
| r          | `bytes32` | The r component of the permit signature.                                              |
| s          | `bytes32` | The s component of the permit signature.                                              |
|            |           |                                                                                       |
| amountA    | `uint`    | The amount of tokenA received.                                                        |
| amountB    | `uint`    | The amount of tokenB received.                                                        |

## removeLiquidityREEFWithPermit

```solidity
function removeLiquidityREEFWithPermit(
  address token,
  uint liquidity,
  uint amountTokenMin,
  uint amountREEFMin,
  address to,
  uint deadline,
  bool approveMax, uint8 v, bytes32 r, bytes32 s
) external returns (uint amountToken, uint amountREEF);
```

Removes liquidity from an ERC-20⇄REEF pool and receive REEF without pre-approval, thanks to [permit](pair-ERC-20#permit).

| Name           | Type      |                                                                                      |
| :------------- | :-------- | :----------------------------------------------------------------------------------- |
| token          | `address` | A pool token.                                                                        |
| liquidity      | `uint`    | The amount of liquidity tokens to remove.                                            |
| amountTokenMin | `uint`    | The minimum amount of token that must be received for the transaction not to revert. |
| amountREEFMin  | `uint`    | The minimum amount of REEF that must be received for the transaction not to revert.   |
| to             | `address` | Recipient of the underlying assets.                                                  |
| deadline       | `uint`    | Unix timestamp after which the transaction will revert.                              |
| approveMax     | `bool`    | Whether or not the approval amount in the signature is for liquidity or `uint(-1)`.  |
| v              | `uint8`   | The v component of the permit signature.                                             |
| r              | `bytes32` | The r component of the permit signature.                                             |
| s              | `bytes32` | The s component of the permit signature.                                             |
|                |           |                                                                                      |
| amountToken    | `uint`    | The amount of token received.                                                        |
| amountREEF     | `uint`    | The amount of REEF received.                                                          |

## removeLiquidityREEFSupportingFeeOnTransferTokens

```solidity
function removeLiquidityREEFSupportingFeeOnTransferTokens(
  address token,
  uint liquidity,
  uint amountTokenMin,
  uint amountREEFMin,
  address to,
  uint deadline
) external returns (uint amountREEF);
```

Identical to [removeLiquidityREEF](#removeliquidityreef), but succeeds for tokens that take a fee on transfer.

- `msg.sender` should have already given the router an allowance of at least liquidity on the pool.

| Name           | Type      |                                                                                      |
| :------------- | :-------- | :----------------------------------------------------------------------------------- |
| token          | `address` | A pool token.                                                                        |
| liquidity      | `uint`    | The amount of liquidity tokens to remove.                                            |
| amountTokenMin | `uint`    | The minimum amount of token that must be received for the transaction not to revert. |
| amountREEFMin  | `uint`    | The minimum amount of REEF that must be received for the transaction not to revert.   |
| to             | `address` | Recipient of the underlying assets.                                                  |
| deadline       | `uint`    | Unix timestamp after which the transaction will revert.                              |
|                |           |                                                                                      |
| amountREEF     | `uint`    | The amount of REEF received.                                                          |

## removeLiquidityREEFWithPermitSupportingFeeOnTransferTokens

```solidity
function removeLiquidityREEFWithPermitSupportingFeeOnTransferTokens(
  address token,
  uint liquidity,
  uint amountTokenMin,
  uint amountREEFMin,
  address to,
  uint deadline,
  bool approveMax, uint8 v, bytes32 r, bytes32 s
) external returns (uint amountREEF);
```

Identical to [removeLiquidityREEFWithPermit](#removeliquidityreefwithpermit), but succeeds for tokens that take a fee on transfer.

| Name           | Type      |                                                                                      |
| :------------- | :-------- | :----------------------------------------------------------------------------------- |
| token          | `address` | A pool token.                                                                        |
| liquidity      | `uint`    | The amount of liquidity tokens to remove.                                            |
| amountTokenMin | `uint`    | The minimum amount of token that must be received for the transaction not to revert. |
| amountREEFMin  | `uint`    | The minimum amount of REEF that must be received for the transaction not to revert.   |
| to             | `address` | Recipient of the underlying assets.                                                  |
| deadline       | `uint`    | Unix timestamp after which the transaction will revert.                              |
| approveMax     | `bool`    | Whether or not the approval amount in the signature is for liquidity or `uint(-1)`.  |
| v              | `uint8`   | The v component of the permit signature.                                             |
| r              | `bytes32` | The r component of the permit signature.                                             |
| s              | `bytes32` | The s component of the permit signature.                                             |
|                |           |                                                                                      |
| amountREEF     | `uint`    | The amount of REEF received.                                                          |

## swapExactTokensForTokens

```solidity
function swapExactTokensForTokens(
  uint amountIn,
  uint amountOutMin,
  address[] calldata path,
  address to,
  uint deadline
) external returns (uint[] memory amounts);
```

Swaps an exact amount of input tokens for as many output tokens as possible, along the route determined by the path. The first element of path is the input token, the last is the output token, and any intermediate elements represent intermediate pairs to trade through (if, for example, a direct pair does not exist).

- `msg.sender` should have already given the router an allowance of at least amountIn on the input token.

| Name         | Type                 |                                                                                                                                      |
| :----------- | :------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| amountIn     | `uint`               | The amount of input tokens to send.                                                                                                  |
| amountOutMin | `uint`               | The minimum amount of output tokens that must be received for the transaction not to revert.                                         |
| path         | `address[] calldata` | An array of token addresses. `path.length` must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity. |
| to           | `address`            | Recipient of the output tokens.                                                                                                      |
| deadline     | `uint`               | Unix timestamp after which the transaction will revert.                                                                              |
|              |                      |                                                                                                                                      |
| amounts      | `uint[] memory`      | The input token amount and all subsequent output token amounts.                                                                      |

## swapTokensForExactTokens

```solidity
function swapTokensForExactTokens(
  uint amountOut,
  uint amountInMax,
  address[] calldata path,
  address to,
  uint deadline
) external returns (uint[] memory amounts);
```

Receive an exact amount of output tokens for as few input tokens as possible, along the route determined by the path. The first element of path is the input token, the last is the output token, and any intermediate elements represent intermediate tokens to trade through (if, for example, a direct pair does not exist).

- `msg.sender` should have already given the router an allowance of at least amountInMax on the input token.

| Name        | Type                 |                                                                                                                                      |
| :---------- | :------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| amountOut   | `uint`               | The amount of output tokens to receive.                                                                                              |
| amountInMax | `uint`               | The maximum amount of input tokens that can be required before the transaction reverts.                                              |
| path        | `address[] calldata` | An array of token addresses. `path.length` must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity. |
| to          | `address`            | Recipient of the output tokens.                                                                                                      |
| deadline    | `uint`               | Unix timestamp after which the transaction will revert.                                                                              |
|             |                      |                                                                                                                                      |
| amounts     | `uint[] memory`      | The input token amount and all subsequent output token amounts.                                                                      |

## swapExactREEFForTokens

```solidity
function swapExactREEFForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline)
  external
  payable
  returns (uint[] memory amounts);
```

Swaps an exact amount of REEF for as many output tokens as possible, along the route determined by the path. The first element of path must be [REEF](#reef), the last is the output token, and any intermediate elements represent intermediate pairs to trade through (if, for example, a direct pair does not exist).

| Name                   | Type                 |                                                                                                                                      |
| :--------------------- | :------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| `msg.value` (amountIn) | `uint`               | The amount of REEF to send.                                                                                                           |
| amountOutMin           | `uint`               | The minimum amount of output tokens that must be received for the transaction not to revert.                                         |
| path                   | `address[] calldata` | An array of token addresses. `path.length` must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity. |
| to                     | `address`            | Recipient of the output tokens.                                                                                                      |
| deadline               | `uint`               | Unix timestamp after which the transaction will revert.                                                                              |
|                        |                      |                                                                                                                                      |
| amounts                | `uint[] memory`      | The input token amount and all subsequent output token amounts.                                                                      |

## swapTokensForExactREEF

```solidity
function swapTokensForExactREEF(uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)
  external
  returns (uint[] memory amounts);
```

Receive an exact amount of REEF for as few input tokens as possible, along the route determined by the path. The first element of path is the input token, the last must be [REEF](#reef), and any intermediate elements represent intermediate pairs to trade through (if, for example, a direct pair does not exist).

- `msg.sender` should have already given the router an allowance of at least amountInMax on the input token.
- If the to address is a smart contract, it must have the ability to receive REEF.

| Name        | Type                 |                                                                                                                                      |
| :---------- | :------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| amountOut   | `uint`               | The amount of REEF to receive.                                                                                                        |
| amountInMax | `uint`               | The maximum amount of input tokens that can be required before the transaction reverts.                                              |
| path        | `address[] calldata` | An array of token addresses. `path.length` must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity. |
| to          | `address`            | Recipient of REEF.                                                                                                                    |
| deadline    | `uint`               | Unix timestamp after which the transaction will revert.                                                                              |
|             |                      |                                                                                                                                      |
| amounts     | `uint[] memory`      | The input token amount and all subsequent output token amounts.                                                                      |

## swapExactTokensForREEF

```solidity
function swapExactTokensForREEF(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)
  external
  returns (uint[] memory amounts);
```

Swaps an exact amount of tokens for as much REEF as possible, along the route determined by the path. The first element of path is the input token, the last must be [REEF](#reef), and any intermediate elements represent intermediate pairs to trade through (if, for example, a direct pair does not exist).

- If the to address is a smart contract, it must have the ability to receive REEF.

| Name         | Type                 |                                                                                                                                      |
| :----------- | :------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| amountIn     | `uint`               | The amount of input tokens to send.                                                                                                  |
| amountOutMin | `uint`               | The minimum amount of output tokens that must be received for the transaction not to revert.                                         |
| path         | `address[] calldata` | An array of token addresses. `path.length` must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity. |
| to           | `address`            | Recipient of the REEF.                                                                                                                |
| deadline     | `uint`               | Unix timestamp after which the transaction will revert.                                                                              |
|              |                      |                                                                                                                                      |
| amounts      | `uint[] memory`      | The input token amount and all subsequent output token amounts.                                                                      |

## swapREEFForExactTokens

```solidity
function swapREEFForExactTokens(uint amountOut, address[] calldata path, address to, uint deadline)
  external
  payable
  returns (uint[] memory amounts);
```

Receive an exact amount of tokens for as little REEF as possible, along the route determined by the path. The first element of path must be [REEF](#reef), the last is the output token and any intermediate elements represent intermediate pairs to trade through (if, for example, a direct pair does not exist).

- Leftover REEF, if any, is returned to `msg.sender`.

| Name                      | Type                 |                                                                                                                                      |
| :------------------------ | :------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| amountOut                 | `uint`               | The amount of tokens to receive.                                                                                                     |
| `msg.value` (amountInMax) | `uint`               | The maximum amount of REEF that can be required before the transaction reverts.                                                       |
| path                      | `address[] calldata` | An array of token addresses. `path.length` must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity. |
| to                        | `address`            | Recipient of the output tokens.                                                                                                      |
| deadline                  | `uint`               | Unix timestamp after which the transaction will revert.                                                                              |
|                           |                      |                                                                                                                                      |
| amounts                   | `uint[] memory`      | The input token amount and all subsequent output token amounts.                                                                      |

## swapExactTokensForTokensSupportingFeeOnTransferTokens

```solidity
function swapExactTokensForTokensSupportingFeeOnTransferTokens(
  uint amountIn,
  uint amountOutMin,
  address[] calldata path,
  address to,
  uint deadline
) external;
```

Identical to [swapExactTokensForTokens](#swapexacttokensfortokens), but succeeds for tokens that take a fee on transfer.

- `msg.sender` should have already given the router an allowance of at least amountIn on the input token.

| Name         | Type                 |                                                                                                                                      |
| :----------- | :------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| amountIn     | `uint`               | The amount of input tokens to send.                                                                                                  |
| amountOutMin | `uint`               | The minimum amount of output tokens that must be received for the transaction not to revert.                                         |
| path         | `address[] calldata` | An array of token addresses. `path.length` must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity. |
| to           | `address`            | Recipient of the output tokens.                                                                                                      |
| deadline     | `uint`               | Unix timestamp after which the transaction will revert.                                                                              |

## swapExactREEFForTokensSupportingFeeOnTransferTokens

```solidity
function swapExactREEFForTokensSupportingFeeOnTransferTokens(
  uint amountOutMin,
  address[] calldata path,
  address to,
  uint deadline
) external payable;
```

Identical to [swapExactREEFForTokens](#swapexactreeffortokens), but succeeds for tokens that take a fee on transfer.

| Name                   | Type                 |                                                                                                                                      |
| :--------------------- | :------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| `msg.value` (amountIn) | `uint`               | The amount of REEF to send.                                                                                                           |
| amountOutMin           | `uint`               | The minimum amount of output tokens that must be received for the transaction not to revert.                                         |
| path                   | `address[] calldata` | An array of token addresses. `path.length` must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity. |
| to                     | `address`            | Recipient of the output tokens.                                                                                                      |
| deadline               | `uint`               | Unix timestamp after which the transaction will revert.                                                                              |

## swapExactTokensForREEFSupportingFeeOnTransferTokens

```solidity
function swapExactTokensForREEFSupportingFeeOnTransferTokens(
  uint amountIn,
  uint amountOutMin,
  address[] calldata path,
  address to,
  uint deadline
) external;
```

Identical to [swapExactTokensForREEF](#swapexacttokensforreef), but succeeds for tokens that take a fee on transfer.

- If the to address is a smart contract, it must have the ability to receive REEF.

| Name         | Type                 |                                                                                                                                      |
| :----------- | :------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| amountIn     | `uint`               | The amount of input tokens to send.                                                                                                  |
| amountOutMin | `uint`               | The minimum amount of output tokens that must be received for the transaction not to revert.                                         |
| path         | `address[] calldata` | An array of token addresses. `path.length` must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity. |
| to           | `address`            | Recipient of the REEF.                                                                                                                |
| deadline     | `uint`               | Unix timestamp after which the transaction will revert.                                                                              |

# Interface

```solidity
import '@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol';
```

```solidity
pragma solidity >=0.6.2;

interface IUniswapV2Router01 {
    function factory() external pure returns (address);
    function REEF() external pure returns (address);

    function addLiquidity(
        address tokenA,
        address tokenB,
        uint amountADesired,
        uint amountBDesired,
        uint amountAMin,
        uint amountBMin,
        address to,
        uint deadline
    ) external returns (uint amountA, uint amountB, uint liquidity);
    function addLiquidityREEF(
        address token,
        uint amountTokenDesired,
        uint amountTokenMin,
        uint amountREEFMin,
        address to,
        uint deadline
    ) external payable returns (uint amountToken, uint amountREEF, uint liquidity);
    function removeLiquidity(
        address tokenA,
        address tokenB,
        uint liquidity,
        uint amountAMin,
        uint amountBMin,
        address to,
        uint deadline
    ) external returns (uint amountA, uint amountB);
    function removeLiquidityREEF(
        address token,
        uint liquidity,
        uint amountTokenMin,
        uint amountREEFMin,
        address to,
        uint deadline
    ) external returns (uint amountToken, uint amountREEF);
    function removeLiquidityWithPermit(
        address tokenA,
        address tokenB,
        uint liquidity,
        uint amountAMin,
        uint amountBMin,
        address to,
        uint deadline,
        bool approveMax, uint8 v, bytes32 r, bytes32 s
    ) external returns (uint amountA, uint amountB);
    function removeLiquidityREEFWithPermit(
        address token,
        uint liquidity,
        uint amountTokenMin,
        uint amountREEFMin,
        address to,
        uint deadline,
        bool approveMax, uint8 v, bytes32 r, bytes32 s
    ) external returns (uint amountToken, uint amountREEF);
    function swapExactTokensForTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);
    function swapTokensForExactTokens(
        uint amountOut,
        uint amountInMax,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);
    function swapExactREEFForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline)
        external
        payable
        returns (uint[] memory amounts);
    function swapTokensForExactREEF(uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)
        external
        returns (uint[] memory amounts);
    function swapExactTokensForREEF(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)
        external
        returns (uint[] memory amounts);
    function swapREEFForExactTokens(uint amountOut, address[] calldata path, address to, uint deadline)
        external
        payable
        returns (uint[] memory amounts);

    function quote(uint amountA, uint reserveA, uint reserveB) external pure returns (uint amountB);
    function getAmountOut(uint amountIn, uint reserveIn, uint reserveOut) external pure returns (uint amountOut);
    function getAmountIn(uint amountOut, uint reserveIn, uint reserveOut) external pure returns (uint amountIn);
    function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts);
    function getAmountsIn(uint amountOut, address[] calldata path) external view returns (uint[] memory amounts);
}

interface IUniswapV2Router02 is IUniswapV2Router01 {
    function removeLiquidityREEFSupportingFeeOnTransferTokens(
        address token,
        uint liquidity,
        uint amountTokenMin,
        uint amountREEFMin,
        address to,
        uint deadline
    ) external returns (uint amountREEF);
    function removeLiquidityREEFWithPermitSupportingFeeOnTransferTokens(
        address token,
        uint liquidity,
        uint amountTokenMin,
        uint amountREEFMin,
        address to,
        uint deadline,
        bool approveMax, uint8 v, bytes32 r, bytes32 s
    ) external returns (uint amountREEF);

    function swapExactTokensForTokensSupportingFeeOnTransferTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external;
    function swapExactREEFForTokensSupportingFeeOnTransferTokens(
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external payable;
    function swapExactTokensForREEFSupportingFeeOnTransferTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external;
}
```

# ABI

```typescript
import IUniswapV2Router02 from '@uniswap/v2-periphery/build/IUniswapV2Router02.json'
```

[https://unpkg.com/@uniswap/v2-periphery@1.1.0-beta.0/build/IUniswapV2Router02.json](https://unpkg.com/@uniswap/v2-periphery@1.1.0-beta.0/build/IUniswapV2Router02.json)
