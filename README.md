# hex-fallback-avatar

> A hexagonal fallback avatar component for users without profile photos. Users without avatars or profile photos will dynamically have the first letters of their names, capitalized, and set as their default avatar(s) with unique back ground color(s). Additionally, it's a hex-shaped feature.

[![NPM](https://img.shields.io/npm/v/hex-fallback-avatar.svg)](https://www.npmjs.com/package/hex-fallback-avatar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Prerequisites
- node
- npm
- ReactJS (version 16 or higher)

## Install

```bash
npm install --save fallback-avatar-hex
```

## Usage

```jsx
import React, { Component } from 'react';

import HexFallbackAvatar from 'fallback-avatar-hex';

class Example extends Component {
  render() {
    return <HexFallbackAvatar text='string' size={4}/>
  }
}
```
> NB: The value of `text` and `size` props should be any string (like firstname or lastname or any string at all) and a number (like 4 or 5.3, any number other than zero) respectively.

## License

MIT © [https://github.com/jamezjaz](https://github.com/https://github.com/jamezjaz)
