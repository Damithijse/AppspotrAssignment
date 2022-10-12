import  React,{Component} from 'react';
import {View, Text, BackHandler, Alert} from 'react-native';
import {connect} from 'react-redux';
import style from '../styles/ViewListScreenStyles';
class ViewListDataScreen extends Component {
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
    render(){
        return(
            <View style={style.container}>
                <View style={style.mainContainer}>
                    <View style={style.topicView}>
                        <Text style={style.topicTxt}>
                            TO-DO LIST
                        </Text>
                    </View>
                </View>
                <View style={style.secondContainer}>
                    <View style={style.viewContainer}>
                        <View style={style.mainView}>
                            <Text style={style.subTxt}>Task Name</Text>
                            <View style={style.textInputStyle}
                            >
                                <Text style={style.normalTxt}>
                                    {this.props.selectedItem.taskName}
                                </Text>
                            </View>
                        </View>
                        <View style={style.mainView}>
                            <Text style={style.subTxt}>Task Category</Text>
                            <View style={style.textInputStyle}
                            >
                                <Text style={style.normalTxt}>
                                    {this.props.selectedItem.categoriesId === 1 ?
                                        'Business' : 'Personal'}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedItem: state.home.selectedItem,
    };
};

export default connect(
    mapStateToProps,
    {},
)(ViewListDataScreen);
