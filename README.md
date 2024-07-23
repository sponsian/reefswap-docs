# ReefSwap Documentation

This web application contains all documentation for ReefSwap products. It is built using Gitbook.


# Project Layout

### ReefSwap documentation is broken down into four sections:
- Concepts - General ReefSwap information or concepts useful for using ReefSwap products, such as *Liquidity* and *Fees*
- Contracts - ReefSwap smart contracts such as the V3 Contracts or *Permit2*
- SDKs - ReefSwap integrations such as the *v3-sdk* and the *Swap Widget*
- APIs - The ReefSwap APIs such the *Subgraph API*

### Each item in a section should include the following:
- *Overview*
- *Guides*
- *Technical Reference*

## Adding Documentation

### Overview
A product overview should address points such as:

- What are the high level components of the product?
- What what is the high level functionality the product offers?
- Where does the source code of the product live?
- Where does the code artifact live (eg *npm*) and how does someone integrate with it?

A good example is the [Smart Contracts](./docs/contracts/v2/overview.md).

### Guides
> Guides should follow the **Principles of a Good Guide**:
- A guide corresponds to a reusable piece of code that demonstrates a single concept in the ReefSwap ecosystem.
- Guides have three parts:
    1. An **introduction** that explains the concept that the piece of code implements and a summary of what the guide will cover and result in.
    2. A step-by-step **walkthrough** of each line of the example code 
    3. An **output** or end state that users can test against what they’re seeing to know if they implemented correctly
- Guides do not show source code snippets that should not be included in the example (IE using snippets from a source contract to explain how to integrate with it). If a guide needs to reference an external piece of code it should link to the source code or technical reference.
- We keep Links and References ***only at the bottom*** of pages and reference them using footnotes to **keep distractions at a minimum**
- Our goal is to have the developer build something within **10 minutes per guide** but also provide the option for a deep dive by providing references to extra content.
- Guides should end with a **transition** to the next one, recommendations and real world projects examples
- Each guides should refer to a code example in our example-repo
- Guides should be standalone pieces
- Use the least dependencies as possible
- Input changes (eg address, tokens, amounts) should be in the code

By implementing these consistent principles ReefSwap will have docs that are easy to understand and produce reusable code for its community.


A good example are the [SDK Guides](./docs/sdk/v2/guides/01-quick-start.md).

### Technical References
This should contain the technical reference for the exported interfaces. A good example is the [V2 SDK](./docs/sdk/v2/reference/overview).
These files can be created using the [guides below](#how-to-create-a-technical-reference).

# Contributing to ReefSwap Docs

## Guidelines
Contributing to the docs site is a great way to get involved in the dev community and help other developers along the way! Check out our guidelines [here](./CONTRIBUTING.md).

## Checklist for adding a new product

- Did I pick the right section for the product? 
- Did I create the product folder?
- Did I introduce any new concepts? If so add under */concepts/<category_name><product_name>*
- Did I include an Overview of the product under *<category_name>/<product_name>/overview* ?
- Did I include Guides of the product under *<category_name>/<product_name>/guides* ?
- Did I include Technical Reference of the product under *<category_name>/<product_name>/reference* ?
- Did I give a descriptive name/id to each document? This is important because that shows up in the URL
- Did I open a PR using the the [contributing](./CONTRIBUTING.md) guidelines?

## Checklist example

Let's walk through an example by considering the *Permit2* smart contract:
-  Did I pick the right section for the product? 
    - In this case, [contracts](./docs/contracts/) 
- Did I create the product folder? 
    - In this case, [yes](./docs/contracts/permit2/)
- Did I introduce any new concepts? 
    - No
- Did I include an Overview of the product under */contracts/permit2/overview* ?
    - Yes, I did add them [here](./docs/contracts/permit2/overview.md)
- Did I include Guides of the product under *contracts/permit2/guides* ?
    - No, they should be added [here](./docs/contracts/permit2/guides)
- Did I include Technical Reference of the product under *contracts/permit2/reference* ?
    - Yes I added them [here](./docs/contracts/permit2/reference)
- Did I open a PR using the the [Contributing](./CONTRIBUTING.md) guidelines?
    - Yes