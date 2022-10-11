import  React,{Component} from 'react';
import { View, Image, Alert, Platform} from 'react-native';
import {connect} from 'react-redux';

// ------------import logo img -------------------
const logo = require('../assests/img/newLogo.png');

class SplashScreen extends Component {
    componentDidMount(){
        //this.CheckConnectivity();
        setTimeout( () => {
           this.props.navigation.navigate('Home');
        },1500);
    }
    CheckConnectivity = () => {
        // For Android devices
        if (Platform.OS === "android") {
            NetInfo.isConnected.fetch().then(isConnected => {
                if (isConnected) {
                    Alert.alert("You are online!");
                } else {
                    Alert.alert("You are offline!");
                }
            });
        } else {
            // For iOS devices
            NetInfo.isConnected.addEventListener(
                "connectionChange",
                this.handleFirstConnectivityChange
            );
        }
    };

    handleFirstConnectivityChange = isConnected => {
        NetInfo.isConnected.removeEventListener(
            "connectionChange",
            this.handleFirstConnectivityChange
        );

        if (isConnected === false) {
            Alert.alert("You are offline!");
        } else {
            Alert.alert("You are online!");
        }
    };

    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0D043B'}}>
                <Image source={logo} style={{ width: '55%', height: '35%' }} />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        score: state.home.score,
    };
};

export default connect(
    mapStateToProps,
    {},
)(SplashScreen);
