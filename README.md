#  IGNwNBproject
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

* Standard compliant React Native App Utilizing [Ignite](https://github.com/infinitered/ignite)

# :heavy_exclamation_mark: Research Notes
**[Notes for this Demo App with Native Base and Chart Component..](./ReactNativeAppResearhNotes.md)**

## ScreenShot Demo
 
<img id="charts" src="https://user-images.githubusercontent.com/30279868/29864749-3a0e7d2c-8da6-11e7-8fd8-f6361c223844.png" height="500"> <img id="drawer" src="https://user-images.githubusercontent.com/30279868/29864748-3a0e4154-8da6-11e7-8358-69934f5bb4a9.png" height="500"> <img id="card" src="https://user-images.githubusercontent.com/30279868/29864747-3a0e2886-8da6-11e7-99b4-50bd387b5e04.png" height="500">

## :arrow_forward: How to Run Example - **IGNwNBproject**
```
cd IGNwNBproject

npm install --save react-native-charts-wrapper

react-native link
```
 * for iOS
    * run `react-native run-ios`
 * for Android
    * Run Genymotion
    * run `react-native run-android`


## :no_entry_sign: Standard Compliant

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
This project adheres to Standard.  Our CI enforces this, so we suggest you enable linting to keep your project compliant during development.

**To Lint on Commit**

This is implemented using [ghooks](https://github.com/gtramontina/ghooks). There is no additional setup needed.

**Bypass Lint**

If you have to bypass lint for a special commit that you will come back and clean (pushing something to a branch etc.) then you can bypass git hooks with adding `--no-verify` to your commit command.

**Understanding Linting Errors**

The linting rules are from JS Standard and React-Standard.  [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).

## :closed_lock_with_key: Secrets

This project uses [react-native-config](https://github.com/luggit/react-native-config) to expose config variables to your javascript code in React Native. You can store API keys
and other sensitive information in a `.env` file:

```
API_URL=https://myapi.com
GOOGLE_MAPS_API_KEY=abcdefgh
```

and access them from React Native like so:

```
import Secrets from 'react-native-config'

Secrets.API_URL  // 'https://myapi.com'
Secrets.GOOGLE_MAPS_API_KEY  // 'abcdefgh'
```

The `.env` file is ignored by git keeping those secrets out of your repo.

