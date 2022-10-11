import  React,{Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Image,
    Alert,
    BackHandler
} from 'react-native';
import {connect} from 'react-redux';
import style from '../styles/HomeScreenStyles';
import ModalDropdown from 'react-native-modal-dropdown';
import {
    searchItems,
    filterItems,
    setSelectedItem
} from '../actions/HomescreenActions';

const search = require('../assests/img/icons8-search-90.png');
const view = require('../assests/img/icons8-view-96.png');
const remove = require('../assests/img/icons8-delete-90.png');
const filter = require('../assests/img/icons8-filter-64.png');
class SearchScreen extends Component {
    componentDidMount(){
        BackHandler.addEventListener(
            'hardwareBackPress',
            this.backAction,
        );
    }
    componentWillUnmount() {
        BackHandler.removeEventListener(
            'hardwareBackPress',
            this.backAction,
        );
    }
    backAction = () => {
        this.props.navigation.pop();
        return true;
    };
    state = {
        filter: false
    };
    render(){
        return(
            <View style={style.container}>
                <View style={style.mainView} >
                    <View style={style.mainViewStyles}>
                        <View style={style.topicView}>
                            <Text style={style.topicTxt}>
                                TO - DO LIST
                            </Text>
                        </View>
                        <View style={style.searchView}>
                            <View style={style.searchSubView}>
                                <Image source={search} style={style.icons} />
                                <TextInput
                                    placeholder={'Search..'}
                                    placeholderTextColor={'gray'}
                                    onChangeText={(text) => {
                                        this.setState({
                                            filter: false
                                        });
                                        this.props.searchItems(text);
                                    }}
                                    style={style.searchTxt1}/>
                            </View>
                            <TouchableOpacity onPress={()=>{
                                this.setState({
                                    filter: !this.state.filter
                                })
                            }}>
                                <Image source={filter} style={style.icons} />
                            </TouchableOpacity>

                        </View>
                    </View>
                    {this.state.filter ? (
                        <View style={{ width: '90%', height: 'auto', justifyContent: 'center', paddingTop: 10}}>
                            <Text
                                style={style.taskTxt}
                            >
                                Filter your Task with Categorize
                            </Text>
                                <ModalDropdown
                                    dropdownStyle={style.dropdownStyle}
                                    textStyle={[style.textStyle,{color: 'black'}]}
                                    defaultTextStyle={[style.textStyle,{color: 'gray'}]}
                                    dropdownTextStyle={[style.textStyle,{color: 'black'} ]}
                                    onRequestClose={() => {
                                        this.props.getListOfData();
                                    }}
                                    onSelect={(select)=>{
                                        console.log(select);
                                        if(select === 0){
                                            this.props.filterItems(1);
                                        }else if (select === 1){
                                            this.props.filterItems(2);
                                        }
                                    }}
                                    style={style.mainDropDownStyle}
                                    options={['Business', 'Personal']}/>

                            <View style={{width: '90%', height: 70, justifyContent: 'center',}}>
                                <Text style={{fontSize: 17,
                                    fontFamily: 'sans-serif-medium',}}>Your List</Text>
                            </View>

                        </View>
                    ): (
                        <View style={{width: '90%', height: 100, justifyContent: 'center',}}>
                            <Text style={{fontSize: 17,
                                fontFamily: 'sans-serif-medium',}}>Your List</Text>
                        </View>
                    )}


                </View>
                <View style={{flex: this.state.filter ? 3 : 4, width: '100%', alignItems: 'center'}}>
                    <ScrollView>
                        {this.props.searchList.map((item) => {
                            return (
                                // ----------------------list of data---------------------------
                                <View
                                    style={[style.subContainer,{ borderColor: item.categoriesId === 1 ? '#BC1EDD' : '#2F74E0'}]}
                                >
                                    <View style={style.textView}>
                                        <Text numberOfLines={1} style={style.listTxt}>
                                            {item.taskName}
                                        </Text>
                                    </View>
                                    <View style={style.buttonView}>
                                        <Text>{item.categoriesId === 1 ? 'Business' : 'Personal'}</Text>
                                        <View style={style.sub_buttonView2}>
                                            <TouchableOpacity
                                                onPress={()=>{
                                                    this.props.setSelectedItem(item);
                                                    this.props.navigation.navigate('View');
                                                }}
                                                style={[style.buttons,{ backgroundColor: '#19BF19'}]}>
                                                <Image source={view} style={style.img} />
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                onPress={()=>{
                                                    Alert.alert(
                                                        'Delete',
                                                        'Would you like to delete this item?',
                                                        [
                                                            {
                                                                text: 'Cancel',
                                                                onPress: () => {},
                                                                style: 'cancel',
                                                            },
                                                            {text: 'OK', onPress: () => {this.props.deleteData(item.DocID)}},
                                                        ]
                                                    );
                                                }}
                                                style={[style.buttons,{ backgroundColor: '#C22126'}]}>
                                                <Image source={remove} style={style.img} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            );
                        })}
                    </ScrollView>
                </View>

            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        searchList: state.home.searchList,
    };
};

export default connect(
    mapStateToProps,
    {
        searchItems,
        filterItems,
        setSelectedItem
    },
)(SearchScreen);
