import React from 'react';
import { View, Text, StyleSheet, Platform, FlatList } from 'react-native';
import AddButton from '../components/CustomButton';
import {useSelector} from 'react-redux';


const HomeScreen = props => {

    const places = useSelector(state => state.places.places);

    return (
        <View style={styles.mainConainer}>
                <AddButton onpress={() => {props.navigation.navigate('AddNew')}}/>

                <FlatList
                    data={places}
                    keyExtractor={item => item.id}
                    renderItem={itemData => <Text>{itemData.item.title}</Text>}
                />
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
    },

});

export default HomeScreen;
