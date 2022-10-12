import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';

import SplashScreen from './src/components/SplashScreen';
import HomeScreen from './src/components/HomeScreen'
import ViewScreen from './src/components/ViewListDataScreen';
import SearchScreen from './src/components/SearchScreen'
import reducer from './src/reducers/main/index';

const Stack = createNativeStackNavigator();
const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));

class App extends React.Component{
    componentDidMount() {
        StatusBar.setBackgroundColor('rgba(0,0,0,0)');
        StatusBar.setBarStyle('light-content');
        StatusBar.setTranslucent(true);
    }
    render(){
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName="Splash"
                          screenOptions={{
                            headerShown: false
                         }}
                    >
                        <Stack.Screen name="Splash" component={SplashScreen} />
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="View" component={ViewScreen} />
                        <Stack.Screen name="Search" component={SearchScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
                <FlashMessage
                    duration={1500}
                    floating={true}
                    position="top"
                    icon="auto"
                    style={{ marginTop: '10%' }}
                />
            </Provider>
        );
    }

}

export default App;
