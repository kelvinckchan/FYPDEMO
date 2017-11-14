# React Native
### Create New App methods
- CRNA project(with expo): 
```
create-react-native-app AwesomeProject
```
- React Native CLI:
```
react-native init AwesomeProject	
```

## Build App with Native Base boilerplate and Charts Component
**1. [Set up React Native](https://facebook.github.io/react-native/docs/getting-started.html) and SDK**


**2. Create App using [Ignite cli](https://github.com/infinitered/ignite):**
 ```
 npm install -g ignite-cli
 ignite new AppName --boilerplate native-base-boilerplate --react-native-version 0.47
 cd AppName 
 ```


**3. Install Chart Component - [react-native-charts-wrapper](https://github.com/wuxudong/react-native-charts-wrapper)**
 


**4. Update Denpendency:**

Edit Denpendency version in ```./package.json```
 ```
 "dependencies": {
    "apisauce": "^0.10.0",
    "format-json": "^1.0.3",
    "immutability-helper": "^2.3.1",
    "lodash": "^4.17.2",
    "native-base": "2.3.0",
    "querystringify": "0.0.4",
    "ramda": "^0.23.0",
    "react": "16.0.0-alpha.12",
    "react-addons-update": "^15.6.0",
    "react-native": "^0.47",
    "react-native-charts-wrapper": "^0.2.10",
    "react-native-config": "^0.6.0",
    "react-native-device-info": "^0.11",
    "react-native-drawer": "^2.3.0",
    "react-native-i18n": "1.0.0",
    "react-native-router-flux": "3.38.0",
    "react-native-vector-icons": "4.3.0",
    "react-redux": "^5.0.2",
    "redux": "^3.6.0",
    "redux-persist": "^4.1.0",
    "redux-saga": "^0.14.3",
    "reduxsauce": "0.4.1",
    "seamless-immutable": "^7.0.1"
  }
 ```
 ```
 npm install 
 ```
 
 
**5. Run app on Android Device:**
 ```
 react-native run-android
 ```

### Component: 
* Boilerplate CLI:  [Ignite](https://github.com/infinitered/ignite)
* Style:  [native-base](https://nativebase.io/)
* Chart Component:  [react-native-charts-wrapper](https://github.com/wuxudong/react-native-charts-wrapper)


### Other Tools:
* [Android Emulator - Genymotion](https://www.genymotion.com/)
* [Expo](https://expo.io/)

* [Atom](https://atom.io/)
* [Nuclide](https://nuclide.io/)
* [FLOW](https://flow.org/) - static type checking 

### Other Components:

* Responsive UI: [react-native-responsive-ui](https://github.com/wcandillon/react-native-responsive-ui)
* Form: 
  * [redux-form](https://github.com/erikras/redux-form)
  * [tcomb-form-native](https://github.com/gcanti/tcomb-form-native)

### Other Reference:
* [Awesome React Native](http://www.awesome-react-native.com/#backend)
* [JS Coach](https://js.coach/react-native?sort=popular)
