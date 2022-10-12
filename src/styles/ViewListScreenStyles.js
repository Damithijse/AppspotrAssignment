import {Dimensions, StatusBar} from 'react-native';
const React = require('react-native');
const { width: WIDTH, } = Dimensions.get('window');
const { StyleSheet } = React;

module.exports = StyleSheet.create({
    container: {
        flex: 1
    },
    mainContainer:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: '#0D043B'
    },
    topicView:{
        marginTop:  StatusBar.currentHeight + 10,
        width: '100%',
        alignItems: 'center'
    },
    topicTxt:{
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    secondContainer: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewContainer: {
        width: '90%',
        height: '80%'
    },
    subTxt: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textInputStyle: {
        marginTop: 10,
        fontSize: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#C6C6C6',
        shadowColor: '#171717',
        elevation: 3,
        backgroundColor: '#ffffff',
        paddingHorizontal: '4%',
        borderRadius: 9,
        width: '100%',
        height: 60,
    },
    normalTxt:{
        fontSize: 17
    },
    mainView: {
        paddingBottom: 20
    },
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    spalshLogo:{
        width: '60%',
        height: '40%'
    }



});
