import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import AddButton from '../components/CustomButton';

const HomeScreen = props => {
    console.log(props);
    return (
        <View style={styles.mainConainer}>
            
                <AddButton onpress={() => {props.navigation.navigate('AddNew')}}/>
            <Text>HomeScreen</Text>
        </View>
    );
};

HomeScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Welcome',
    };
};

const styles = StyleSheet.create({
    mainConainer:{
        flex: 1,
        alignItems:'center'
    }
});

export default HomeScreen;
