import  React,{Component} from 'react';
import { View, Image} from 'react-native';
import {connect} from 'react-redux';
import style from '../styles/ViewListScreenStyles';


// ------------import logo img -------------------
const logo = require('../assests/img/logo.png');

class SplashScreen extends Component {
    componentDidMount(){
        setTimeout( () => {
         this.props.navigation.navigate('Home');
        },1500);
    }

    render(){
        return(
            <View style={style.splashContainer}>
                <Image source={logo} style={style.spalshLogo} />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        list: state.home.list,
    };
};

export default connect(
    mapStateToProps,
    {},
)(SplashScreen);
