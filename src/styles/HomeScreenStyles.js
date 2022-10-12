import {Dimensions, StatusBar} from 'react-native';
const React = require('react-native');
const { width: WIDTH, } = Dimensions.get('window');
const { StyleSheet } = React;

module.exports = StyleSheet.create({
    container: {
        flex: 1
    },
    mainView:{
        flex: 2,
        alignItems: 'center'
    },
    mainViewStyles:{
        backgroundColor: '#0D043B',
        width: '100%',
        height: '80%',
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    topicTxt:{
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    searchView: {
        marginTop: 20,
        width: WIDTH - 40,
        backgroundColor: '#fff',
        height: 60,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        shadowColor: '#171717',
        elevation: 3,
    },
    searchSubContainer: {
        width: '100%',
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    filterView: {
        width: '90%',
        height: '40%',
        justifyContent: 'center',
        paddingTop: 10
    },
    searchSubView:{
        flexDirection: 'row',
        width: '60%',
        alignItems: 'center'
    },
    icons: {
        width: 30,
        height: 30
    },
    searchTxt1: {
        width: '80%',
        fontSize: 18,
        color: 'black',
        marginLeft: 10
    },
    searchTxt:{
        fontSize: 18,
        color: 'gray',
        marginLeft: 10
    },
    addView: {
        flexDirection: 'row',
        height: '20%',
        width: '90%',
        alignItems: 'center',
    },
    addTxt: {
        fontSize: 17,
        fontFamily: 'sans-serif-medium'
    },
    listView: {
        flex: 4,
        alignItems: 'center'
    },
    listTopicTxt:{
        fontSize: 17,
        fontFamily: 'sans-serif-medium',
        color: 'gray'
    },
    yourListView:{
        width: '90%',
        height: 70,
        justifyContent: 'center',
    },
    yourListView2:{
        width: '90%',
        height: 100,
        justifyContent: 'center',
    },
    nodataView:{
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    noDataTxt: {
      color: 'gray',
    },
    yourListTxt: {
        fontSize: 17,
        fontFamily: 'sans-serif-medium',
    },

    topicView:{
        marginTop:  StatusBar.currentHeight + 10,
        width: '100%',
        alignItems: 'center'
    },
    subContainer: {
        borderWidth: 2,
        marginTop: 20,
        width: WIDTH - 40,
        backgroundColor: '#fff',
        height: 100,
        borderRadius: 10,
        shadowColor: '#171717',
        elevation: 3,
        padding: 20,
    },
    textView: {
        width: '100%',
        flexDirection: 'row',
        paddingBottom: 10
    },
    listTxt: {
        fontSize: 16
    },
    modalView: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'rgba(0, 0, 0, 0.1)'
    },
    modalSubView: {
        width: '100%',
        alignItems: 'center',
        height: 300
    },
    modalTopicView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20,
        width: '100%'
    },
    modalTopicTxt: {
        fontSize: 16,
        fontFamily: 'sans-serif-medium'
    },
    textInputView:{
        width: '90%'
    },
    updateIcon: {
        backgroundColor: 'gray',
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    updateText:{
        marginTop: 10,
        fontSize: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#C6C6C6',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: '4%',
        borderRadius: 9,
        width: '100%',
        height: 50,
    },
    textInput: {
        marginTop: 10,
        fontSize: 15,
        borderColor: '#C6C6C6',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: '4%',
        borderRadius: 9,
        width: '100%',
        height: 50,
    },
    taskTxt: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    dropdownStyle: {
        borderWidth: 1,
        borderRadius: 9,
        width: '70%',
        height: 100
    },
    textStyle:{
        fontSize: 16,
    },
    mainDropDownStyle:{
        marginTop: 10,
        justifyContent: 'center',
        borderColor: '#C6C6C6',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: '4%',
        borderRadius: 9,
        width: '100%',
        height: 50
    },
    addButton:{
        width: '100%',
        height: 50,
        backgroundColor: '#2A37AA',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addButtonTxt:{
        fontSize: 18,
        fontFamily: 'sans-serif-medium',
        color: 'white'
    },
    buttonView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sub_buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    sub_buttonView2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '40%'
    },
    buttons: {
        width: 55,
        height: 35,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    updateImg:{
        width: 35,
        height: 35
    },
    img: {
        width: 25,
        height: 25
    },
});
