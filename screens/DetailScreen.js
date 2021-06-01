import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DetailScreen = props => {
    return (
        <View>
            <Text>DetailScreen</Text>
        </View>
    );
};


DetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('placeName'),
    };
};

const styles = StyleSheet.create({

});

export default DetailScreen;