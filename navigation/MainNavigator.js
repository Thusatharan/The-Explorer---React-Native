import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Platform} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import AddNew from '../screens/AddNew';
import MapScreen from '../screens/MapView';
import Colors from '../constans/Colors';

const MainNavigator = createStackNavigator({
    Home: HomeScreen,
    Details: DetailScreen,
    AddNew: AddNew,
    Map: MapScreen
},
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ?  Colors.primary : '',
            },
            headerTintColor: Platform.OS === 'android' ? "white" : Colors.primary,
        }
    }
);

export default createAppContainer(MainNavigator);