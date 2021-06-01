import React from 'react';
import { View, Text, StyleSheet, Platform, FlatList } from 'react-native';
import AddButton from '../components/CustomButton';
import { useSelector } from 'react-redux';
import ListItem from '../components/ListItem';


const HomeScreen = props => {

    const places = useSelector(state => state.places.places);

    return (
        <View style={styles.mainConainer}>

            <FlatList
                style={styles.listContainer}
                data={places}
                keyExtractor={item => item.id}
                renderItem={itemData => <ListItem
                    titleName={itemData.item.title}
                    onSelect={() => {
                        props.navigation.navigate('Details', {
                            placeName: itemData.item.title,
                            placeId: itemData.item.id
                        });
                    }}
                />
                }
            />

            <AddButton onpress={() => { props.navigation.navigate('AddNew') }} />

        </View>
    );
};

HomeScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Welcome',
    };
};

const styles = StyleSheet.create({
    mainConainer: {
        flex: 1,
        alignItems: 'center'
    },

    listContainer: {
        marginTop: 25,
    }
});

export default HomeScreen;
