/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, View, StyleSheet, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Toast from 'react-native-simple-toast';

import {Colors, Images} from './app/resource/';

import OFOScreen from './app/screens/ofo/OFOScreen';
import TwitterScreen from './app/screens/twitter/TwitterScreen';
import QQBrowserScreen from "./app/screens/qqbrowser/QQBrowserScreen";
import WeChatScreen from "./app/screens/wechat/WeChatScreen";
import DefaultScreen from "./app/screens/default/DefaultScreen";

class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this._navigateToScreen = this._navigateToScreen.bind(this);
    }

    render() {
        return (
            <View style={styles.view_container}>
                <View style={styles.view_avatar_name_container}>
                    <View style={styles.view_avatar_container}>
                        <Image
                            style={styles.image_avatar}
                            source={Images.ic_avatar}
                        />
                    </View>
                    <Text
                        style={{fontSize: 18, color: 'black'}}
                    >RedLi</Text>

                </View>

                <TouchableWithoutFeedback onPress={this._navigateToWeChat.bind(this)}>
                    <View>
                        <Text
                            style={[styles.text_item, {backgroundColor: Colors.green_00C853}]}

                        >WeChat</Text>
                    </View>
                </TouchableWithoutFeedback>


                <TouchableWithoutFeedback onPress={this._navigateToTwitter.bind(this)}>
                    <View>
                        <Text
                            style={[styles.text_item, {backgroundColor: Colors.red_E53935}]}
                        >Twitter</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this._navigateToQQBrowser.bind(this)}>
                    <View>
                        <Text
                            style={[styles.text_item, {backgroundColor: Colors.blue_009688}]}
                        >QQBrowser</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this._navigateToOFO.bind(this)}>
                    <View>
                        <Text
                            style={[styles.text_item, {backgroundColor: Colors.yellow_ffc962}]}
                        >OFO</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this._navigatorToDefault.bind(this)}>
                    <View>
                        <Text
                            style={[styles.text_item, {backgroundColor: Colors.blue_00B0FF}]}
                        >Default</Text>
                    </View>
                </TouchableWithoutFeedback>

                <Text
                    style={{
                        position: 'absolute',
                        bottom: 8,
                        right: 8,
                        color: '#3197ff',
                        textDecorationLine: 'underline'
                    }}
                >http://www.marno.cn</Text>
            </View>
        );
    }

    _navigateToScreen(screen) {
        Toast.show(screen)
        const {navigate} = this.props.navigation;
        navigate(screen);
    }

    _navigateToOFO() {
        this._navigateToScreen('OFO')
    }

    _navigateToTwitter() {
        this._navigateToScreen('Twitter')
    }

    _navigateToWeChat() {
        this._navigateToScreen('WeChat')
    }

    _navigateToQQBrowser() {
        this._navigateToScreen('QQBrowser')
    }
    _navigatorToDefault(){
        this._navigateToScreen('Default1')
    }


}

const styles = StyleSheet.create({
    view_container: {
        flex: 1,
    },
    view_avatar_container: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 12
    },
    view_avatar_name_container: {
        marginBottom: 32,
        marginTop: 32,
        alignItems: 'center'
    },
    image_avatar: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
        borderRadius: 200,
    },
    text_item: {
        color: 'white',
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 8,
        textAlign: 'center',
        padding: 16,
        borderRadius: 8,
        fontSize: 18,
    }
})


const App = StackNavigator(
    {
        Home: {screen: HomeScreen,},
        WeChat: {screen: WeChatScreen},
        Twitter: {screen: TwitterScreen},
        OFO: {screen: OFOScreen},
        QQBrowser: {screen: QQBrowserScreen},
        Default1:{screen:DefaultScreen},
    },
    {
        headerMode: 'none',
    }
);

export default App;