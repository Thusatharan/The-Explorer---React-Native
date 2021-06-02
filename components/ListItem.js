import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Colors from '../constans/Colors';

const ListItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.9} style={styles.listItemContainer} onPress={props.onSelect}>
            <Image style={styles.image} source={{ uri: 'https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80' }} />
            <View style={styles.info}>
                <Text style={styles.title}>{props.titleName}</Text>
                <Text style={styles.address}>Address Not Available Now</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItemContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        width:"100%",
    },

    image: {
        width: '100%',
        height: 180,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        backgroundColor: '#ccc',
    },

    info: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        flexDirection:'row',
        justifyContent: 'space-between',
        marginLeft: 30,
        paddingHorizontal: 20,
        alignItems: 'center',
    },

    title: {
        marginBottom: 5,
        color: 'white',
        fontSize: 20,
        fontFamily:'PTSerifBold'
    },

    address: {
        fontFamily:'PTSerif',
        color: 'white',
    }
});

export default ListItem;