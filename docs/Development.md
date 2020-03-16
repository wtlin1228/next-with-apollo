# Development

## Third Party

### The commitizen command line utility - cz-cli

Library: 

+ [cz-cli](https://github.com/commitizen/cz-cli)

Configuration:

```json
// package.json
{
  // ...
  "scripts": {
    // ...
    "commit": "npx git-cz"
  },
  // ...
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
}

```

Usage:

`yarn commit`