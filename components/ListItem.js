import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Colors from '../constans/Colors';

const ListItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.9} style={styles.listItemContainer} onPress={props.onSelect}>
            <Image style={styles.image} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png' }} />
            <View style={styles.info}>
                <Text style={styles.title}>{props.titleName}</Text>
                <Text style={styles.address}>Address Not Available Now</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: Colors.primary,
        paddingVertical: 15,
    },

    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#ccc',
    },

    info: {
        justifyContent: 'space-between',
        marginLeft: 30,
    },

    title: {
        marginBottom: 5,
        fontFamily:'PTSerifBold'
    },

    address: {
        fontFamily:'PTSerif'
    }
});

export default ListItem;