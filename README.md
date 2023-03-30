# Promise until tired

[![semantic-release](https://img.shields.io/badge/semantic-release-e10079.svg?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![ts](https://badgen.net/badge/Built%20With/TypeScript/blue) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Too long unresolved promise is tired and I gonna give up.

This is the promise with timeout.

## Installation

```
yarn add promise-until-tired
```

### Usage

```ts
import newPromiseUntilTired, { TiredFromWaitingPromiseResolveTooLongError } from 'promise-until-tired'

try {
    const value = await newPromiseUntilTired((resolve, reject) => {
        // logic
    }, timeout)
} catch (error) {
    if (error instanceof TiredFromWaitingPromiseResolveTooLongError) {
        // handle timeout logic
    } else {
        // handle other reject logic
    }
}
```
