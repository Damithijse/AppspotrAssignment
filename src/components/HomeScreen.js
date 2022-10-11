import  React,{Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    TextInput,
    BackHandler
} from 'react-native';
import {connect} from 'react-redux';
import Modal from "react-native-modal";
import ModalDropdown from 'react-native-modal-dropdown';
// -----------img-------------------------
const search = require('../assests/img/icons8-search-90.png');
const filter = require('../assests/img/icons8-filter-64.png');
const add = require('../assests/img/add.png');
const close = require('../assests/img/icons8-macos-close-90.png');
const view = require('../assests/img/icons8-view-96.png');
const update = require('../assests/img/icons8-edit-90.png');
const remove = require('../assests/img/icons8-delete-90.png');
const enable = require('../assests/img/icons8-edit-67.png');
//---------------actions---------------------------
import {
    getListOfData,
    addList,
    moduleVisible,
    setSelectedItem,
    deleteData,
    updateData
} from '../actions/HomescreenActions';
//--------------styles------------------------
import style from '../styles/HomeScreenStyles';

class HomeScreen extends Component {
    componentDidMount(){
        BackHandler.addEventListener(
            'hardwareBackPress',
            this.backAction,
        );
        this.props.getListOfData();
    }
    componentWillUnmount() {
        BackHandler.removeEventListener(
            'hardwareBackPress',
            this.backAction,
        );
    }
    backAction = () => {
        Alert.alert("Exit App", "Are you sure you want exit app?", [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
    };
    state = {
        modalVisible: false,
        taskName: '',
        cid: null,
        addOrUpdate: '',
        selectedCategorie: null,
        enableEdit: false,
        enableEditCate: false,
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
                        <TouchableOpacity onPress={()=>{
                            this.props.navigation.navigate('Search');
                        }} style={style.searchView}>
                            <View style={style.searchSubView}>
                                <Image source={search} style={style.icons} />
                                <Text style={style.searchTxt}>Search...</Text>
                            </View>
                            <Image source={filter} style={style.icons} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={()=>{
                            this.setState({
                                addOrUpdate: 'ADD'
                            });
                            this.props.moduleVisible(true);
                        }}
                        style={style.addView}>
                        <Text
                            allowFontScaling={false}
                            style={style.addTxt}>
                                Add a new Task
                        </Text>
                        <Image
                            source={add}
                            style={[style.icons,{marginLeft: 10}]} />
                    </TouchableOpacity>
                </View>
                <View style={style.listView} >
                    <View style={{width: '90%'}}>
                        <Text
                            allowFontScaling={false}
                            style={style.listTopicTxt}>
                                Your List
                        </Text>
                    </View>
                    <ScrollView>
                        {this.props.list.map((item) => {
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
                                        <View style={style.sub_buttonView}>
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
                                                    this.props.setSelectedItem(item);
                                                    this.setState({
                                                        addOrUpdate: 'UPDATE',
                                                        cid: item.DocID,
                                                        enableEdit: false,
                                                        taskName: item.taskName
                                                    });
                                                    this.props.moduleVisible(true);
                                                }}
                                                style={[style.buttons, {backgroundColor: '#2A37AA'}]}>
                                                <Image source={update} style={style.img} />
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
                {/*----------------------add new task modal---------------------*/}
                <Modal
                    isVisible={this.props.visible}
                    backdropColor="rgba(100,100,100, 0.8)"
                    animationInTiming={500}
                    style={{
                        justifyContent: 'flex-end',
                        margin: 0,
                    }}
                    animationOutTiming={500}
                    backdropTransitionInTiming={1000}
                    backdropTransitionOutTiming={1000}
                >
                    <View style={style.modalView}>
                             <View style={style.modalSubView}>
                                <View style={style.modalTopicView}>
                                    {this.state.addOrUpdate === 'ADD' ? (
                                        <Text
                                            allowFontScaling={false}
                                            style={style.modalTopicTxt}>
                                            Add your task
                                        </Text>
                                    ) : (
                                        <Text
                                            allowFontScaling={false}
                                            style={style.modalTopicTxt}>
                                            Update your task
                                        </Text>
                                    )}

                                    <TouchableOpacity
                                        onPress={()=>{
                                            this.setState({
                                                enableEdit: false
                                            });
                                            this.props.moduleVisible(false);
                                        }}>
                                        <Image
                                            source={close}
                                            style={[style.icons,{marginLeft: 10}]}
                                        />
                                    </TouchableOpacity>
                                </View>
                                 {this.state.addOrUpdate === 'ADD' ? (
                                     // -------------------data add------------------
                                     <View style={style.textInputView}>
                                         <View style={{ paddingBottom: 10}}>
                                             <Text
                                                 style={style.taskTxt}
                                             >
                                                 Task Name
                                             </Text>
                                                 <TextInput
                                                     placeholder={'Enter your Task name '}
                                                     placeholderTextColor={'gray'}
                                                     style={style.textInput}
                                                     onChangeText={(text) => {
                                                         this.setState({
                                                             taskName: text
                                                         })
                                                     }}
                                                 />

                                         </View>
                                         <View style={{ paddingBottom: 20}}>
                                             <Text
                                                 style={style.taskTxt}
                                             >
                                                 Select your Task Categorize
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
                                                         this.setState({
                                                             selectedCategorie: 1,
                                                         })
                                                     }else if (select === 1){
                                                         this.setState({
                                                             selectedCategorie: 2,
                                                         })
                                                     }
                                                 }}
                                                 style={style.mainDropDownStyle}
                                                 options={['Business', 'Personal']}/>

                                         </View>
                                         <TouchableOpacity
                                             onPress={()=>{
                                                 this.props.addList(this.state.taskName,
                                                     this.state.selectedCategorie,
                                                     this.props.list.length);
                                             }}
                                             style={style.addButton}>
                                             <Text style={style.addButtonTxt}>Add</Text>
                                         </TouchableOpacity>
                                     </View>
                                 ): (
                                     // --------------------update-------------------------
                                     <View style={style.textInputView}>
                                         <View style={{ paddingBottom: 10}}>
                                             <Text
                                                 style={style.taskTxt}
                                             >
                                                 Task Name
                                             </Text>
                                             {this.state.enableEdit === false ? (
                                                 <View style={style.updateText}>
                                                     <Text numberOfLines={1} style={[style.textStyle,{color: 'black', width: '80%'}]}>
                                                         {this.props.selectedItem.taskName}
                                                     </Text>
                                                     <TouchableOpacity onPress={()=>{
                                                         this.setState({
                                                             enableEdit: true
                                                         })
                                                     }}>
                                                         <Image source={enable} style={style.updateImg} />
                                                     </TouchableOpacity>
                                                 </View>
                                             ) : (
                                                 <TextInput
                                                     placeholder={'Enter your Task name '}
                                                     placeholderTextColor={'gray'}
                                                     autoFocus={this.state.enableEdit}
                                                     value={this.state.taskName}
                                                     style={style.textInput}
                                                     onChangeText={(text) => {
                                                         this.setState({
                                                             taskName: text
                                                         })
                                                     }}
                                                 />
                                             )}

                                         </View>
                                         <View style={{ paddingBottom: 20}}>
                                             <Text
                                                 style={style.taskTxt}
                                             >
                                                 Select your Task Categorize
                                             </Text>
                                             {this.state.enableEditCate === false ? (
                                                 <View style={style.updateText}>
                                                     <Text style={[style.textStyle,{color: 'black'}]}>
                                                         {this.props.selectedItem.categoriesId === 1 ? 'Business' : 'Personal'}
                                                     </Text>
                                                     <TouchableOpacity onPress={()=>{
                                                         this.setState({
                                                             enableEditCate: true
                                                         })
                                                     }}>
                                                         <Image source={enable} style={style.updateImg} />
                                                     </TouchableOpacity>
                                                 </View>
                                             ) : (
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
                                                             this.setState({
                                                                 selectedCategorie: 1,
                                                             })
                                                         }else if (select === 1){
                                                             this.setState({
                                                                 selectedCategorie: 2,
                                                             })
                                                         }
                                                     }}
                                                     style={style.mainDropDownStyle}
                                                     options={['Business', 'Personal']}/>
                                             )}


                                         </View>
                                         <TouchableOpacity
                                             onPress={()=>{
                                                 this.props.updateData(this.state.cid,this.state.taskName,
                                                     this.state.selectedCategorie);
                                             }}
                                             style={style.addButton}>
                                             <Text style={style.addButtonTxt}>Update</Text>
                                         </TouchableOpacity>
                                     </View>
                                 )}
                            </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        visible: state.home.visible,
        list: state.home.list,
        selectedItem: state.home.selectedItem
    };
};

export default connect(
    mapStateToProps,
    {
        getListOfData,
        moduleVisible,
        addList,
        setSelectedItem,
        deleteData,
        updateData,
    },
)(HomeScreen);
