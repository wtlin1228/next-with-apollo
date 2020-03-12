This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to commit

Use `yarn commit` instead of `git commit` because we use cz-cli to manage our commitments.

## Documents

You can find documents in the `./documents`

+ Development
+ GraphQL
+ Images
+ Polyfill
+ Router
+ Styles

## Convention

Import sequences

```js
// node_modules(ignore comment)
import React from 'react';

// utils

// assets

// actions

// components

// self-defined-components

function Foo() {
  //...
}

export default Foo;
```