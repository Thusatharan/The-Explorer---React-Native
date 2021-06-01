import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import Colors from '../constans/Colors';   

const AddButton = props => {
    console.log(props);
    return (
        <TouchableOpacity activeOpacity='0.5' onPress={props.onpress}>
            <View style={styles.addbutton}>
                <Text style={styles.buttonText}>Add New Place</Text>
            </View>
        </TouchableOpacity>
    );
};



const styles = StyleSheet.create({
    addbutton:{
        width: '70%',
        alignItems: 'center',
        margin:20,
        padding: 15,
        backgroundColor: Colors.primary,
        borderRadius:18,
        elevation:8,
    },

    buttonText:{
        color: 'white',
        textTransform: 'uppercase',
    }
});

export default AddButton;