# Images

## Third Party

### Import images in Next.js - next-images

Library: 

+ [next-images](https://github.com/twopluszero/next-images)

Configuration:

```javascript
// next.config.js
const withImages = require('next-images')
module.exports = withImages()

```

### Transform SVGs into React components - svgr

Library:

+ [svgr](https://github.com/gregberge/svgr)

Usage:

+ Generate svg component

  `npx @svgr/cli ./src/assets/icons/clock-icon.svg > ./src/svgrs/clock-icon.js`

+ Use generated svg component

  ```javaScript
  import React from 'react'
  import SvgHome from '../svgrs/home-icon'

  const Foo = () => {
    return (
      // ...
      <SvgHome />
    )
  }
  ```