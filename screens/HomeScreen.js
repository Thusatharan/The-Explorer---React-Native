import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';

const HomeScreen = props => {
    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    );
};

HomeScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Welcome',
        headerRight : () => 
            <HeaderButtons HeaderButtonComponent = {CustomHeaderButton}> 
                <Item  
                    title = "Add Places"
                    iconName = {Platform.OS === 'andoird' ? 'md-add' : 'ios-add'}
                />
            </HeaderButtons>
        
    };
};

const styles = StyleSheet.create({

});

export default HomeScreen;
