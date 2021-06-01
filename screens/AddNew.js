import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Colors from '../constans/Colors';
import { useDispatch } from 'react-redux';
import * as placesActions from '../store/PlacesActions';

const AddNew = props => {
    const [titleText, setTitleText] = useState('');

    const dispatch = useDispatch();

    const titleChangeHandler = text => {
        setTitleText(text);
    };

    const savePlace = () => {
        dispatch(placesActions.addPlaces(titleText));
        props.navigation.goBack();
    };


    return (
        <View style={styles.formContainer}>
            <Text style={styles.formHead}>Add following details</Text>
            <Text style={styles.formLabel}>Title</Text>
            <TextInput style={styles.formField} onChangeText={titleChangeHandler} value={titleText} />
            <Text style={styles.formLabel}>Title</Text>
            <TextInput style={styles.formField} />
            <Button color={Colors.primary} title="Add Place" style={styles.formButton} onPress={savePlace} />
        </View>
    );
};

AddNew.navigationOptions = navData => {
    return {
        headerTitle: 'Add a Place',
    };
};

const styles = StyleSheet.create({
    formContainer: {
        marginHorizontal: 10,
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 40,
    },

    formHead: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 20,
        fontFamily:'PTSerifBold'
    },

    formLabel: {
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 5,
        fontFamily:'PTSerif'
    },

    formField: {
        height: 40,
        paddingLeft: 10,
        fontSize: 18,
        borderRadius: 10,
        elevation: 8,
        backgroundColor: 'white',
        marginBottom: 25,
        borderBottomColor: Colors.primary,
        borderBottomWidth: 2,
        color: Colors.primary,
        fontFamily:'PTSerif'
    }
});

export default AddNew;