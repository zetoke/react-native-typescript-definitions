/*

Note: This must be compiled with the target set to ES6

The content of index.io.js could be something like

    'use strict';

     import { AppRegistry } from 'react-native'
     import Welcome from './gen/Welcome'

     AppRegistry.registerComponent('MopNative', () => Welcome);


For a list of complete Typescript examples: check https://github.com/bgrieder/RNTSExplorer

 */
///<reference path="../react-native/react-native.d.ts" />
var React = require('react-native');
var react_native_1 = require('react-native');
function testDimensions() {
    var { width, height, scale, fontScale, } = react_native_1.Dimensions.get("window");
    var { width, height, scale, fontScale, } = react_native_1.Dimensions.get("screen");
}
react_native_1.BackAndroid.addEventListener("hardwareBackPress", () => {
});
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
//alternative declaration of styles (inline typings)
const stylesAlt = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    }
});
class Welcome extends React.Component {
    testNativeMethods() {
        // this.setNativeProps({});
        const { rootView } = this.refs;
        rootView.measure((x, y, width, height) => {
        });
    }
    render() {
        return (React.createElement(react_native_1.View, {"ref": "rootView", "style": styles.container}, React.createElement(react_native_1.Text, {"style": styles.welcome}, "Welcome to React Native"), React.createElement(react_native_1.Text, {"style": styles.instructions}, "To get started, edit index.ios.js"), React.createElement(react_native_1.Text, {"style": styles.instructions}, "Press Cmd+R to reload,", '\n', "Cmd+D or shake for dev menu")));
    }
}
exports.default = Welcome;
// App State
function appStateListener(state) {
    console.log('New state: ' + state);
}
function appStateTest() {
    console.log('Current state: ' + react_native_1.AppState.currentState);
    react_native_1.AppState.addEventListener('change', appStateListener);
}
function appStateIOSTest() {
    console.log('Current state: ' + react_native_1.AppStateIOS.currentState);
    react_native_1.AppStateIOS.addEventListener('change', appStateListener);
}
// ViewPagerAndroid
class ViewPagerAndroidTest {
    render() {
        return (React.createElement(react_native_1.ViewPagerAndroid, {"style": { height: 56 }, "initialPage": 0, "keyboardDismissMode": 'on-drag', "onPageScroll": (e) => {
            console.log(`position: ${e.nativeEvent.position}`);
            console.log(`offset: ${e.nativeEvent.offset}`);
        }, "onPageSelected": (e) => {
            console.log(`position: ${e.nativeEvent.position}`);
        }}));
    }
}
exports.ViewPagerAndroidTest = ViewPagerAndroidTest;
//# sourceMappingURL=react-native-tests.js.map